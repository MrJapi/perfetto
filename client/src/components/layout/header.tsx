import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerFooter
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border/40">
      <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <img 
              src="/attached_assets/Perfetto-Professional-logo.png" 
              alt="Perfetto Professional"
              className="h-14 w-auto"
            />
          </a>
        </Link>

        {/* Mobile Menu Trigger and Language Switcher */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <nav className="px-6 pt-6">
                <div className="space-y-4">
                  <Link href="/about">
                    <a className="block py-2 text-sm font-medium hover:text-primary text-center">
                      {t('nav.about')}
                    </a>
                  </Link>
                  <Separator />
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-center">{t('nav.products')}</p>
                    <Link href="/products/toilet-paper">
                      <a className="block py-2 text-sm hover:text-primary text-center">
                        {t('nav.productCategories.toiletPaper')}
                      </a>
                    </Link>
                    <Link href="/products/dispensers">
                      <a className="block py-2 text-sm hover:text-primary text-center">
                        {t('nav.productCategories.dispensers')}
                      </a>
                    </Link>
                    <Link href="/products/trash-bags">
                      <a className="block py-2 text-sm hover:text-primary text-center">
                        {t('nav.productCategories.trashBags')}
                      </a>
                    </Link>
                    <Link href="/products/hygiene">
                      <a className="block py-2 text-sm hover:text-primary text-center">
                        {t('nav.productCategories.hygiene')}
                      </a>
                    </Link>
                  </div>
                  <Separator />
                  <Link href="/certificates">
                    <a className="block py-2 text-sm font-medium hover:text-primary text-center">
                      {t('nav.certificates')}
                    </a>
                  </Link>
                  <Link href="/references">
                    <a className="block py-2 text-sm font-medium hover:text-primary text-center">
                      {t('nav.references')}
                    </a>
                  </Link>
                  <div className="pt-4 pb-8">
                    <Link href="/contact">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full bg-blue-50 hover:bg-blue-100 border-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 dark:border-blue-700 dark:text-white"
                      >
                        {t('nav.contactUs')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Centered Navigation - Desktop Only */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link href="/about">
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer dark:text-foreground">
                    {t('nav.about')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="dark:text-foreground">{t('nav.products')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4 dark:bg-background">
                    <li>
                      <Link href="/products/toilet-paper">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-foreground dark:hover:bg-accent">
                          {t('nav.productCategories.toiletPaper')}
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/dispensers">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-foreground dark:hover:bg-accent">
                          {t('nav.productCategories.dispensers')}
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/trash-bags">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-foreground dark:hover:bg-accent">
                          {t('nav.productCategories.trashBags')}
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/hygiene">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-foreground dark:hover:bg-accent">
                          {t('nav.productCategories.hygiene')}
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/certificates">
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer dark:text-foreground">
                    {t('nav.certificates')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/references">
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer dark:text-foreground">
                    {t('nav.references')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <LanguageSwitcher />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions - Desktop Only */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeSwitcher />
          <Link href="/contact">
            <Button variant="outline" size="sm" className="bg-blue-50 hover:bg-blue-100 border-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 dark:border-blue-700 dark:text-white">
              {t('nav.contactUs')}
            </Button>
          </Link>
        </div>

        {/* Mobile Right Side Actions */}
        <div className="md:hidden">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}