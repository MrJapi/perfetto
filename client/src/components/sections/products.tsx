import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useCallback, lazy, Suspense, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Lazy load dialog content
const ProductDialog = lazy(() => import("./product-dialog"));

type Product = {
  image: string;
  key: string;
  category: string;
};

type ProductSpecs = {
  key: string;
  specs: {
    material?: string;
    layers?: string;
    features: string[];
  };
};

// Product specifications
const productSpecs: ProductSpecs[] = [
  // Toilet Paper specs
  {
    key: "exclusive_single",
    specs: {
      material: "100% celuloza",
      layers: "3 sloja",
      features: ["Super soft", "Premium quality"]
    }
  },
  // Add more product specs as needed
];

const categoryCards = [
  {
    key: "toilet-paper",
    image: "/attached_assets/10 x professional.jpeg",
    title: "products.categories.toiletPaper.title",
    description: "products.categories.toiletPaper.description",
    href: "/products/toilet-paper"
  },
  {
    key: "dispensers",
    image: "/attached_assets/k4.jpg",
    title: "products.categories.dispensers.title",
    description: "products.categories.dispensers.description",
    href: "/products/dispensers"
  },
  {
    key: "trash-bags",
    image: "/attached_assets/kese 120 litara.jpeg",
    title: "products.categories.trashBags.title",
    description: "products.categories.trashBags.description",
    href: "/products/trash-bags"
  },
  {
    key: "hygiene",
    image: "/attached_assets/Deterdzent-za-pranje-sudova.jpg",
    title: "products.categories.hygiene.title",
    description: "products.categories.hygiene.description",
    href: "/products/hygiene"
  },
];

const productImages = [
  // Toilet Paper Products
  { image: "/attached_assets/1 rolna exclusive.jpeg", key: "exclusive_single", category: "toilet-paper" },
  { image: "/attached_assets/1 rolna sensitive.jpeg", key: "sensitive_single", category: "toilet-paper" },
  { image: "/attached_assets/1 rolna xxl.jpeg", key: "xxl_single", category: "toilet-paper" },
  { image: "/attached_assets/3 x perfetto.jpeg", key: "perfetto_triple", category: "toilet-paper" },
  { image: "/attached_assets/4 x classic.jpeg", key: "classic_four", category: "toilet-paper" },
  { image: "/attached_assets/4 x maxi b.jpeg", key: "maxi_b_four", category: "toilet-paper" },
  { image: "/attached_assets/4 x maxi perfetto.jpeg", key: "maxi_perfetto_four", category: "toilet-paper" },
  { image: "/attached_assets/4 x mega.jpeg", key: "mega_four", category: "toilet-paper" },
  { image: "/attached_assets/4 x professional.jpeg", key: "professional_four", category: "toilet-paper" },
  { image: "/attached_assets/4 x wipex.jpeg", key: "wipex_four", category: "toilet-paper" },
  { image: "/attached_assets/4 x xxl.jpeg", key: "xxl_four", category: "toilet-paper" },
  { image: "/attached_assets/6 x maxi.jpeg", key: "maxi_six", category: "toilet-paper" },
  { image: "/attached_assets/6 x xxl.jpeg", key: "xxl_six", category: "toilet-paper" },
  { image: "/attached_assets/8 BIG ROLL.jpeg", key: "big_roll_eight", category: "toilet-paper" },
  { image: "/attached_assets/8 x maxi.jpeg", key: "maxi_eight", category: "toilet-paper" },
  { image: "/attached_assets/8 x mega.jpeg", key: "mega_eight", category: "toilet-paper" },
  { image: "/attached_assets/8 XXL.jpeg", key: "xxl_eight", category: "toilet-paper" },
  { image: "/attached_assets/8=24 cashmere peach.jpeg", key: "cashmere_peach", category: "toilet-paper" },
  { image: "/attached_assets/10 CAMOMILE.jpeg", key: "camomile_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 Gold Touch novogodisnji.jpeg", key: "gold_touch", category: "toilet-paper" },
  { image: "/attached_assets/10 GOLD.jpeg", key: "gold_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 MAGIC.jpeg", key: "magic_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 PEACH 2.jpeg", key: "peach_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 ROYAL.jpeg", key: "royal_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x basic.jpeg", key: "basic_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x cashmere peach.jpeg", key: "cashmere_peach_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x de luxe.jpeg", key: "de_luxe_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x exclusive.jpeg", key: "exclusive_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x like silk.jpeg", key: "like_silk_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x lux.jpeg", key: "lux_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x premium.jpeg", key: "premium_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x professional.jpeg", key: "professional_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x sensitive.jpeg", key: "sensitive_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x soft touch.jpeg", key: "soft_touch_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x ultra soft.jpeg", key: "ultra_soft_ten", category: "toilet-paper" },
  { image: "/attached_assets/10 x xxl.jpeg", key: "xxl_ten", category: "toilet-paper" },
  { image: "/attached_assets/16 mere.jpeg", key: "mere_sixteen", category: "toilet-paper" },
  { image: "/attached_assets/16 x family pack.jpeg", key: "family_pack_sixteen", category: "toilet-paper" },
  { image: "/attached_assets/24 mega.jpeg", key: "mega_twentyfour", category: "toilet-paper" },
  { image: "/attached_assets/24 x maxi.jpeg", key: "maxi_twentyfour", category: "toilet-paper" },
  { image: "/attached_assets/nn.jpeg", key: "nn_special", category: "toilet-paper" },
  { image: "/attached_assets/perfetto.jpeg", key: "perfetto_special", category: "toilet-paper" },

  // Trash Bags Products
  { image: "/attached_assets/kese 40 litara.jpeg", key: "trash_40l", category: "trash-bags" },
  { image: "/attached_assets/kese 60 litara.jpeg", key: "trash_60l", category: "trash-bags" },
  { image: "/attached_assets/kese 80 litara.jpeg", key: "trash_80l", category: "trash-bags" },
  { image: "/attached_assets/kese 120 litara.jpeg", key: "trash_120l", category: "trash-bags" },
  { image: "/attached_assets/kese 120 strong  litara.jpeg", key: "trash_120l_strong", category: "trash-bags" },
  { image: "/attached_assets/kese 140 strong litara.jpeg", key: "trash_140l_strong", category: "trash-bags" },
  { image: "/attached_assets/kese strong 150 litara.jpeg", key: "trash_150l_strong", category: "trash-bags" },

  // Dispenser Products
  { image: "/attached_assets/k4.jpg", key: "dispenser_k4", category: "dispensers" },
  { image: "/attached_assets/k4b.jpg", key: "dispenser_k4b", category: "dispensers" },
  { image: "/attached_assets/k4m.jpg", key: "dispenser_k4m", category: "dispensers" },
  { image: "/attached_assets/k4t.jpg", key: "dispenser_k4t", category: "dispensers" },
  { image: "/attached_assets/k6.jpg", key: "dispenser_k6", category: "dispensers" },
  { image: "/attached_assets/k6b.jpg", key: "dispenser_k6b", category: "dispensers" },
  { image: "/attached_assets/k6m.jpg", key: "dispenser_k6m", category: "dispensers" },
  { image: "/attached_assets/k6t.jpg", key: "dispenser_k6t", category: "dispensers" },
  { image: "/attached_assets/mj1.jpg", key: "dispenser_mj1", category: "dispensers" },
  { image: "/attached_assets/mj1b.jpg", key: "dispenser_mj1b", category: "dispensers" },
  { image: "/attached_assets/mj1m.jpg", key: "dispenser_mj1m", category: "dispensers" },
  { image: "/attached_assets/mj1t.jpg", key: "dispenser_mj1t", category: "dispensers" },
  { image: "/attached_assets/og1.jpg", key: "dispenser_og1", category: "dispensers" },
  { image: "/attached_assets/og1b.jpg", key: "dispenser_og1b", category: "dispensers" },
  { image: "/attached_assets/og1m.jpg", key: "dispenser_og1m", category: "dispensers" },
  { image: "/attached_assets/s5.jpg", key: "dispenser_s5", category: "dispensers" },
  { image: "/attached_assets/s5b.jpg", key: "dispenser_s5b", category: "dispensers" },
  { image: "/attached_assets/s5c.jpg", key: "dispenser_s5c", category: "dispensers" },
  { image: "/attached_assets/s5m.jpg", key: "dispenser_s5m", category: "dispensers" },
  { image: "/attached_assets/Urusi-Perfetto-1.jpg", key: "dispenser_urusi", category: "dispensers" },

  // Hygiene Products
  { image: "/attached_assets/WC-sanitar.jpg", key: "hygiene_wc_sanitar", category: "hygiene" },
  { image: "/attached_assets/Podoper.jpg", key: "hygiene_podoper", category: "hygiene" },
  { image: "/attached_assets/Sredstvo-za-dezinfekciju.jpg", key: "hygiene_dezinfekcija", category: "hygiene" },
  { image: "/attached_assets/Odmascivac.jpg", key: "hygiene_odmascivac", category: "hygiene" },
  { image: "/attached_assets/Sredstvo-za-pranje-stakla.jpg", key: "hygiene_stakla", category: "hygiene" },
  { image: "/attached_assets/Deterdzent-za-pranje-sudova.jpg", key: "hygiene_deterdzent", category: "hygiene" },
  { image: "/attached_assets/Tecni-sapun-za-ruke.jpg", key: "hygiene_sapun", category: "hygiene" },
  { image: "/attached_assets/Podoper-2.jpg", key: "hygiene_podoper_2", category: "hygiene" },
  { image: "/attached_assets/Jabuka.jpg", key: "hygiene_jabuka", category: "hygiene" },
  { image: "/attached_assets/Lemon.jpg", key: "hygiene_lemon", category: "hygiene" },
  { image: "/attached_assets/Med.jpg", key: "hygiene_med", category: "hygiene" },
  { image: "/attached_assets/Perfetto-Professional.jpg", key: "hygiene_perfetto", category: "hygiene" },
];

export function Products({ category }: { category?: string }) {
  const { t } = useTranslation();
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Memoize filtered products to prevent recalculation on every render
  const filteredProducts = useMemo(() =>
    category ? productImages.filter(product => product.category === category) : [],
    [category]
  );

  // Memoize category cards for home page
  const visibleCategoryCards = useMemo(() =>
    !category ? categoryCards : [],
    [category]
  );

  const handleImageLoad = useCallback((key: string) => {
    setLoadedImages(prev => ({ ...prev, [key]: true }));
  }, []);

  const getProductCategory = useCallback((key: string) => {
    const categoryMapping: Record<string, string> = {
      'toilet-paper': 'toiletPaper',
      'dispensers': 'dispensers',
      'trash-bags': 'trashBags',
      'hygiene': 'hygiene'
    };
    return categoryMapping[key] || key;
  }, []);

  // Memoize category section to prevent unnecessary re-renders
  const categorySection = useMemo(() => (
    !category && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {visibleCategoryCards.map((category) => (
          <Link key={category.key} href={category.href}>
            <a className="block">
              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow dark:bg-gray-800 h-[420px] relative">
                <div className="relative w-full h-40 overflow-hidden bg-white">
                  {!loadedImages[category.key] && (
                    <Skeleton className="w-full h-40" />
                  )}
                  <img
                    src={category.image}
                    alt={t(category.title)}
                    width={400}
                    height={160}
                    className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                    loading={category.key === categoryCards[0].key ? "eager" : "lazy"}
                    onLoad={() => handleImageLoad(category.key)}
                  />
                </div>
                <CardHeader className="py-4">
                  <CardTitle className="dark:text-white">{t(category.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-300 text-sm h-[80px] overflow-hidden">
                    {t(category.description)}
                  </p>
                  <div className="absolute bottom-4 left-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-40"
                    >
                      <Button
                        variant="outline"
                        className="rounded-full bg-gradient-to-r from-primary/80 to-primary text-primary-foreground border-none shadow-md hover:shadow-lg transition-all duration-300 ease-in-out group text-sm px-4 py-2 dark:from-primary/60 dark:to-primary/90 w-full"
                      >
                        <span className="relative inline-flex items-center">
                          {t('products.viewCategory')}
                          <motion.span
                            className="ml-2 transform inline-block"
                            initial={{ x: 0 }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            →
                          </motion.span>
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    )
  ), [visibleCategoryCards, loadedImages, t]);

  // Memoize products section to prevent unnecessary re-renders
  const productsSection = useMemo(() => (
    category && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProducts.map((product, index) => (
          <Card
            key={product.key}
            className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow dark:bg-gray-800"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative w-full h-48 overflow-hidden bg-white">
              {!loadedImages[product.key] && (
                <Skeleton className="w-full h-48" />
              )}
              <img
                src={product.image}
                alt={t(`products.categories.${getProductCategory(product.category)}.title`)}
                width={400}
                height={192}
                className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                loading={index < 6 ? "eager" : "lazy"}
                fetchPriority={index < 3 ? "high" : "auto"}
                decoding="async"
                onLoad={() => handleImageLoad(product.key)}
              />
            </div>
            <CardHeader>
              <CardTitle className="dark:text-white">
                {t(`products.categories.${getProductCategory(product.category)}.title`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-300">
                {t(`products.categories.${getProductCategory(product.category)}.description`)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  ), [category, filteredProducts, loadedImages, t, getProductCategory]);

  return (
    <>
      <section id="products" className="py-12 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t('products.title')}
          </h2>
          {categorySection}
          {productsSection}
        </div>
      </section>

      {/* Product Details Dialog - Lazy loaded */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <Suspense fallback={<DialogContent className="sm:max-w-[425px]"><Skeleton className="w-full h-64" /></DialogContent>}>
          <ProductDialog product={selectedProduct} />
        </Suspense>
      </Dialog>
    </>
  );
}