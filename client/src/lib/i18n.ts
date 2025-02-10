import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Serbian translations (primary)
const sr = {
  hero: {
    title: 'Profesionalna Izvrsnost',
    subtitle: 'u Svakom Detalju',
    description: 'Otkrijte našu premium liniju profesionalnih proizvoda, kojima veruju lideri industrije širom sveta za nenadmašan kvalitet i performanse.',
    viewProducts: 'Pogledajte Proizvode',
    contactSales: 'Kontaktirajte Prodaju',
    stats: {
      companies: 'Više od 1000+ Kompanija',
      distribution: 'Globalna Distribucija',
      support: '24/7 Podrška',
      quality: 'Premium Kvalitet'
    }
  },
  nav: {
    products: 'Proizvodi',
    about: 'O Nama',
    certificates: 'Sertifikati',
    contactUs: 'Kontaktirajte Nas',
    references: 'Reference',
    productCategories: {
      toiletPaper: 'Toalet Papir',
      dispensers: 'Dozatori',
      trashBags: 'Kese za Smeće',
      hygiene: 'Higijenski Proizvodi'
    }
  },
  products: {
    viewCategory: 'Pogledajte više',
    title: 'Naši Proizvodi',
    categories: {
      toiletPaper: {
        title: 'Premium Jumbo Toalet Papir',
        description: 'Profesionalni dvoslojni toalet papir dizajniran za kupatila sa velikim prometom. Superiorna mekoća u kombinaciji sa izuzetnom izdržljivošću.',
        mainFeatures: ['Dvoslojna konstrukcija', 'Veliki kapacitet', 'Brzo rastvaranje', 'Održivi materijali'],
        specifications: ['Dužina rolne: 380m', 'Dimenzije lista: 9.5 x 11cm', 'Pakovanje od 6 rolni'],
        applications: ['Hoteli', 'Kancelarije', 'Tržni centri', 'Restorani'],
        pageTitle: 'Profesionalna Papirna & Higijenska Rešenja',
        pageDescription: 'U današnjem svetu gde je higijena prioritet, posedovanje pouzdanih i kvalitetnih papirnih proizvoda je neophodno za profesionalna i stambena okruženja. Naš sveobuhvatni asortiman toalet papira, salveta i papirnih ubrusa kombinuje vrhunsku mekoća sa izuzetnom izdržljivošću kako bi zadovoljio zahtevne potrebe objekata sa velikim prometom.',
        productFeatures: {
          quality: {
            title: 'Premium Kvalitet',
            description: 'Superiorna mekoća i čvrstoća za vrhunsku udobnost i pouzdanost'
          },
          cost: {
            title: 'Ekonomično',
            description: 'Rolne velikog kapaciteta i efikasno doziranje smanjuju otpad i održavanje'
          },
          eco: {
            title: 'Održivi Izbor',
            description: 'Ekološki prihvatljivi materijali i odgovorni proizvodni procesi'
          }
        }
      },
      dispensers: {
        title: 'Beskontaktni Dozator Papirnih Ubrusa',
        description: 'Moderan, beskontaktni dozator sa infracrvenom senzorskom tehnologijom za optimalnu higijenu i smanjeno rasipanje.',
        productFeatures: ['Beskontaktno korišćenje', 'Baterijsko napajanje', 'Indikator niskog nivoa papira', 'Podesiva dužina lista'],
        specifications: ['Dimenzije: 30 x 20 x 40cm', 'Trajanje baterije: 1 godina', 'Kapacitet: 800 listova'],
        applications: ['Zdravstvene ustanove', 'Poslovne zgrade', 'Obrazovne ustanove'],
        pageTitle: 'Profesionalni Dozatori',
        pageDescription: 'U modernim objektima, beskontaktna rešenja za doziranje su neophodna za održavanje optimalnih higijenskih standarda. Naš asortiman naprednih dozatora kombinuje inovativnu tehnologiju sa praktičnim dizajnom za sigurna, efikasna i rešenja koja smanjuju otpad za sva profesionalna okruženja.',
        productFeatures: {
          touchFree: {
            title: 'Beskontaktna Tehnologija',
            description: 'Sistemi sa senzorima minimiziraju kontakt i poboljšavaju higijenu'
          },
          smart: {
            title: 'Pametno Doziranje',
            description: 'Kontrolisane porcije smanjuju otpad i optimizuju potrošnju'
          },
          universal: {
            title: 'Univerzalna Kompatibilnost',
            description: 'Radi besprekorno sa različitim papirnim i tečnim punjenjima'
          }
        }
      },
      trashBags: {
        title: 'Industrijske Kese za Smeće',
        description: 'Ekstra jake kese za otpad dizajnirane za zahtevna komercijalna i industrijska okruženja.',
        productFeatures: ['Otporne na cepanje', 'Nepropusne', 'Lake za vezivanje', 'Materijal koji se može reciklirati'],
        specifications: ['Kapacitet: 120L', 'Debljina: 40 mikrona', 'Kutija od 200 kesa'],
        applications: ['Industrijski objekti', 'Gradilišta', 'Veliki prostori'],
        pageTitle: 'Profesionalne Kese za Smeće',
        pageDescription: 'Održavanje čistog i organizovanog radnog prostora zahteva pouzdana rešenja za upravljanje otpadom. Naše profesionalne kese za smeće su dizajnirane za maksimalnu izdržljivost i praktičnost u svim komercijalnim i industrijskim primenama.',
        productFeatures: {
          strength: {
            title: 'Izuzetna Čvrstoća',
            description: 'Ojačani materijal otporan na kidanje i curenje'
          },
          capacity: {
            title: 'Veliki Kapacitet',
            description: 'Optimizovane veličine za različite potrebe odlaganja'
          },
          eco: {
            title: 'Ekološka Svest',
            description: 'Proizvedeno od recikliranih materijala kad god je moguće'
          }
        }
      },
      hygiene: {
        title: 'Profesionalno Sredstvo za Čišćenje',
        description: 'Moćno, ekološko sredstvo za čišćenje efikasno protiv prljavštine, masnoće i bakterija.',
        productFeatures: ['Biorazgradivo', 'Bolnički nivo dezinfekcije', 'Prijatan miris', 'Koncentrovana formula'],
        specifications: ['Veličina: 5L', 'Odnos razblaženja: 1:30', 'Balansiran pH'],
        applications: ['Zdravstvo', 'Ugostiteljstvo', 'Obrazovne ustanove', 'Poslovne zgrade'],
        pageTitle: 'Profesionalna Higijenska & Sredstva za Čišćenje',
        pageDescription: 'Održavanje čistog i higijenskog okruženja je ključno za uspeh i sigurnost svakog objekta. Naš sveobuhvatni asortiman profesionalnih sredstava za čišćenje i dezinfekciju je dizajniran da efikasno uklanja prljavštinu, bakterije i mikrobe, osiguravajući zdravlje i bezbednost korisnika.',
        productFeatures: {
          professional: {
            title: 'Profesionalni Kvalitet',
            description: 'Dezinficijensi bolničkog nivoa i industrijski snažna sredstva za čišćenje'
          },
          eco: {
            title: 'Ekološki Prihvatljivo',
            description: 'Biorazgradive formule koje su bezbedne za životnu sredinu'
          },
          versatile: {
            title: 'Široka Primena',
            description: 'Pogodno za zdravstvo, ugostiteljstvo i komercijalne prostore'
          }
        }
      }
    }
  },
  about: {
    hero: {
      title: 'Profesionalna Izvrsnost',
      subtitle: 'u Svakom Detalju',
      description: 'Već više od 25 godina, Perfetto Professional je na čelu profesionalnih higijenskih i rešenja za čišćenje. Kombinujemo inovacije sa pouzdanošću kako bismo isporučili proizvode koji postavljaju industrijske standarde za kvalitet i performanse.',
      trust: 'Kompanije širom Evrope nam veruju za superiorna rešenja za čišćenje i higijenu'
    },
    values: {
      title: 'Naše Osnovne Vrednosti',
      description: 'Naše vrednosti vode svaku odluku koju donosimo i svaki proizvod koji razvijamo, osiguravajući da isporučimo izvrsnost našim klijentima.',
      items: {
        quality: {
          title: 'Beskompromisan Kvalitet',
          description: 'Održavamo najviše standarde u svakom proizvodu koji isporučujemo, osiguravajući trajne performanse i pouzdanost.'
        },
        innovation: {
          title: 'Kontinuirana Inovacija',
          description: 'Konstantno razvijamo naše proizvode i procese kako bismo bili ispred industrijskih trendova i premašili očekivanja kupaca.'
        },
        sustainability: {
          title: 'Posvećenost Životnoj Sredini',
          description: 'Naše održive prakse i ekološki proizvodi odražavaju našu posvećenost odgovornost prema životnoj sredini.'
        },
        partnership: {
          title: 'Snažna Partnerstva',
          description: 'Gradimo trajne odnose sa našim klijentima, dobavljačima i zajednicama kroz poverenje i uzajamni rast.'
        }
      }
    },
    mission: {
      title: 'Naša Misija',
      description: 'Posvećeni smo revolucionisanju profesionalnih higijenskih standarda kroz inovativna rešenja koja promovišu čistoću, održivost i efikasnost. Naša posvećenost izvrsnosti nas pokreće da razvijamo proizvode koji ne samo da ispunjavaju već i premašuju evolucijske potrebe naših klijenata.',
      vision: {
        title: 'Vizija za Budućnost',
        description: 'Zamišljamo budućnost gde su održiva higijenska rešenja dostupna preduzećima svih veličina, doprinoseći čistijem, zdravijem svetu uz minimalan uticaj na životnu sredinu. Kroz kontinuiranu inovaciju i posvećenost kvalitetu, težimo da budemo vodeća sila u profesionalnim rešenjima za čišćenje.'
      },
      stats: {
        experience: {
          value: '25+',
          label: 'Godina Izvrsnosti'
        },
        clients: {
          value: '1000+',
          label: 'Zadovoljnih Klijenata'
        },
        products: {
          value: '50+',
          label: 'Proizvodnih Linija'
        },
        presence: {
          value: '30+',
          label: 'Zemalja Opsluživanja'
        }
      }
    },
    expertise: {
      title: 'Naša Ekspertiza',
      description: 'Sa decenijama iskustva i posvećenošću izvrsnosti, naša ekspertiza se proteže kroz više oblasti profesionalnog čišćenja i higijenskih rešenja.',
      areas: {
        manufacturing: {
          title: 'Najsavremenija Proizvodnja',
          description: 'Naši napredni objekti osiguravaju preciznost i kvalitet u svakom proizvodu'
        },
        development: {
          title: 'Razvoj Proizvoda',
          description: 'Kontinuirana inovacija pokreće našu izvrsnost proizvoda'
        },
        quality: {
          title: 'Osiguranje Kvaliteta',
          description: 'Rigorozno testiranje osigurava premium standarde proizvoda'
        }
      }
    }
  },
  certificates: {
    title: 'Naši Sertifikati',
    items: {
      iso14001: {
        title: 'ISO 14001:2015',
        description: 'Sertifikat sistema menadžmenta životnom sredinom. Proizvodnja toalet papira, salveta, ubrusa, kućne hemije i ambalaže od plastike za domaćinstvo.'
      },
      iso22000_en: {
        title: 'ISO 22000:2005',
        description: 'Food Safety Management System Certificate. Production of paper napkins, kitchen towels and plastic packaging for household.'
      },
      iso22000_sr: {
        title: 'ISO 22000:2005',
        description: 'Sertifikat sistema upravljanja bezbednošću hrane. Proizvodnja papirnih salveta, kuhinjskih ubrusa i plastične ambalaže za domaćinstvo.'
      },
      iso9001_sr: {
        title: 'ISO 9001:2015',
        description: 'Sertifikat sistema menadžmenta kvalitetom za proizvodnju papirne galanterije i ambalaže.'
      },
      haccp: {
        title: 'HACCP',
        description: 'Sertifikat za sistem bezbednosti hrane u proizvodnji papirnih proizvoda i ambalaže.'
      },
      iso9001_sr_2: {
        title: 'ISO 9001:2015',
        description: 'Dodatni sertifikat sistema kvaliteta za proizvodne procese.'
      },
      registration: {
        title: 'Registracija Preduzeća',
        description: 'Zvanični dokument o registraciji kompanije FEMIC CO DOO u Agenciji za privredne registre.'
      },
      iso9001_en: {
        title: 'ISO 9001:2015',
        description: 'Quality Management System Certificate for paper products and packaging manufacturing.'
      }
    },
    introText: 'Naša posvećenost izvrsnosti je podržana međunarodnim sertifikatima koji osiguravaju kvalitet, bezbednost i odgovornost prema životnoj sredini u svemu što radimo.'
  },
  partners: {
    title: 'Partneri od Poverenja'
  },
  contact: {
    title: 'Kontaktirajte Nas',
    phone: {
      office: 'Telefon: +381 11 123 4567',
      mobile1: 'Mobilni: +381 60 305 8595',
      mobile2: 'Mobilni: +381 60 333 8888'
    },
    form: {
      name: 'Ime',
      namePlaceholder: 'Vaše ime',
      company: 'Kompanija',
      companyPlaceholder: 'Vaša kompanija',
      email: 'Email',
      emailPlaceholder: 'vas@email.com',
      message: 'Poruka',
      messagePlaceholder: 'Vaša poruka',
      send: 'Pošaljite Poruku',
      sending: 'Slanje...'
    },
    success: 'Poruka poslata',
    successMessage: 'Uskoro ćemo vam se javiti!',
    error: 'Greška',
    errorMessage: 'Neuspešno slanje poruke. Pokušajte ponovo.'
  },
  footer: {
    companyName: 'Perfetto Professional',
    address: 'Vojvođanska 388ž, Surčin, Beograd',
    quickLinks: 'Brzi Linkovi',
    legal: 'Pravno',
    privacy: 'Politika Privatnosti',
    terms: 'Uslovi Korišćenja',
    copyright: 'Sva prava zadržana.',
    contact: {
      office: 'Telefon: +381 11 123 4567',
      mobile1: 'Mobilni: +381 60 305 8595',
      mobile2: 'Mobilni: +381 60 333 8888'
    }
  },
  legal: {
    terms: {
      title: 'Uslovi Korišćenja',
      introduction: {
        title: 'INTERNET PRODAVNICA PERFETTO PROFESSIONAL',
        description: 'Internet prodavnica je informacioni sistem namenjen predstavljanju i prodaji proizvoda potrošačima.',
        company_info: 'Njime upravlja Femić Co. Korisnik je osoba koja koristi navedeni sistem, odnosno potrošač (kupac) u Internet prodavnici.',
        usage_terms: 'Femić Co omogućava korišćenje usluga i sadržaja svoje stranice za koju su utvrđeni ovi Uslovi korišćenja. Uslovi korišćenja se primenjuju na sve sadržaje i proizvode stranice www.perfetto-professional.com.',
        acceptance: 'Korišćenjem bilo kojeg dela stranice, smatra se da su korisnici upoznati sa ovim uslovima, kao i da prihvataju korišćenje sadržaja ove stranice isključivo za ličnu upotrebu i na vlastitu odgovornost.',
        updates: 'Femić Co može revidirati ove Uslove bilo kada, ažuriranjem ovog dokumenta. Povremeno posećujte ovu stranicu da biste pregledali Uslove koji trenutno važe, zato što su oni za Vas obvezujući.'
      }
    },
    privacy: {
      title: 'Politika Privatnosti',
      sections: {
        dataCollection: {
          title: 'Prikupljanje i Obrada Podataka',
          content: 'Prikupljamo, analiziramo i obrađujemo podatke o proizvodima koje naši posetioci traže i za koje se odlučuju, kao i o stranicama koje posećuju. Te podatke koristimo da bismo poboljšali ponudu i izgled naših stranica, i omogućili jednostavnije korišćenje, sigurniju i lakšu pretragu.'
        },
        dataUsage: {
          title: 'Korišćenje Podataka',
          content: 'Vaši podaci su nam potrebni kako bismo Vas redovno obaveštavali ili Vam eventualno poslali upitnik o našim uslugama. Podrazumeva se da učestvovanje u ovakvim aktivnostima nije obavezno.'
        },
        dataAccess: {
          title: 'PRAVO PRISTUPA LIČNIM PODACIMA',
          content: 'Na vaš zahtev, naša kompanija će Vas bez odlaganja obavestiti pisanim putem, a u skladu sa važećim zakonom, da li u svom posedu ima vaše lične podatke i ako je to slučaj, koji su tačno podaci u pitanju.'
        },
        security: {
          title: 'BEZBEDNOST PODATAKA',
          content: 'Kompanija koristi tehničke i organizacione mere bezbednosti u cilju zaštite svih podataka kojima upravlja putem sprečavanja nehotične i zlonamerne manipulacije podacima.'
        },
        contact: {
          title: 'KONTAKT',
          content: 'Zahteve za izmenom ili brisanjem Vaših podataka možete poslati na našu adresu.'
        }
      }
    }
  },
  references: {
    title: 'Naše Reference',
    pageTitle: 'NAŠE REFERENCE',
    subtitle: 'Poverenje vodećih preduzeća i institucija iz različitih sektora',
    additionalPartnersTitle: 'OSTALI PARTNERI',
    items: {
      hotel: {
        company: 'Grand Hotel Beograd',
        description: 'Kompletna renovacija hotelskih sadržaja i higijenskih rešenja'
      },
      hospital: {
        company: 'Gradski Bolnički Centar',
        description: 'Sistemi za čišćenje i dezinfekciju medicinskih ustanova'
      },
      business: {
        company: 'Poslovni Centar',
        description: 'Rešenja za održavanje poslovnih zgrada'
      },
      school: {
        company: 'Međunarodni Školski Kompleks',
        description: 'Upravljanje higijenom obrazovnih ustanova'
      },
      restaurant: {
        company: 'Lanac Restorana',
        description: 'Sistemi za sanitaciju restorana i kuhinja'
      },
      mall: {
        company: 'Tržni Centar',
        description: 'Rešenja za čišćenje velikih maloprodajnih objekata'
      }
    }
  }
};

// English translations
const en = {
  hero: {
    title: 'Professional Excellence',
    subtitle: 'in Every Detail',
    description: 'Discover our premium range of professional products, trusted by industry leaders worldwide for unmatched quality and performance.',
    viewProducts: 'View Products',
    contactSales: 'Contact Sales',
    stats: {
      companies: 'Trusted by 1000+ Companies',
      distribution: 'Global Distribution',
      support: '24/7 Support',
      quality: 'Premium Quality'
    }
  },
  nav: {
    products: 'Products',
    about: 'About',
    certificates: 'Certificates',
    contactUs: 'Contact Us',
    references: 'References',
    productCategories: {
      toiletPaper: 'Toilet Paper',
      dispensers: 'Dispensers',
      trashBags: 'Trash Bags',
      hygiene: 'Hygiene Products'
    }
  },
  products: {
    viewCategory: 'See more',
    title: 'Our Products',
    categories: {
      toiletPaper: {
        title: 'Premium Jumbo Roll Toilet Paper',
        description: 'Professional-grade, 2-ply toilet paper designed for high-traffic washrooms. Superior softness meets exceptional durability.',
        mainFeatures: ['2-ply construction', 'High capacity', 'Quick dissolving', 'Sustainable materials'],
        specifications: ['Roll length: 380m', 'Sheet size: 9.5 x 11cm', 'Cases of 6 rolls'],
        applications: ['Hotels', 'Offices', 'Shopping centers', 'Restaurants'],
        pageTitle: 'Professional Paper & Hygiene Solutions',
        pageDescription: "In today's hygiene-conscious world, having reliable and high-quality paper products is essential for both professional and residential environments. Our comprehensive range of toilet paper, napkins, and paper towels combines superior softness with exceptional durability to meet the demanding needs of high-traffic facilities.",
        productFeatures: {
          quality: {
            title: 'Premium Quality',
            description: 'Superior softness and strength for ultimate comfort and reliability'
          },
          cost: {
            title: 'Cost-Effective',
            description: 'High-capacity rolls and efficient dispensing reduce waste and maintenance'
          },
          eco: {
            title: 'Sustainable Choice',
            description: 'Eco-friendly materials and responsible manufacturing processes'
          }
        }
      },
      dispensers: {
        title: 'Touchless Paper Towel Dispenser',
        description: 'Modern, touch-free dispenser with infrared sensor technology for optimal hygiene and reduced waste.',
        productFeatures: ['Touch-free operation', 'Battery-powered', 'Low-paper indicator', 'Adjustable sheet length'],
        specifications: ['Dimensions: 30 x 20 x 40cm', 'Battery life: 1 year', 'Capacity: 800 sheets'],
        applications: ['Healthcare facilities', 'Corporate buildings', 'Educational institutions'],
        pageTitle: 'Professional Dispensers & Dosers',
        pageDescription: 'In modern facilities, touch-free dispensing solutions are essential for maintaining optimal hygiene standards. Our range of advanced dispensers combines innovative technology with practical design to provide safe, efficient, and waste-reducing solutions for all professional environments.',
        productFeatures: {
          touchFree: {
            title: 'Touch-Free Technology',
            description: 'Sensor-operated systems minimize contact and enhance hygiene'
          },
          smart: {
            title: 'Smart Dispensing',
            description: 'Controlled portions reduce waste and optimize usage'
          },
          universal: {
            title: 'Universal Compatibility',
            description: 'Works seamlessly with various paper and liquid refill products'
          }
        }
      },
      trashBags: {
        title: 'Heavy-Duty Industrial Trash Bags',
        description: 'Extra-strong waste bags designed for demanding commercial and industrial environments.',
        productFeatures: ['Tear-resistant', 'Leak-proof', 'Easy-tie handles', 'Recyclable material'],
        specifications: ['Capacity: 120L', 'Thickness: 40 microns', 'Box of 200 bags'],
        applications: ['Industrial facilities', 'Construction sites', 'Large venues'],
        pageTitle: 'Professional Waste Management Solutions',
        pageDescription: 'Maintaining a clean and organized workspace requires reliable waste management solutions. Our professional trash bags are engineered for maximum durability and convenience across all commercial and industrial applications.',
        productFeatures: {
          strength: {
            title: 'Superior Strength',
            description: 'Reinforced material resistant to tears and leaks'
          },
          capacity: {
            title: 'High Capacity',
            description: 'Optimized sizes for various disposal needs'
          },
          eco: {
            title: 'Environmental Consciousness',
            description: 'Manufactured from recycled materials whenever possible'
          }
        }
      },
      hygiene: {
        title: 'Professional All-Purpose Cleaner',
        description: 'Powerful, eco-friendly cleaning solution effective against dirt, grease, and bacteria.',
        productFeatures: ['Biodegradable', 'Hospital-grade disinfectant', 'Pleasant scent', 'Concentrated formula'],
        specifications: ['Size: 5L', 'Dilution ratio: 1:30', 'pH balanced'],
        applications: ['Healthcare', 'Food service', 'Educational facilities', 'Office buildings'],
        pageTitle: 'Professional Hygiene & Cleaning Solutions',
        pageDescription: 'Maintaining a clean and hygienic environment is crucial for any facility\'s success and safety. Our comprehensive range of professional cleaning agents and sanitizing solutions is designed to effectively remove dirt, bacteria, and germs while ensuring the health and safety of occupants.',
        productFeatures: {
          professional: {
            title: 'Professional Grade',
            description: 'Hospital-grade disinfectants and industrial-strength cleaners'
          },
          eco: {
            title: 'Eco-Friendly',
            description: 'Biodegradable formulas that are safe for the environment'
          },
          versatile: {
            title: 'Versatile Application',
            description: 'Suitable for healthcare, hospitality, and commercial spaces'
          }
        }
      }
    }
  },
  about: {
    hero: {
      title: 'Professional Excellence',
      subtitle: 'in Every Detail',
      description: 'For over 25 years, Perfetto Professional has been at the forefront of professional hygiene and cleaning solutions. We combine innovation with reliability to deliver products that set industry standards for quality and performance.',
      trust: 'Trusted by businesses across Europe for superior cleaning and hygiene solutions'
    },
    values: {
      title: 'Our Core Values',
      description: 'Our values guide every decision we make and every product we develop, ensuring we deliver excellence to our customers.',
      items: {
        quality: {
          title: 'Uncompromising Quality',
          description: 'We maintain the highest standards in every product we deliver, ensuring lasting performance and reliability.'
        },
        innovation: {
          title: 'Continuous Innovation',
          description: 'We constantly evolve our products and processes to stay ahead of industry trends and exceed customer expectations.'
        },
        sustainability: {
          title: 'Environmental Commitment',
          description: 'Our sustainable practices and eco-friendly products reflect our dedication to environmental responsibility.'
        },
        partnership: {
          title: 'Strong Partnerships',
          description: 'We build lasting relationships with our clients, suppliers, and communities through trust and mutual growth.'
        }
      }
    },
    mission: {
      title: 'Our Mission',
      description: 'We are dedicated to revolutionizing professional hygiene standards through innovative solutions that promote cleanliness, sustainability, and efficiency. Our commitment to excellence drives us to develop products that not only meet but exceed the evolving needs of our clients.',
      vision: {
        title: 'Vision for the Future',
        description: 'We envision a future where sustainable hygiene solutions are accessible to businesses of all sizes, contributing to a cleaner, healthier world while minimizing environmental impact. Through continuous innovation and dedication to quality, we strive to be the leading force in professional cleaning solutions.'
      },
      stats: {
        experience: {
          value: '25+',
          label: 'Years of Excellence'
        },
        clients: {
          value: '1000+',
          label: 'Satisfied Clients'
        },
        products: {
          value: '50+',
          label: 'Product Lines'
        },
        presence: {
          value: '30+',
          label: 'Countries Served'
        }
      }
    },
    expertise: {
      title: 'Our Expertise',
      description: 'With decades of experience and a commitment to excellence, our expertise spans across multiple areas of professional cleaning and hygiene solutions.',
      areas: {
        manufacturing: {
          title: 'State-of-the-Art Manufacturing',
          description: 'Our advanced facilities ensure precision and quality in every product'
        },
        development: {
          title: 'Product Development',
          description: 'Continuous innovation drives our product excellence'
        },
        quality: {
          title: 'Quality Assurance',
          description: 'Rigorous testing ensures premium product standards'
        }
      }
    }
  },
  certificates: {
    title: 'Our Certifications',
    items: {
      iso14001: {
        title: 'ISO 14001:2015',
        description: 'Environmental Management System Certificate for the production of toilet paper, napkins, towels, household chemicals, and plastic packaging.'
      },
      iso22000_en: {
        title: 'ISO 22000:2005',
        description: 'Food Safety Management System Certificate for the production of paper napkins, kitchen towels and plastic packaging for household.'
      },
      iso22000_sr: {
        title: 'ISO 22000:2005',
        description: 'Food Safety Management System Certificate (Serbian version) for paper products and packaging.'
      },
      iso9001_sr: {
        title: 'ISO 9001:2015',
        description: 'Quality Management System Certificate for paper products and packaging manufacturing (Serbian version).'
      },
      haccp: {
        title: 'HACCP',
        description: 'Food Safety System Certificate for paper products and packaging manufacturing.'
      },
      iso9001_sr_2: {
        title: 'ISO 9001:2015',
        description: 'Additional Quality System Certificate for manufacturing processes.'
      },
      registration: {
        title: 'Company Registration',
        description: 'Official registration document of FEMIC CO DOO with the Business Registers Agency.'
      },
      iso9001_en: {
        title: 'ISO 9001:2015',
        description: 'Quality Management System Certificate for paper products and packaging manufacturing (English version).'
      }
    },
    introText: 'Our commitment to excellence is backed by international certifications that ensure quality, safety, and environmental responsibility in everything we do.'
  },
  partners: {
    title: 'Trusted By Industry Leaders'
  },
  contact: {
    title: 'Contact Us',
    form: {name: 'Name',
      namePlaceholder: 'Your name',
      company: 'Company',
      companyPlaceholder: 'Your company',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Your message',
      send: 'Send Message',
      sending: 'Sending...'
    },
    success: 'Message sent',
    successMessage: "We'll get back to you soon!",
    error: 'Error',
    errorMessage: 'Failed to send message. Please try again.'
  },
  footer: {
    companyName: 'Perfetto Professional',
    address: 'Mihajla Pupina Blvd 10, Belgrade',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: 'All rights reserved.'
  },
  legal: {
    terms: {
      title: 'Terms of Use',
      introduction: {
        title: 'PERFETTO PROFESSIONAL ONLINE STORE',
        description: 'The online store is an informationsystem designed for presenting and selling products to consumers.',
        company_info: 'It is managed by Femić Co. A user is a person who uses this system, i.e. a consumer (buyer) in the online store.',
        usage_terms: 'Femić Co provides the use of services and content of itswebsite for whichthese Terms of Use are established. The Terms of Use apply to all content and products of the website www.perfetto-professional.com.',
        acceptance: 'By using any part of the website, users are considered to be familiar with these terms and accept the use of this website\'s content exclusively for personal use and at their own risk.',
        updates: 'Femić Co may revise these Terms at any time by updating this document. Please visit this page periodically to review the currently applicable Terms, as they are binding for you.'
      }
    },
    privacy: {
      title: 'Privacy Policy',
      sections: {
        dataCollection: {
          title: 'Data Collection and Processing',
          content: 'We collect, analyze and process dataabout the products our visitors search for and choose, as well as the pages they visit. We use this data to improve our offerings and website layout.'
        },
        dataUsage: {
          title: 'Data Usage',
          content: 'We need your data to keep you regularly informed or possibly send you a questionnaire about our services. It is understood that participation in such activities is not mandatory.'
        },
        dataAccess: {
          title: 'RIGHT TO ACCESS PERSONAL DATA',
          content: 'Upon your request, our company will promptly inform you in writing, in accordance with applicable law, whether we have your personal data and if so, exactly what data is in question.'
        },
        security: {
          title: 'DATA SECURITY',
          content: 'The company uses technical and organizational security measures to protect all data it manages by preventing unintentional and malicious data manipulation.'
        },
        contact: {
          title: 'CONTACT',
          content: 'Requests for modification or deletion of your data can be sent to our address.'
        }
      }
    }
  },
  references: {
    title: 'Our References',
    pageTitle: 'OUR REFERENCES',
    subtitle: 'Trusted by leading businesses and institutions across various sectors',
    additionalPartnersTitle: 'OTHER PARTNERS',
    items: {
      hotel: {
        company: 'Grand Hotel Belgrade',
        description: 'Complete renovation of hotel amenities and hygiene solutions'
      },
      hospital: {
        company: 'City Hospital Center',
        description: 'Medical facility cleaning and sanitation systems'
      },
      business: {
        company: 'Business Center Tower',
        description: 'Office building maintenance solutions'
      },
      school: {
        company: 'International School Complex',
        description: 'Educational facility hygiene management'
      },
      restaurant: {
        company: 'Restaurant Chain Solutions',
        description: 'Restaurant and kitchen sanitation systems'
      },
      mall: {
        company: 'Shopping Mall Complex',
        description: 'Large-scale retail cleaning solutions'
      }
    }
  }
};

// German translations
const de = {
  hero: {
    title: 'Professionelle Exzellenz',
    subtitle: 'in jedem Detail',
    description: 'Entdecken Sie unsere Premium-Reihe professioneller Produkte, denen Branchenführer weltweit für unübertroffene Qualität und Leistung vertrauen.',
    viewProducts: 'Produkte Ansehen',
    contactSales: 'Vertrieb Kontaktieren',
    stats: {
      companies: 'Vertraut von 1000+ Unternehmen',
      distribution: 'Globale Distribution',
      support: '24/7 Support',
      quality: 'Premium Qualität'
    }
  },
  nav: {
    products: 'Produkte',
    about: 'Über Uns',
    certificates: 'Zertifikate',
    contactUs: 'Kontakt',
    references: 'Referenzen',
    productCategories: {
      toiletPaper: 'Toilettenpapier',
      dispensers: 'Spender',
      trashBags: 'Müllbeutel',
      hygiene: 'Hygieneprodukte'
    }
  },
  products: {
    viewCategory: 'Mehr sehen',
    title: 'Unsere Produkte',
    categories: {
      toiletPaper: {
        title: 'Premium Jumbo-Toilettenpapier',
        description: 'Professionelles, zweilagiges Toilettenpapier für stark frequentierte Waschräume. Überlegene Weichheit trifft auf außergewöhnliche Haltbarkeit.',
        mainFeatures: ['Zweilagige Konstruktion', 'Hohe Kapazität', 'Schnell auflösend', 'Nachhaltige Materialien'],
        specifications: ['Rollenlänge: 380m', 'Blattgröße: 9,5 x 11cm', 'Packungen zu 6 Rollen'],
        applications: ['Hotels', 'Büros', 'Einkaufszentren', 'Restaurants'],
        pageTitle: 'Professionelle Papier- & Hygienelösungen',
        pageDescription: 'In der heutigen hygienebewussten Welt sind zuverlässige und hochwertige Papierprodukte sowohl für professionelle als auch für private Umgebungen unerlässlich. Unser umfassendes Sortiment an Toilettenpapier, Servietten und Papierhandtüchern verbindet überlegene Weichheit mit außergewöhnlicher Haltbarkeit.',
        productFeatures: {
          quality: {
            title: 'Premium-Qualität',
            description: 'Überlegene Weichheit und Stärke für ultimativen Komfort und Zuverlässigkeit'
          },
          cost: {
            title: 'Kostengünstig',
            description: 'Hochkapazitätsrollen und effiziente Ausgabe reduzieren Abfall und Wartung'
          },
          eco: {
            title: 'Nachhaltige Wahl',
            description: 'Umweltfreundliche Materialien und verantwortungsvolle Herstellungsprozesse'
          }
        }
      },
      dispensers: {
        title: 'Berührungsloser Papierhandtuchspender',
        description: 'Moderner, berührungsloser Spender mit Infrarot-Sensortechnologie für optimale Hygiene und reduzierten Verbrauch.',
        productFeatures: ['Berührungsloser Betrieb', 'Batteriebetrieben', 'Papierstandsanzeige', 'Einstellbare Blattlänge'],
        specifications: ['Abmessungen: 30 x 20 x 40cm', 'Batterielaufzeit: 1 Jahr', 'Kapazität: 800 Blatt'],
        applications: ['Gesundheitseinrichtungen', 'Firmengebäude', 'Bildungseinrichtungen'],
        pageTitle: 'Professionelle Spender & Dosierer',
        pageDescription: 'In modernen Einrichtungen sind berührungslose Dosierlösungen für die Aufrechterhaltung optimaler Hygienestandards unerlässlich. Unser Sortiment an fortschrittlichen Spendern kombiniert innovative Technologie mit praktischem Design.',
        productFeatures: {
          touchFree: {
            title: 'Berührungslose Technologie',
            description: 'Sensorgesteuerte Systeme minimieren Kontakt und verbessern die Hygiene'
          },
          smart: {
            title: 'Intelligente Dosierung',
            description: 'Kontrollierte Portionen reduzieren Abfall und optimieren die Nutzung'
          },
          universal: {
            title: 'Universelle Kompatibilität',
            description: 'Funktioniert nahtlos mit verschiedenen Papier- und Flüssignachfüllprodukten'
          }
        }
      },
      trashBags: {
        title: 'Hochbelastbare Industriemüllsäcke',
        description: 'Extra starke Abfallsäcke für anspruchsvolle gewerbliche und industrielle Umgebungen.',
        productFeatures: ['Reißfest', 'Auslaufsicher', 'Einfach zu verschließen', 'Recycelbares Material'],
        specifications: ['Kapazität: 120L', 'Stärke: 40 Mikron', 'Karton mit 200 Säcken'],
        applications: ['Industrieanlagen', 'Baustellen', 'Große Veranstaltungsorte'],
        pageTitle: 'Professionelle Abfallmanagementlösungen',
        pageDescription: 'Die Aufrechterhaltung eines sauberen und organisierten Arbeitsbereichs erfordert zuverlässige Abfallmanagementlösungen. Unsere professionellen Müllbeutel sind für maximale Haltbarkeit und Komfort in allen kommerziellen und industriellen Anwendungen entwickelt.',
        productFeatures: {
          strength: {
            title: 'Überlegene Stärke',
            description: 'Verstärktes Material, reiß- und auslaufsicher'
          },
          capacity: {
            title: 'Hohe Kapazität',
            description: 'Optimierte Größen für verschiedene Entsorgungsbedürfnisse'
          },
          eco: {
            title: 'Umweltbewusstsein',
            description: 'Hergestellt aus recycelten Materialien, wann immer möglich'
          }
        }
      },
      hygiene: {
        title: 'Professioneller Allzweckreiniger',
        description: 'Leistungsstarke, umweltfreundliche Reinigungslösung gegen Schmutz, Fett und Bakterien.',
        productFeatures: ['Biologisch abbaubar', 'Krankenhaus-Desinfektionsmittel', 'Angenehmer Duft', 'Konzentrierte Formel'],
        specifications: ['Größe: 5L', 'Verdünnungsverhältnis: 1:30', 'pH-ausgewogen'],
        applications: ['Gesundheitswesen', 'Gastronomie', 'Bildungseinrichtungen', 'Bürogebäude'],
        pageTitle: 'Professionelle Hygiene- & Reinigungslösungen',
        pageDescription: 'Die Aufrechterhaltung einer sauberen und hygienischen Umgebung ist entscheidend für den Erfolg und die Sicherheit jeder Einrichtung. Unser umfassendes Sortiment an professionellen Reinigungsmitteln und Desinfektionslösungen wurde entwickelt, um Schmutz, Bakterien und Keime effektiv zu entfernen und dabei die Gesundheit und Sicherheit der Nutzer zu gewährleisten.',
        productFeatures: {
          professional: {
            title: 'Professionelle Qualität',
            description: 'Desinfektionsmittel in Krankenhausqualität und industriestarke Reiniger'
          },
          eco: {
            title: 'Umweltfreundlich',
            description: 'Biologisch abbaubare Formeln, die sicher für die Umwelt sind'
          },
          versatile: {
            title: 'Vielseitige Anwendung',
            description: 'Geeignet für Gesundheitswesen, Gastgewerbe und gewerbliche Räume'
          }
        }
      }
    }
  },
  about: {
    hero: {
      title: 'Professionelle Exzellenz',
      subtitle: 'in jedem Detail',
      description: 'Seit über 25 Jahren ist Perfetto Professional führend im Bereich professioneller Hygiene- und Reinigungslösungen. Wir verbinden Innovation mit Zuverlässigkeit, um Produkte zu liefern, die Industriestandards für Qualität und Leistung setzen.',
      trust: 'Vertrauenswürdiger Partner für Unternehmen in ganz Europa für überlegene Reinigungs- und Hygienelösungen'
    },
    values: {
      title: 'Unsere Kernwerte',
      description: 'Unsere Werte leiten jede Entscheidung, die wir treffen, und jedes Produkt, das wir entwickeln, um sicherzustellen, dass wir unseren Kunden Exzellenz liefern.',
      items: {
        quality: {
          title: 'Kompromisslose Qualität',
          description: 'Wir halten die höchsten Standards bei jedem Produkt ein, das wir liefern, und gewährleisten dauerhafte Leistung und Zuverlässigkeit.'
        },
        innovation: {
          title: 'Kontinuierliche Innovation',
          description: 'Wir entwickeln unsere Produkte und Prozesse ständig weiter, um Branchentrends voraus zu sein und Kundenerwartungen zu übertreffen.'
        },
        sustainability: {
          title: 'Umweltengagement',
          description: 'Unsere nachhaltigen Praktiken und umweltfreundlichen Produkte spiegeln unser Engagement für Umweltverantwortung wider.'
        },
        partnership: {
          title: 'Starke Partnerschaften',
          description: 'Wir bauen dauerhafte Beziehungen zu unseren Kunden, Lieferanten und Gemeinschaften durch Vertrauen und gemeinsames Wachstum auf.'
        }
      }
    },
    mission: {
      title: 'Unsere Mission',
      description: 'Wir widmen uns der Revolutionierung professioneller Hygienestandards durch innovative Lösungen, die Sauberkeit, Nachhaltigkeit und Effizienz fördern. Unser Engagement für Exzellenz treibt uns an, Produkte zu entwickeln, die die sich entwickelnden Bedürfnisse unserer Kunden nicht nur erfüllen, sondern übertreffen.',
      vision: {
        title: 'Vision für die Zukunft',
        description: 'Wir sehen eine Zukunft vor uns, in der nachhaltige Hygienelösungen für Unternehmen aller Größen zugänglich sind und zu einer saubereren, gesünderen Welt beitragen, während die Umweltbelastung minimiert wird. Durch kontinuierliche Innovation und Engagement für Qualität streben wir danach, die führende Kraft für professionelle Reinigungslösungen zu sein.'
      },
      stats: {
        experience: {
          value: '25+',
          label: 'Jahre Exzellenz'
        },
        clients: {
          value: '1000+',
          label: 'Zufriedene Kunden'
        },
        products: {
          value: '50+',
          label: 'Produktlinien'
        },
        presence: {
          value: '30+',
          label: 'Länder beliefert'
        }
      }
    },
    expertise: {
      title: 'Unsere Expertise',
      description: 'Mit jahrzehntelanger Erfahrung und einem Engagement für Exzellenz erstreckt sich unsere Expertise über mehrere Bereiche professioneller Reinigungs- und Hygienelösungen.',
      areas: {
        manufacturing: {
          title: 'Modernste Fertigung',
          description: 'Unsere fortschrittlichen Anlagen gewährleisten Präzision und Qualität in jedem Produkt'
        },
        development: {
          title: 'Produktentwicklung',
          description: 'Kontinuierliche Innovation treibt unsere Produktexzellenz voran'
        },
        quality: {
          title: 'Qualitätssicherung',
          description: 'Rigorose Tests gewährleisten Premium-Produktstandards'
        }
      }
    }
  },
  certificates: {
    title: 'Unsere Zertifizierungen',
    items: {
      iso14001: {
        title: 'ISO 14001:2015',
        description: 'Umweltmanagementsystem-Zertifikat für die Herstellung von Toilettenpapier, Servietten, Handtüchern, Haushaltschemikalien und Kunststoffverpackungen.'
      },
      iso22000_en: {
        title: 'ISO 22000:2005',
        description: 'Lebensmittelsicherheitsmanagementsystem-Zertifikat für die Herstellung von Papierservietten, Küchentüchern und Kunststoffverpackungen für den Haushalt.'
      },
      iso22000_sr: {
        title: 'ISO 22000:2005',
        description: 'Lebensmittelsicherheitsmanagementsystem-Zertifikat (Serbische Version) für Papierprodukte und Verpackungen.'
      },
      iso9001_sr: {
        title: 'ISO 9001:2015',
        description: 'Qualitätsmanagementsystem-Zertifikat für die Herstellung von Papierprodukten und Verpackungen (Serbische Version).'
      },
      haccp: {
        title: 'HACCP',
        description: 'Lebensmittelsicherheitssystem-Zertifikat für die Herstellung von Papierprodukten und Verpackungen.'
      },
      iso9001_sr_2: {
        title: 'ISO 9001:2015',
        description: 'Zusätzliches Qualitätssystem-Zertifikat für Herstellungsprozesse.'
      },
      registration: {
        title: 'Firmenregistrierung',
        description: 'Offizielle Registrierungsurkunde der FEMIC CO DOO bei der Agentur für Wirtschaftsregister.'
      },
      iso9001_en: {
        title: 'ISO 9001:2015',
        description: 'Qualitätsmanagementsystem-Zertifikat für die Herstellung von Papierprodukten und Verpackungen (Englische Version).'
      }
    },
    introText: 'Unser Engagement für Exzellenz wird durch internationale Zertifizierungen unterstützt, die Qualität, Sicherheit und Umweltverantwortung in allem, was wir tun, gewährleisten.'
  },
  partners: {
    title: 'Vertraut von Branchenführern'
  },
  contact: {
    title: 'Kontakt',
    form: {name: 'Name',
      namePlaceholder: 'Ihr Name',
      company: 'Unternehmen',
      companyPlaceholder: 'Ihr Unternehmen',
      email: 'E-Mail',
      emailPlaceholder: 'ihre@email.com',
      message: 'Nachricht',
      messagePlaceholder: 'Ihre Nachricht',
      send: 'Nachricht Senden',
      sending: 'Wird gesendet...'
    },
    success: 'Nachricht gesendet',
    successMessage: 'Wir melden uns bald bei Ihnen!',
    error: 'Fehler',
    errorMessage: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
  },
  footer: {
    companyName: 'Perfetto Professional',
    address: 'Mihajla Pupina Boulevard 10, Belgrad',
    quickLinks: 'Schnellzugriff',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    copyright: 'Alle Rechte vorbehalten.'
  },
  legal: {
    terms: {
      title: 'Nutzungsbedingungen',
      introduction: {
        title: 'PERFETTO PROFESSIONAL ONLINE-SHOP',
        description: 'Der Online-Shop ist ein Informationssystem für die Präsentation und den Verkauf von Produkten an Verbraucher.',
        company_info: 'Er wird von Femić Co verwaltet. Ein Benutzer ist eine Person, die dieses System nutzt, d.h. ein Verbraucher (Käufer) im Online-Shop.',
        usage_terms: 'Femić Co stellt die Nutzung von Diensten und Inhalten seiner Website zur Verfügung, für die diese Nutzungsbedingungen gelten. Die Nutzungsbedingungen gelten für alle Inhalte und Produkte der Website www.perfetto-professional.com.',
        acceptance: 'Durch die Nutzung eines beliebigen Teils der Website wird davon ausgegangen, dass die Nutzer mit diesen Bedingungen vertraut sind und die Nutzung der Inhalte dieser Website ausschließlich für den persönlichen Gebrauch und auf eigenes Risiko akzeptieren.',
        updates: 'Femić Co kann diese Bedingungen jederzeit durch Aktualisierung dieses Dokuments überarbeiten. Bitte besuchen Sie diese Seite regelmäßig, um die aktuell geltenden Bedingungen zu überprüfen, da sie für Sie bindend sind.'
      }
    },
    privacy: {
      title: 'Datenschutzerklärung',
      sections: {
        dataCollection: {
          title: 'Datenerfassung und -verarbeitung',
          content: 'Wir erfassen, analysieren und verarbeiten Daten über die Produkte, nach denen unsere Besucher suchen und die sie auswählen, sowie über die von ihnen besuchten Seiten. Diese Daten verwenden wir zur Verbesserung unseres Angebots und des Website-Layouts.'
        },
        dataUsage: {
          title: 'Datennutzung',
          content: 'Wir benötigen Ihre Daten, um Sie regelmäßig zu informieren oder Ihnen möglicherweise einen Fragebogen zu unseren Dienstleistungen zu senden. Die Teilnahme an solchen Aktivitäten ist selbstverständlich nicht verpflichtend.'
        },
        dataAccess: {
          title: 'RECHT AUF ZUGANG ZU PERSÖNLICHEN DATEN',
          content: 'Auf Ihre Anfrage wird unser Unternehmen Sie unverzüglich schriftlich darüber informieren, ob wir Ihre personenbezogenen Daten haben und wenn ja, welche Daten genau betroffen sind.'
        },
        security: {
          title: 'DATENSICHERHEIT',
          content: 'Das Unternehmen verwendet technische und organisatorische Sicherheitsmaßnahmen zum Schutz aller verwalteten Daten durch Verhinderung unbeabsichtigter und böswilliger Datenmanipulation.'
        },
        contact: {
          title: 'KONTAKT',
          content: 'Anträge auf Änderung oder Löschung Ihrer Daten können an unsere Adresse gesendet werden.'
        }
      }
    }
  },
  references: {
    title: 'Unsere Referenzen',
    pageTitle: 'UNSERE REFERENZEN',
    subtitle: 'Vertraut von führenden Unternehmen und Institutionen aus verschiedenen Sektoren',
    additionalPartnersTitle: 'ÜBRIGE PARTNER',
    items: {
      hotel: {
        company: 'Grand Hotel Belgrad',
        description: 'Komplette Renovierung der Hotelannehmlichkeiten und Hygienelösungen'
      },
      hospital: {
        company: 'Städtisches Krankenhauszentrum',
        description: 'Reinigungs- und Desinfektionssysteme für medizinische Einrichtungen'
      },
      business: {
        company: 'Geschäftszentrum Tower',
        description: 'Wartungslösungen für Bürogebäude'
      },
      school: {
        company: 'Internationaler Schulkomplex',
        description: 'Hygienemanagement für Bildungseinrichtungen'
      },
      restaurant: {
        company: 'Restaurantkettenlösungen',
        description: 'Restaurant- und Küchensanitationssysteme'
      },
      mall: {
        company: 'Einkaufszentrum Komplex',
        description: 'Großflächige Reinigungslösungen für den Einzelhandel'
      }
    }
  }
};

// i18n configuration
i18n.use(initReactI18next).init({
  resources: {
    sr: { translation: sr },
    en: { translation: en },
    de: { translation: de }
  },
  lng: 'sr', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;