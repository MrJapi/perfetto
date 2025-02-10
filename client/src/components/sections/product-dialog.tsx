import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

type Product = {
  image: string;
  key: string;
  category: string;
};

type ProductSpecs = {
  material?: string;
  layers?: string;
  features: string[];
};

const productSpecs: Record<string, ProductSpecs> = {
  // Toilet Paper specs
  exclusive_single: {
    material: "100% celuloza",
    layers: "3 sloja",
    features: ["Super soft", "Premium quality"]
  },
  // Add more product specs as needed
};

const getProductCategory = (key: string) => {
  const categoryMapping: Record<string, string> = {
    'toilet-paper': 'toiletPaper',
    'dispensers': 'dispensers',
    'trash-bags': 'trashBags',
    'hygiene': 'hygiene'
  };
  return categoryMapping[key] || key;
};

type ProductDialogProps = {
  product: Product | null;
};

export default function ProductDialog({ product }: ProductDialogProps) {
  const { t } = useTranslation();

  if (!product) return null;

  const specs = productSpecs[product.key];

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          {t(`products.categories.${getProductCategory(product.category)}.title`)}
        </DialogTitle>
      </DialogHeader>
      <div className="mt-4">
        <div className="w-full h-64 bg-white rounded-lg overflow-hidden mb-4">
          <img
            src={product.image}
            alt={t(`products.categories.${getProductCategory(product.category)}.title`)}
            className="w-full h-full object-contain"
            width={400}
            height={256}
            loading="eager"
          />
        </div>
        {/* Product Specifications */}
        {specs && (
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Specifications:</h4>
            <div className="space-y-2">
              {specs.material && (
                <p>Material: {specs.material}</p>
              )}
              {specs.layers && (
                <p>Layers: {specs.layers}</p>
              )}
              {specs.features && (
                <div>
                  <p className="font-medium">Features:</p>
                  <ul className="list-disc list-inside">
                    {specs.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DialogContent>
  );
}
