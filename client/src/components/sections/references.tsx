import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { motion } from "framer-motion";

const references = [
  {
    id: 1,
    image: "/attached_assets/Aerodrom-Nikola-Tesla-ojtovkp8pfyg7jvlt2szi8ga83bl7rnkfwsfm8xbmu.jpeg",
    name: "Aerodrom Nikola Tesla"
  },
  {
    id: 2,
    image: "/attached_assets/aman-ojtovmkx3410ursvi3m8n7z7ev2bn5v1463eksujae.jpeg",
    name: "Aman"
  },
  {
    id: 3,
    image: "/attached_assets/aroma-ojtovhvq4xul8pzp9jl3sr5wfxphkocdfitz6f1i5i.jpeg",
    name: "Aroma"
  },
  {
    id: 4,
    image: "/attached_assets/art-petrol-1-ojtov5nto3dv1shg8wayec8wpxdpslzv1ucnxtjmee.jpeg",
    name: "Art Petrol"
  },
  {
    id: 5,
    image: "/attached_assets/assist-trend-logo-ojtoucits89z1vnrz1pir1lmazdc5zs6lu4m28qtra.jpeg",
    name: "Assist Trend"
  },
  {
    id: 6,
    image: "/attached_assets/crowne-plaza-ojtouy545f3kgwsdgt1xue57yues3160ct4s3lurs6.jpeg",
    name: "Crowne Plaza"
  },
  {
    id: 7,
    image: "/attached_assets/crystal-hotel-ojtouoqq92qp8t60zozo5gim0zp3y24ozilxau8pie.jpeg",
    name: "Crystal Hotel"
  },
  {
    id: 8,
    image: "/attached_assets/design-hotel-ojtoucits89z1vnrz1pir1lmazdc5zs6lu4m28qtra.jpeg",
    name: "Design Hotel"
  },
  {
    id: 9,
    image: "/attached_assets/Djurdjevic-logo-ojto56eerxtk5s7yy615ze99njfi1ruxt98jfi2cdi.jpeg",
    name: "Đurđević"
  },
  {
    id: 10,
    image: "/attached_assets/domaca-trgovina-ojtouy545f3kgwsdgt1xue57yues3160ct4s3lurs6.jpeg",
    name: "Domaća Trgovina"
  },
  {
    id: 11,
    image: "/attached_assets/e-center-ojtouy545f3kgwsdgt1xue57yues3160ct4s3lurs6.jpeg",
    name: "E-Center"
  },
  {
    id: 12,
    image: "/attached_assets/franca-ojtotzd34jryjc6w3w0qs4x5zl6768bxw0ztcdac6e.jpeg",
    name: "Franca"
  },
  {
    id: 13,
    image: "/attached_assets/gak-pekara-ojtoukzdhqljydbhlnd5vhgrng7n39prmzzzdqea7a.jpeg",
    name: "Gak Pekara"
  },
  {
    id: 14,
    image: "/attached_assets/gala-promet-ojtoucits89z1vnrz1pir1lmazdc5zs6lu4m28qtra.jpeg",
    name: "Gala Promet"
  },
  {
    id: 15,
    image: "/attached_assets/Gold-Pack-ojto4f539qs8t3bkdc8zh34wfd5uujuq1ibgih6rdy.jpeg",
    name: "Gold Pack"
  },
  {
    id: 16,
    image: "/attached_assets/gomex-logo1-2-ojtox1c7c5yi9pr59pk3dv63ho456tgjb5bmhqr9ye.jpeg",
    name: "Gomex"
  },
  {
    id: 17,
    image: "/attached_assets/hotel-moskva-bg-ojtov5nto3dv1shg8wayec8wpxdpslzv1ucnxtjmee.jpeg",
    name: "Hotel Moskva"
  },
  {
    id: 18,
    image: "/attached_assets/kalemegdanska-terasa-ojtov5nto3dv1shg8wayec8wpxdpslzv1ucnxtjmee.jpeg",
    name: "Kalemegdanska Terasa"
  },
  {
    id: 19,
    image: "/attached_assets/klub-knjizevnika-ojtou6vsn82947vyvz9rc30uqo54vt5sl27p6kz6sm.jpeg",
    name: "Klub Književnika"
  },
  {
    id: 20,
    image: "/attached_assets/knez-petrolg-logo-ojtovmkx3410ursvi3m8n7z7ev2bn5v1463eksujae.jpeg",
    name: "Knez Petrol"
  },
  {
    id: 21,
    image: "/attached_assets/koka-mar-ojtov1wgwr8prcmwuuog4d72cdw8xtkxpbqq0pp73a.jpeg",
    name: "Koka Mar"
  },
  {
    id: 22,
    image: "/attached_assets/konoba-akustik-ojtov5nto3dv1shg8wayec8wpxdpslzv1ucnxtjmee.jpeg",
    name: "Konoba Akustik"
  },
  {
    id: 23,
    image: "/attached_assets/kovplast-ojtox1c7c5yi9pr59pk3dv63ho456tgjb5bmhqr9ye.jpeg",
    name: "Kovplast"
  },
  {
    id: 24,
    image: "/attached_assets/logo-femic-ojtovc8ozxmvb27w6h5cdsl4vmhaahpzeqx2ar9v6u.jpeg",
    name: "Femić"
  },
  {
    id: 25,
    image: "/attached_assets/luki-ojtou8rh0w4trft8l030h2jrxfvvb7d99bio54weg6.jpeg",
    name: "Luki"
  },
  {
    id: 26,
    image: "/attached_assets/Matijevic-ojto56eerxtk5s7yy615ze99njfi1ruxt98jfi2cdi.jpeg",
    name: "Matijević"
  },
  {
    id: 27,
    image: "/attached_assets/Mleki-ojtotjdtwd631yu3p7433qybw1cyjdki5twk6ny146.jpeg",
    name: "Mleki"
  },
  {
    id: 28,
    image: "/attached_assets/monument-1-ojtovhvq4xul8pzp9jl3sr5wfxphkocdfitz6f1i5i.jpeg",
    name: "Monument"
  },
  {
    id: 29,
    image: "/attached_assets/neretvna-komers-ojtovhvq4xul8pzp9jl3sr5wfxphkocdfitz6f1i5i.jpeg",
    name: "Neretvanska Komers"
  },
  {
    id: 30,
    image: "/attached_assets/Niksan-ojto45qpdefdkzp7w86ps5iahig6pkteo7slppkp46.jpeg",
    name: "Niksan"
  },
  {
    id: 31,
    image: "/attached_assets/ns-bomi-obrenovac-ojtovmkx3410ursvi3m8n7z7ev2bn5v1463eksujae.jpeg",
    name: "NS Bomi Obrenovac"
  },
  {
    id: 32,
    image: "/attached_assets/pulito-new-ojtouy545f3kgwsdgt1xue57yues3160ct4s3lurs6.jpeg",
    name: "Pulito"
  },
  {
    id: 33,
    image: "/attached_assets/queen-bazeni-dobanovci-ojtotzd34jryjc6w3w0qs4x5zl6768bxw0ztcdac6e.jpeg",
    name: "Queen Bazeni Dobanovci"
  },
  {
    id: 34,
    image: "/attached_assets/RK-PLAST-ojto45qpdefdkzp7w86ps5iahig6pkteo7slppkp46.jpeg",
    name: "RK Plast"
  },
  {
    id: 35,
    image: "/attached_assets/robot-ojtovkp8pfyg7jvlt2szi8ga83bl7rnkfwsfm8xbmu.jpeg",
    name: "Robot"
  },
  {
    id: 36,
    image: "/attached_assets/sinagoga-ojtou8rh0w4trft8l030h2jrxfvvb7d99bio54weg6.jpeg",
    name: "Sinagoga"
  },
  {
    id: 37,
    image: "/attached_assets/steki-komerc-logo-ojtove4ddlpfya55vhylis422e80pvxg30819b72ue.jpeg",
    name: "Steki Komerc"
  },
  {
    id: 38,
    image: "/attached_assets/toi-toi-ojtov1wgwr8prcmwuuog4d72cdw8xtkxpbqq0pp73a.jpeg",
    name: "Toi Toi"
  },
  {
    id: 39,
    image: "/attached_assets/trnava-promet-1-ojtov5nto3dv1shg8wayec8wpxdpslzv1ucnxtjmee.jpeg",
    name: "Trnava Promet"
  },
  {
    id: 40,
    image: "/attached_assets/univer-ojtoucits89z1vnrz1pir1lmazdc5zs6lu4m28qtra.jpeg",
    name: "Univer"
  },
  {
    id: 41,
    image: "/attached_assets/virdzinija-ojtovhvq4xul8pzp9jl3sr5wfxphkocdfitz6f1i5i.jpeg",
    name: "Virdžinija"
  },
  {
    id: 42,
    image: "/attached_assets/viva-92-ojtoukzdhqljydbhlnd5vhgrng7n39prmzzzdqea7a.jpeg",
    name: "Viva 92"
  },
  {
    id: 43,
    image: "/attached_assets/vukenovic-ojtotvlqd7mt8wccpue8i5vbm1oqbfx0jidvf9fwva.jpeg",
    name: "Vukenović"
  }
];

const additionalCompanies = [
  "AMAN DOO", "CASH & CARRY PLUS", "AROMA MARKETS", "UNIVER EXPORT", "GOMEX",
  "STAR MARKET", "NS BOMI", "NERETVA KOMERC", "KOV PLAST", "PEGAZ",
  "LUKI KOMERC", "KOKA MAR", "LAMBINO PLUS", "KVISKO", "QVATTRO COMPANY DOO",
  "GODINA DOO", "AKSIAL", "STARI AS I SINOVI", "MESOPROMRT GROUP", "POOLS QUEEN",
  "VIVA 92", "ART PETROL", "RAMMAKS DMD DOO", "SINAGOGA", "JABLANICA MP",
  "VIVA NATURA", "VIRDŽINIJA", "GALA", "MLEKI DOO", "BOSIC",
  "STING", "FREE LINE DOO", "MY ARGOS", "TOI TOI DOO", "PULITO PRODUKT",
  "RK PLAST", "LAZIĆ PROMET", "SRKI BOY", "VETUS PROMET", "HARIZMA",
  "CROWNE PLAZA", "HOTEL MOSKVA", "INTER HOLLYWOOD", "LIFE DESINGN HOTEL",
  "HOTEL CRYSTAL", "KALEMEGDANSKA TERASA", "WRITERS CLUB BELGRADE",
  "RESTAURANT AKUSTIK", "BAKERY GAK", "BAKERY MAK", "BAKERY ILIĆ",
  "BAKERY TUCI", "GRILL UNO", "PASTRY SHOP ŠUŠIĆ", "BUTCHER \"JOVANOVIĆ\"",
  "BUTCHER \"VULE\"", "BUTCHER \"MOMČILO\"", "BUTCHER \"MILAN\"",
  "BUTCHER \"BIĆE BOLJE\"", "FEMIĆ DOO", "ROBOT", "EMONA CENTER",
  "FIFLOAR NT", "FRANCA", "MESOPROMET", "FOCUS PRECIS DOO", "STEKI KOMERC",
  "EUROMASTER DOO", "UAB ST CAPITAL", "UNIX DOO", "ASSIST-TREND PAPIR DOO",
  "ETNO GRAF DOO", "RIVAL", "AVB TEAM DOO", "EUROCOM", "GOLD PACK DOO",
  "RAKI I NIK", "MONUMENT RESTORAN", "ARKADIJE RESTAURANT"
];

interface ReferencesProps {
  limit?: number;
}

export function References({ limit }: ReferencesProps) {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const { t } = useTranslation();

  const displayedReferences = limit ? references.slice(0, limit) : references;

  useEffect(() => {
    displayedReferences.forEach(ref => {
      const img = new Image();
      img.src = ref.image;
      img.onload = () => setLoadedImages(prev => ({ ...prev, [ref.id]: true }));
    });
  }, [displayedReferences]);

  if (limit) {
    return (
      <section className="bg-gradient-to-b from-blue-50/50 dark:from-blue-950/10 to-transparent pb-16">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                {t('references.title')}
              </h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary/80 to-primary text-primary-foreground border-none shadow-md hover:shadow-lg transition-all duration-300 ease-in-out group px-8"
                asChild
              >
                <Link href="/references">
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {displayedReferences.map((reference) => (
              <Card 
                key={reference.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200/50"
              >
                <div className="relative aspect-[4/3] p-3 bg-gray-50">
                  <img
                    src={reference.image}
                    alt={reference.name}
                    className="w-full h-full object-contain transition-opacity duration-500"
                    style={{ 
                      opacity: loadedImages[reference.id] ? 1 : 0,
                      visibility: loadedImages[reference.id] ? 'visible' : 'hidden'
                    }}
                    loading="lazy"
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [reference.id]: true }))}
                  />
                </div>
                <div className="p-2 text-center border-t border-gray-200/50">
                  <h3 className="text-xs font-medium text-gray-600 dark:text-gray-900">
                    {reference.name}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {t('references.pageTitle')}
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {references.map((reference) => (
            <Card 
              key={reference.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] p-4 bg-gray-50">
                <img
                  src={reference.image}
                  alt={reference.name}
                  className="w-full h-full object-contain transition-opacity duration-500"
                  style={{ 
                    opacity: loadedImages[reference.id] ? 1 : 0,
                    visibility: loadedImages[reference.id] ? 'visible' : 'hidden'
                  }}
                  loading="lazy"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [reference.id]: true }))}
                />
              </div>
              <div className="p-4 text-center border-t border-gray-200/50">
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {reference.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-24 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-900 dark:text-gray-50">
            {t('references.additionalPartnersTitle')}
          </h3>
          <div className="columns-2 sm:columns-3 md:columns-4 gap-6 text-sm">
            {additionalCompanies.map((company, index) => (
              <div 
                key={index}
                className="break-inside-avoid mb-3 px-3 py-2 rounded-md hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="text-gray-900 dark:text-gray-200">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}