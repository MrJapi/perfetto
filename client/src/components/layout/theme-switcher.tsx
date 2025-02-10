import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Insert script into head to prevent flash of wrong theme
const themeScript = `
  (function() {
    function getTheme() {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (!savedTheme && systemPrefersDark) ? 'dark' : 'light';
    }

    const theme = getTheme();
    document.documentElement.classList.toggle('dark', theme === 'dark');
  })();
`;

// Add script to head
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.innerHTML = themeScript;
  document.head.appendChild(script);
}

export function ThemeSwitcher() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize state on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));
    setMounted(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="relative mx-2">
      <button
        onClick={toggleTheme}
        className={`
          w-12 h-6 rounded-full p-1 bg-gray-200 dark:bg-gray-700
          transition-colors duration-200 ease-in-out relative
          focus:outline-none focus:ring-2 focus:ring-primary
        `}
        aria-label={isDark ? t('theme.dark') : t('theme.light')}
      >
        <span
          className={`
            block w-4 h-4 rounded-full bg-white dark:bg-gray-200
            transition-transform duration-200 ease-in-out
            ${isDark ? 'translate-x-6' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
}