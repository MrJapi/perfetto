import { useTranslation } from "react-i18next";

export function Partners() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container pl-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('partners.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75">
          {/* Using company names as text since we shouldn't use logos */}
          <div className="text-xl font-semibold">Microsoft</div>
          <div className="text-xl font-semibold">Apple</div>
          <div className="text-xl font-semibold">Google</div>
          <div className="text-xl font-semibold">Amazon</div>
        </div>
      </div>
    </section>
  );
}