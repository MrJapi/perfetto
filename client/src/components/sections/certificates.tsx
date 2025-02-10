import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { memo } from 'react';

const certificates = [
  {
    image: "/attached_assets/Femic-sertifikat-1-3.jpg",
    key: "iso14001"
  },
  {
    image: "/attached_assets/Femic-sertifikat-2-3.jpg",
    key: "iso22000_en"
  },
  {
    image: "/attached_assets/Femic-sertifikat-3-3.jpg",
    key: "iso22000_sr"
  },
  {
    image: "/attached_assets/Femic-sertifikat-5-3.jpg",
    key: "iso9001_sr"
  },
  {
    image: "/attached_assets/Femic-sertifikat-10-3.jpg",
    key: "haccp"
  },
  {
    image: "/attached_assets/Femic-sertifikat-11-3.jpg",
    key: "iso9001_sr_2"
  },
  {
    image: "/attached_assets/Femic-sertifikat-12.jpg",
    key: "registration"
  },
  {
    image: "/attached_assets/Femic-sertifikat-13.jpg",
    key: "iso9001_en"
  }
] as const;

interface CertificatesProps {
  variant?: 'grid' | 'slideshow';
  showIntro?: boolean;
  limit?: number;
}

const CertificateCard = memo(({ cert, t }: { cert: typeof certificates[0], t: any }) => (
  <Card className="overflow-hidden">
    <div className="aspect-[3/4] w-full bg-gray-50 dark:bg-gray-900 p-4">
      <img
        src={cert.image}
        alt={t(`certificates.items.${cert.key}.title`)}
        className="w-full h-full object-contain rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-base mb-1 text-gray-900 dark:text-gray-50">
        {t(`certificates.items.${cert.key}.title`)}
      </h3>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        {t(`certificates.items.${cert.key}.description`)}
      </p>
    </div>
  </Card>
));

export function Certificates({ variant = 'grid', showIntro, limit }: CertificatesProps) {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const displayedCertificates = limit ? certificates.slice(0, limit) : certificates;

  // Memoize the slide transition function
  const transitionSlide = useCallback(() => {
    if (displayedCertificates.length === 0) return;
    setCurrentSlide((prev) => {
      const nextSlide = (prev + 1) % displayedCertificates.length;
      return nextSlide;
    });
  }, [displayedCertificates.length]);

  // Reset current slide when certificates change
  useEffect(() => {
    setCurrentSlide(0);
  }, [displayedCertificates.length]);

  // Handle slideshow timer
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (variant === 'slideshow' && !isHovered && displayedCertificates.length > 0) {
      timer = setInterval(transitionSlide, 5000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [variant, isHovered, displayedCertificates.length, transitionSlide]);

  // Handle image loading errors
  const handleImageError = (index: number) => {
    setError(`Failed to load image ${index + 1}`);
    console.error(`Failed to load certificate image at index ${index}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
        <button 
          onClick={() => setError(null)} 
          className="ml-4 underline hover:no-underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (variant === 'slideshow') {
    return (
      <section className="py-8 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/10 to-transparent">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
              {t('certificates.title')}
            </h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary/80 to-primary text-primary-foreground border-none shadow-md hover:shadow-lg transition-all duration-300 ease-in-out group px-8"
                asChild
              >
                <Link href="/certificates">
                  <span className="relative inline-flex items-center">
                    See More
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
                </Link>
              </Button>
            </motion.div>
          </div>

          {displayedCertificates.length > 0 && (
            <div
              className="relative max-w-2xl mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="aspect-[4/3] relative p-8">
                    <img
                      src={displayedCertificates[currentSlide].image}
                      alt={t(`certificates.items.${displayedCertificates[currentSlide].key}.title`)}
                      className={cn(
                        "w-full h-full object-contain transition-opacity duration-500",
                        loadedImages[currentSlide] ? "opacity-100" : "opacity-0"
                      )}
                      loading="lazy"
                      onLoad={() => setLoadedImages(prev => ({ ...prev, [currentSlide]: true }))}
                      onError={() => handleImageError(currentSlide)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
                  </div>
                  <motion.div
                    className="p-4 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {t(`certificates.items.${displayedCertificates[currentSlide].key}.title`)}
                    </h3>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {displayedCertificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary w-6 scale-100'
                        : 'bg-primary/40 scale-75 hover:scale-90 hover:bg-primary/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="py-8">
      <div className="container">
        {showIntro && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">
              {t('certificates.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('certificates.introText')}
            </p>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto"
        >
          {displayedCertificates.map((cert) => (
            <motion.div key={cert.key} variants={itemVariants}>
              <CertificateCard cert={cert} t={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}