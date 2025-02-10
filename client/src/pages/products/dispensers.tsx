import { ProductLayout } from "@/components/layout/product-layout";
import { Products } from "@/components/sections/products";
import { useTranslation } from "react-i18next";

export default function Dispensers() {
  const { t } = useTranslation();

  return (
    <ProductLayout>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          {t('products.categories.dispensers.pageTitle')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('products.categories.dispensers.pageDescription')}
        </p>
        <div className="grid gap-6 md:grid-cols-3 text-center mb-12">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30">
            <h3 className="font-semibold mb-2 text-foreground dark:text-white">
              {t('products.categories.dispensers.features.touchFree.title')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('products.categories.dispensers.features.touchFree.description')}
            </p>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30">
            <h3 className="font-semibold mb-2 text-foreground dark:text-white">
              {t('products.categories.dispensers.features.smart.title')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('products.categories.dispensers.features.smart.description')}
            </p>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30">
            <h3 className="font-semibold mb-2 text-foreground dark:text-white">
              {t('products.categories.dispensers.features.universal.title')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('products.categories.dispensers.features.universal.description')}
            </p>
          </div>
        </div>
      </div>
      <Products category="dispensers" />
    </ProductLayout>
  );
}