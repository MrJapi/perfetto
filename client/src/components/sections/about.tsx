import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Building2, Users, Award, Truck, CheckCircle, Target, Zap, HeartHandshake } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";

const values = [
  {
    key: "quality",
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    key: "innovation",
    icon: <Zap className="h-6 w-6" />
  },
  {
    key: "sustainability",
    icon: <Target className="h-6 w-6" />
  },
  {
    key: "partnership",
    icon: <HeartHandshake className="h-6 w-6" />
  }
];

const teamPhotos = [
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=800&q=75",
    key: "manufacturing",
    icon: <Award className="h-8 w-8 text-blue-600" />
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=800&q=75",
    key: "development",
    icon: <Building2 className="h-8 w-8 text-blue-600" />
  },
  {
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&w=800&q=75",
    key: "quality",
    icon: <Users className="h-8 w-8 text-blue-600" />
  }
];

const stats = [
  { key: "experience", icon: <Building2 className="h-6 w-6" /> },
  { key: "clients", icon: <Users className="h-6 w-6" /> },
  { key: "products", icon: <Award className="h-6 w-6" /> },
  { key: "presence", icon: <Truck className="h-6 w-6" /> }
];

export function About() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();

  const handleImageLoad = (key: string) => {
    setLoadedImages(prev => ({ ...prev, [key]: true }));
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/20 dark:to-background pointer-events-none" />
        <div className="container pl-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
              <span>
                {t('about.hero.title')}
              </span>
              <br />
              {t('about.hero.subtitle')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('about.hero.description')}
            </p>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
              {t('about.hero.trust')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container pl-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('about.values.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.values.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ key, icon }) => (
            <Card key={key} className="relative overflow-hidden group hover:shadow-lg transition-all dark:bg-card/80 dark:hover:bg-card/90">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform -translate-x-1 group-hover:translate-x-0 transition-transform" />
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-card-foreground">{t(`about.values.items.${key}.title`)}</h3>
                <p className="text-muted-foreground dark:text-muted-foreground">{t(`about.values.items.${key}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section with Stats */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent">
        <div className="container pl-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t('about.mission.title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.mission.description')}
              </p>
              <Separator className="my-8" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t('about.mission.vision.title')}</h3>
                <p className="text-muted-foreground">
                  {t('about.mission.vision.description')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map(({ key, icon }) => (
                <div key={key} className="text-center space-y-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{t(`about.mission.stats.${key}.value`)}</p>
                    <p className="text-sm text-muted-foreground">{t(`about.mission.stats.${key}.label`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container pl-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('about.expertise.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.expertise.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamPhotos.map((photo) => (
            <Card key={photo.key} className="overflow-hidden hover:shadow-lg transition-all duration-300 dark:bg-card/80">
              <div className="relative w-full h-64">
                {!loadedImages[photo.key] && (
                  <div className="absolute inset-0">
                    <Skeleton className="w-full h-full" />
                  </div>
                )}
                <img
                  src={photo.image}
                  alt={t(`about.expertise.areas.${photo.key}.title`)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onLoad={() => handleImageLoad(photo.key)}
                  style={{ opacity: loadedImages[photo.key] ? 1 : 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent dark:from-black/80 dark:via-black/40" />
              </div>
              <CardContent className="relative -mt-20 bg-white/95 dark:bg-card/95 backdrop-blur-sm p-6">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-lg">
                  {photo.icon}
                </div>
                <div className="text-center pt-8">
                  <h3 className="font-bold text-lg mb-2 text-foreground dark:text-card-foreground">{t(`about.expertise.areas.${photo.key}.title`)}</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground">{t(`about.expertise.areas.${photo.key}.description`)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}