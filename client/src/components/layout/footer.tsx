import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-50/50 border-t border-blue-100">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <img 
                src="/attached_assets/Perfetto-Professional-logo.png" 
                alt="Perfetto Professional"
                className="h-12 w-auto"
              />
            </div>
            <div className="space-y-2 text-sm text-blue-700">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1" />
                <div className="flex flex-col">
                  <span>{t('footer.contact.office')}</span>
                  <span>{t('footer.contact.mobile1')}</span>
                  <span>{t('footer.contact.mobile2')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">{t('footer.quickLinks')}</h3>
            <nav className="space-y-2">
              <Link href="/about">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('nav.about')}
                </a>
              </Link>
              <Link href="/certificates">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('nav.certificates')}
                </a>
              </Link>
              <Link href="/references">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('nav.references')}
                </a>
              </Link>
              <Link href="/contact">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('nav.contactUs')}
                </a>
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">{t('nav.products')}</h3>
            <nav className="space-y-2">
              <Link href="/products/toilet-paper">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('nav.productCategories.toiletPaper')}
                </a>
              </Link>
              <Link href="/products/dispensers">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('nav.productCategories.dispensers')}
                </a>
              </Link>
              <Link href="/products/trash-bags">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('nav.productCategories.trashBags')}
                </a>
              </Link>
              <Link href="/products/hygiene">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('nav.productCategories.hygiene')}
                </a>
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">{t('footer.legal')}</h3>
            <nav className="space-y-2">
              <Link href="/privacy">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('footer.privacy')}
                </a>
              </Link>
              <Link href="/terms">
                <a className="block text-sm text-blue-700 hover:text-blue-900 transition-colors">
                  {t('footer.terms')}
                </a>
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-blue-100" />

        {/* Copyright */}
        <div className="text-center text-sm text-blue-700">
          <p>© {year} Perfetto Professional. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}