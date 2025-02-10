import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

// Updated carousel slides to just images without duplicate text
const slides = [
  {
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&w=1920&q=75"
  },
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&w=1920&q=75"
  },
  {
    image: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&w=1920&q=75"
  },
];

export function Hero() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    if (slides.length <= 1) return;

    const nextIndex = (currentIndex + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [currentIndex]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      const prevIndex = emblaApi.selectedScrollSnap();
      setCurrentIndex(prevIndex);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      const nextIndex = emblaApi.selectedScrollSnap();
      setCurrentIndex(nextIndex);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] h-full min-w-0">
              <div className="relative w-full h-full">
                {!loadedImages[index] && (
                  <div className="absolute inset-0">
                    <Skeleton className="w-full h-full" />
                  </div>
                )}
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onLoad={() => handleImageLoad(index)}
                  style={{ opacity: loadedImages[index] ? 1 : 0 }}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content - Separate from images */}
      <div className="relative h-full">
        <div className="container h-full flex flex-col justify-center items-center text-center">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300">
                {t('hero.title')}
              </span>
              <br />
              <span className="text-foreground dark:text-white">
                {t('hero.subtitle')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground dark:text-white/80 max-w-[800px] mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary/80 to-primary text-primary-foreground border-none shadow-md hover:shadow-lg transition-all duration-300 ease-in-out group px-8"
                  asChild
                >
                  <a href="#products">
                    <span className="relative inline-flex items-center">
                      {t('hero.viewProducts')}
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
                  </a>
                </Button>
              </motion.div>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg px-8 bg-white/10 hover:bg-white/20 text-foreground dark:text-white border-white/20" 
                asChild
              >
                <a href="#contact">{t('hero.contactSales')}</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-4' : 'bg-primary/50'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-foreground dark:text-white transition-colors"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-foreground dark:text-white transition-colors"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}