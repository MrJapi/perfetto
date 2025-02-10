import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Politika Privatnosti
            </h1>
            <div className="prose prose-blue max-w-none">
              <section className="mb-8">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Sa ponosom Vam predstavljamo svoj web sajt i želimo da izrazimo zadovoljstvo Vašim interesovanjem 
                  za našu kompaniju i proizvode koje nudimo. S obzirom da veoma ozbiljno shvatamo zaštitu korisničkih 
                  ličnih podataka, namera nam je da se osećate sigurno dok se nalazite na našem sajtu.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Zaštita vaše privatnosti pri obradi vaših ličnih podataka za nas predstavlja prioritet u svim 
                  poslovnim procesima. Lične podatke dobijene zahvaljujući Vašoj poseti našem web sajtu obrađujemo 
                  u skladu sa zakonskim odredbama i regulativama u zemljama u kojima je naš sajt prisutan.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Naša politika zaštite podataka zasnovana je na kodeksima ponašanja primenljivim na našu kompaniju. 
                  Na našem web sajtu se mogu nalaziti linkovi ka drugim sajtovima, na koje se ne odnosi naša politika 
                  privatnosti. Iako vodimo računa da pažljivo proverimo sadržaj ovih sajtova, ne možemo preuzeti 
                  odgovornost za sadržaj eksternih linkova. Za sadržaj linkovanih sajtova odgovorni su isključivo 
                  njihovi vlasnici i operateri.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Kompanija Femic co poštuje privatnost ličnih podataka.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Prikupljanje i Obrada Podataka
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Prikupljamo, analiziramo i obrađujemo podatke o proizvodima koje naši posetioci traže i za koje 
                  se odlučuju, kao i o stranicama koje posećuju. Te podatke koristimo da bismo poboljšali ponudu i 
                  izgled naših stranica, i omogućili jednostavnije korišćenje, sigurniju i lakšu pretragu.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Korišćenje Podataka
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Vaši podaci su nam potrebni kako bismo Vas redovno obaveštavali ili Vam eventualno poslali upitnik 
                  o našim uslugama. Podrazumeva se da učestvovanje u ovakvim aktivnostima nije obavezno. Ukoliko ne 
                  želite da učestvujete u ovim aktivnostima, možete nas u bilo kom trenutku obavestiti pismom ili 
                  putem elektronske pošte kako bismo ograničili korišćenje vaših podataka u skladu sa Vašim zahtevom.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Pravo Pristupa Ličnim Podacima
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Na vaš zahtev, naša kompanija će Vas bez odlaganja obavestiti pisanim putem, a u skladu sa važećim zakonom, 
                  da li u svom posedu ima vaše lične podatke i ako je to slučaj, koji su tačno podaci u pitanju. Ukoliko se, 
                  uprkos našim nastojanjima da uvek imamo ispravne i ažurirane podatke, ustanovi da su sačuvane informacije 
                  netačne, odmah ćemo ih izmeniti po zahtevu.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Bezbednost Podataka
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Kompanija koristi tehničke i organizacione mere bezbednosti u cilju zaštite svih podataka kojima upravlja 
                  putem sprečavanja nehotične i zlonamerne manipulacije podacima, gubitka i oštećivanja podataka, te pristupa 
                  od strane neovlašćenih lica. Takođe, stalno unapređujemo ove mere bezbednosti u skladu sa tehnološkim razvojem.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Kontakt
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Zahteve za izmenom ili brisanjem Vaših podataka, kao i pitanja i savete u pogledu zaštite podataka, 
                  možete nam poslati putem pisma na našu poštansku adresu ili putem elektronske pošte na natasa@femicco.rs
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}