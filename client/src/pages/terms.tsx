import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Uslovi Korišćenja
            </h1>
            <div className="prose prose-blue max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Internet Prodavnica Perfetto Professional
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Internet prodavnica je informacioni sistem namenjen predstavljanju i prodaji proizvoda potrošačima. 
                  Njime upravlja Femic Co. Korisnik je osoba koja koristi navedeni sistem, odnosno potrošač (kupac) u 
                  Internet prodavnici.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Femic Co omogućava korišćenje usluga i sadržaja svoje stranice za koju su utvrđeni ovi Uslovi korišćenja. 
                  Uslovi korišćenja se primenjuju na sve sadržaje i proizvode stranice www.perfetto-professional.com.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Korišćenjem bilo kojeg dela stranice, smatra se da su korisnici upoznati sa ovim uslovima, kao i da 
                  prihvataju korišćenje sadržaja ove stranice isključivo za ličnu upotrebu i na vlastitu odgovornost.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Femic Co može revidirati ove Uslove bilo kada, ažuriranjem ovog dokumenta. Povremeno posećujte ovu 
                  stranicu da biste pregledali Uslove koji trenutno važe, zato što su oni za Vas obavezujući.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Registracija
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Registracijom na ovom sajtu, automatski prihvatate njegove propozicije. Proces registracije je izuzetno 
                  jednostavan i od Vas zahteva samo osnovne podatke.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Formular koji popunjavate prilikom registracije, potrebno je da popunjavate samo jednom, a svaki naredni 
                  put dovoljno je da se samo ulogujete na Vaš nalog.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Kao registrovani član imate mogućnost da u svako doba tražite da se iščlanite, čime će i Vaši podaci 
                  biti izbrisani iz naše baze podataka.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Proces Poručivanja
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Prilikom pregleda proizvoda primetićete da pored svakog posebno postoji dugme "dodaj u korpu". 
                  Kada kliknete to dugme bićete obavešteni da se proizvod nalazi u Vašoj korpi. Moguće je više puta 
                  dodati isti proizvod u korpu.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  U svakom trenutku omogućen Vam je pregled svih proizvoda koje želite da kupite. Jednostavnim 
                  klikom na ikonicu korpe u gornjem desnom uglu internet prodavnice otvarate stranicu na kojoj su 
                  prikazani svi proizvodi spremni za kupovinu. Veoma lako možete obrisati proizvode iz korpe ili 
                  povećati/smanjiti broj željenih proizvoda.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Kada ste spremni da izvršite kupovinu potrebno je samo da na stranici korpa kliknete dugme 
                  "plaćanje". Nakon toga je neophodno da se registrujete. Proces registracije je veoma jednostavan 
                  i od Vas zahteva samo osnovne lične podatke. Obavezujemo se na privatnost Vaših ličnih podataka 
                  koji će biti korišćeni isključivo u svrhe kupovine na našoj internet prodavnici.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Ukoliko ste se predomislili u vezi kupovine i želite nešto da promenite, jednostavno se možete 
                  vratiti na stranicu korpa. Posle odabira proizvoda i registracije, birate način dostave, plaćanja, 
                  proveravate da li ste ispravno uneli svoje podatke i potvrđujete kupovinu.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Na taj način je Vaša porudžbina kompletirana i možete da očekujete da Vas u roku od 24 sata 
                  kontaktira naš operater zadužen za internet prodaju.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Način Plaćanja
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Troškove isporuke snosi kupac. Potrošač robu može platiti pouzećem. Potrošač prilikom kreiranja 
                  porudžbenice pritiskom na taster POTVRDI preuzima obavezu plaćanja naručene robe.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Opcija plaćanja pouzećem Vam omogućuje da vrednost porudžbine podmirite prilikom same dostave na 
                  navedenu adresu, tek kada robu vidite pred sobom. Plaćanje pouzećem se vrši isključivo u gotovini, 
                  kuriru prilikom same isporuke na navedenu adresu.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Cene u Perfetto Professional Internet Prodavnici
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Sve cene su iskazane u dinarima sa uključenim PDV-om. Prodavac zadržava pravo izmene cena bez 
                  prethodnog obaveštavanja kupaca, ako nije drugačije navedeno (u slučaju akcija i specijalnih popusta). 
                  Cene važe u trenutku kreiranja porudžbine i imaju dejstvo i validnost i za naredni period. Navedene 
                  cene važe samo za kupovinu u Internet prodavnici.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Primedbe i Reklamacije
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Kupac ima pravo na izjavljivanje Reklamacije Prodavcu i to na e-mail adresu: natasa@femicco.rs, 
                  na broj telefona +381 11 31 40 800 u periodu od 07-16h svakog radnog dana ili pisanim putem na 
                  adresu Vojvođanska 388ž, 11271, Surčin Beograd (sa naznakom "Za Perfetto Professional Internet prodavnicu"), 
                  i to u sledećim slučajevima:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground text-lg">
                  <li>isporuka robe koja nije poručena</li>
                  <li>isporuka robe koja nije saobrazna robi koja je poručena</li>
                  <li>isporuka robe koja ima grešku ili oštećenja koja nisu nastala u transportu</li>
                </ul>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Kupac je dužan da odmah po prijemu pregleda isporučenu robu te da o svim eventualnim nedostacima 
                  odmah obavesti dostavljača.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Završne Odredbe
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Isporučilac zadržava pravo da može menjati ove uslove bez prethodnog obaveštavanja svojih potrošača. 
                  Svaki potrošač prilikom naručivanja proizvoda može proveriti trenutno važeće uslove.
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