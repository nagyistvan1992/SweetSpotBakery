export interface ProductItem {
  id: string;
  title: string;
  category: 'cakes' | 'vintage' | 'themed' | 'mini' | 'prints';
  categoryLabel: string;
  description: string;
  flavorNotes: string[];
  servings?: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface ReviewItem {
  name: string;
  occasion: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BAKERY_INFO = {
  name: "Sweet Spot",
  subtitle: "Homemade Cakes & Pastries",
  location: "Satu Mare, România",
  phoneDisplay: "+40 740 000 000",
  phoneNumber: "40740000000",
  instagramUrl: "https://www.instagram.com/sweet_spot._bakery",
  instagramHandle: "@sweet_spot._bakery",
  facebookUrl: "https://www.facebook.com/people/Sweet-Spot/61583862023936/",
  facebookName: "Sweet Spot | Satu Mare",
  tagline: "De la prăjituri simple la torturi spectaculoase – tot ce ai nevoie pentru a-ți răsfăța sufletul.",
  hours: "Preluare comenzi: Luni – Sâmbătă | Ridicare programată",
};

export const REAL_GALLERY_HERO = [
  {
    image: "/images/real/dessert_cups_raspberry.jpg",
    title: "Cupe Desert cu Zmeură",
    tag: "Candy Bar & Evenimente",
  },
  {
    image: "/images/real/cake_half_anniversary.jpg",
    title: "Tort Aniversar 48 & 25",
    tag: "Personalizat 100%",
  },
  {
    image: "/images/real/cake_vintage_gold.jpg",
    title: "Tort Vintage Auriu",
    tag: "Design Lambeth",
  },
  {
    image: "/images/real/cake_medovik_berries.jpg",
    title: "Tort Medovik cu Fructe",
    tag: "Rețetă de Casă",
  },
  {
    image: "/images/real/cake_ombre_macarons.jpg",
    title: "Tort Ombré cu Macarons",
    tag: "Glazură Drip & Finisaj Fin",
  },
  {
    image: "/images/real/cake_vintage_white.jpg",
    title: "Tort Vintage Alb Pur",
    tag: "Eleganță Clasică",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "tort-half-anniversary",
    title: "Tort Personalizat „48 & 25” (Verde & Roz)",
    category: "cakes",
    categoryLabel: "Torturi Personalizate",
    description:
      "Un tort special creat pentru două aniversări sărbătorite împreună. Jumătate verde mentă fină, jumătate roz pudră, decorat manual cu borduri vintage din cremă și cifre personalizate.",
    flavorNotes: ["Cremă fină de vanilie", "Blat pufos de casă", "Decor manual cu poșul", "Design dublu aniversar"],
    servings: "10 - 14 porții (aprox. 1.8 - 2.2 kg)",
    image: "/images/real/cake_half_anniversary.jpg",
    badge: "100% Personalizat",
    featured: true,
  },
  {
    id: "cupe-desert-zmeura",
    title: "Cupe Desert Artizanale cu Zmeură & Mascarpone",
    category: "mini",
    categoryLabel: "Candy Bar & Mini Prăjituri",
    description:
      "Deserturi individuale rafinate, montate în straturi delicate de cremă catifelată de mascarpone, blat însiropat și inserție generoasă de zmeură proaspătă. Ideale pentru candy bar la nunți și botezuri în Satu Mare.",
    flavorNotes: ["Mascarpone catifelat", "Zmeură proaspătă", "Blat umed însiropat", "Porție individuală"],
    servings: "Platouri de 12, 24 sau 48 de cupe",
    image: "/images/real/dessert_cups_raspberry.jpg",
    badge: "Favorit Candy Bar",
    featured: true,
  },
  {
    id: "tort-vintage-gold",
    title: "Tort Vintage Auriu „Cute but Leo”",
    category: "vintage",
    categoryLabel: "Colecția Vintage",
    description:
      "Auriu, elegant și perfect pentru o zodie puternică. Realizat cu dantelărie bogată din cremă în stil Lambeth vintage și mesaj caligrafiat manual.",
    flavorNotes: ["Cremă nobilă catifelată", "Accente aurii comestibile", "Dantelărie clasică Lambeth"],
    servings: "8 - 12 porții",
    image: "/images/real/cake_vintage_gold.jpg",
    badge: "Stil Vintage",
    featured: true,
  },
  {
    id: "tort-medovik-fructe",
    title: "Tort Medovik Tradițional cu Fructe de Pădure",
    category: "cakes",
    categoryLabel: "Rețete de Casă",
    description:
      "Când nu știi ce desert să alegi... alege unul care îi face pe toți să zâmbească. Foi fine coapte cu miere naturală, cremă răcoroasă de smântână și frișcă naturală, ornat cu căpșuni, afine, zmeură și crenguțe de rozmarin.",
    flavorNotes: ["Foi fine cu miere", "Cremă răcoroasă de casă", "Căpșuni & Afine proaspete", "Rozmarin aromatic"],
    servings: "10 - 14 porții (cca 2 kg)",
    image: "/images/real/cake_medovik_berries.jpg",
    badge: "Gust de Casă",
    featured: true,
  },
  {
    id: "tort-ombre-macarons",
    title: "Tort Ombré Roz-Galben cu Drip & Macarons",
    category: "cakes",
    categoryLabel: "Torturi Festive",
    description:
      "Delicat, elegant și irezistibil! Tort finisat cu efect cromatic ombré cald, glazură albă care picură apetisant (drip glaze) și decorat cu macarons fine artizanale.",
    flavorNotes: ["Efect cromatic ombré", "Glazură drip fină", "Macarons asortate", "Blat lejer"],
    servings: "12 - 16 porții",
    image: "/images/real/cake_ombre_macarons.jpg",
    badge: "Spectaculos",
    featured: true,
  },
  {
    id: "tort-vintage-alb-pur",
    title: "Tort Vintage Alb Pur (Victorian Lambeth)",
    category: "vintage",
    categoryLabel: "Colecția Vintage",
    description:
      "Eleganță pură într-un tort vintage alb. Simplu, rafinat și mereu în tendințe. Tiszta elegancia egy fehér vintage tortában. Dantelărie meticuloasă realizată la poș.",
    flavorNotes: ["Cremă albă mătăsoasă", "Borduri regale victoriene", "Echilibru perfect dulce"],
    servings: "8 - 12 porții",
    image: "/images/real/cake_vintage_white.jpg",
    badge: "Tendință 2026",
    featured: false,
  },
  {
    id: "tort-calendar-love",
    title: "Tort Calendar Romantic „Mai 24”",
    category: "cakes",
    categoryLabel: "Aniversări de Cuplu",
    description:
      "Un moment special merită marcat pentru totdeauna. Calendar pictat manual cu data aniversării marcată într-o inimioară roșie și siluete elegante de îndrăgostiți.",
    flavorNotes: ["Design personalizat cu data ta", "Ciocolată & vanilie", "Accente de inimioare roșii"],
    servings: "8 - 10 porții",
    image: "/images/real/cake_calendar_love.jpg",
    featured: false,
  },
  {
    id: "tort-beer-50",
    title: "Tort Aniversar „Boldog 50. születésnapot apa!”",
    category: "themed",
    categoryLabel: "Torturi Tematice",
    description:
      "50 de ani, multe amintiri și motive de sărbătorit! Tort personalizat cu halbă de bere spumoasă desenată manual și urare dedicată pe tort.",
    flavorNotes: ["Desen manual la comandă", "Cremă densă de ciocolată", "Urare personalizată"],
    servings: "10 - 12 porții",
    image: "/images/real/cake_beer_50.jpg",
    featured: false,
  },
  {
    id: "tort-floral-peonies",
    title: "Tort Primăvară cu Margini Rupte & Bujori",
    category: "cakes",
    categoryLabel: "Torturi Eveniment",
    description:
      "Delicatețe și eleganță într-un tort spectaculos cu etaj fault-line în nuanțe degradate de roz și coroană generoasă de bujori/lalele naturale proaspete.",
    flavorNotes: ["Flori naturale igienizate", "Efect texturat fault-line", "Cremă catifelată"],
    servings: "12 - 16 porții",
    image: "/images/real/cake_floral_peonies.jpg",
    badge: "Eleganță Florală",
    featured: true,
  },
  {
    id: "tort-seminaked-rustic",
    title: "Tort Semi-Naked Rustic cu Citrice & Scorțișoară",
    category: "vintage",
    categoryLabel: "Colecția Rustică",
    description:
      "Un desert care îmbină simplitatea cu rafinamentul. Tort naked cu cremă fină ce lasă la vedere straturile aurii de blat, decorat cu felii uscate de portocală, bețe aromate de scorțișoară și rozmarin proaspăt.",
    flavorNotes: ["Blat condimentat cu scorțișoară", "Portocală caramelizată", "Cremă lejeră de mascarpone"],
    servings: "8 - 12 porții",
    image: "/images/real/cake_seminaked_rustic.jpg",
    featured: false,
  },
  {
    id: "tort-michael-jackson",
    title: "Tort Aniversar „Ábel 9” cu Print Comestibil",
    category: "prints",
    categoryLabel: "Foi de Zahăr & Print",
    description:
      "Transformă aniversarea copilului tău într-un spectacol de neuitat! Tort cu textură striată aurie, decorat cu foi de zahăr comestibile imprimate cu idolul său (Michael Jackson) și note muzicale.",
    flavorNotes: ["Foi de zahăr certificate", "Imprimare foto de înaltă rezoluție", "Gust iubit de copii"],
    servings: "10 - 15 porții",
    image: "/images/real/cake_michael_jackson.jpg",
    badge: "Print Alimentar",
    featured: true,
  },
  {
    id: "tort-gabbys-dollhouse",
    title: "Tort Tematic Gabby's Dollhouse cu Toppere Comestibile",
    category: "themed",
    categoryLabel: "Torturi Tematice Copii",
    description:
      "Tort colorat și vesel, cu foi de zahăr tăiate în forma personajelor din Gabby's Dollhouse, glazură roz veselă și bordură de bombonele multicolore crocante.",
    flavorNotes: ["Ciocolată cu lapte & căpșuni", "Toppere comestibile pe zahăr", "Crominut pentru copii"],
    servings: "10 - 14 porții",
    image: "/images/real/cake_gabbys_dollhouse.jpg",
    featured: false,
  },
  {
    id: "tort-heart-black-ribbon",
    title: "Tort Inimă Neagră cu Fundă de Satin",
    category: "vintage",
    categoryLabel: "Design Îndrăzneț",
    description:
      "Tort personalizat în formă de inimă, design unic și atitudine îndrăzneață. Finisaj intens de cremă neagră cu borduri victoriene și fundiță albă de satin.",
    flavorNotes: ["Formă inimă lucrată manual", "Ciocolată neagră intensă", "Fundă satin elegantă"],
    servings: "6 - 8 porții",
    image: "/images/real/cake_heart_black_ribbon.jpg",
    featured: false,
  },
  {
    id: "tort-burger-illusion",
    title: "Tort Iluzie Optică „Cheeseburger Gourmet”",
    category: "themed",
    categoryLabel: "Torturi Iluzie",
    description:
      "O capodoperă a măiestriei artizanale! Tort care imită perfect un cheeseburger suculent: chiflă din pandișpan rumenit presărat cu susan, „carne” din blat dens de ciocolată, „brânză cheddar” și „legume” modelate dulce.",
    flavorNotes: ["Pandispan rumenit pufos", "Blat dens de ciocolată belgiană", "Efect vizual uluitor"],
    servings: "8 - 12 porții",
    image: "/images/real/cake_burger_illusion.jpg",
    badge: "Iluzie Optică",
    featured: true,
  },
  {
    id: "print-foi-zahar-serviciu",
    title: "Serviciu Print Comestibil pe Foi de Zahăr",
    category: "prints",
    categoryLabel: "Foi de Zahăr & Print",
    description:
      "Realizăm printuri alimentare pe foi flexibile de zahăr de calitate superioară pentru torturile tale de acasă sau din laborator. Fotografii de familie, personaje pentru copii, logo-uri corporate sau urări speciale la rezoluție maximă.",
    flavorNotes: ["Foaie de zahăr flexibilă", "Culori alimentare sigure 100%", "Rezoluție fotografică", "Comenzi rapide Satu Mare"],
    servings: "Format A4 sau decupaj pe contur",
    image: "/images/real/print_edible_sugar_sheets.jpg",
    badge: "Serviciu Rapid",
    featured: true,
  },
];

export const INGREDIENTS = [
  {
    title: "Unt Pur 82% Grăsime",
    description: "Nicio prăjitură Sweet Spot nu conține margarină sau înlocuitori vegetali ieftini. Doar unt adevărat cu gust bogat.",
    icon: "Wheat",
  },
  {
    title: "Ciocolată Belgiană Veritabilă",
    description: "Folosim ciocolată nobilă de la producători consacrați, cu unt pur de cacao, fără glazuri sintetice sau grăsimi hidrogenate.",
    icon: "Heart",
  },
  {
    title: "Fructe & Piureuri Naturale",
    description: "Zmeură, afine, căpșuni și fructe exotice proaspete sau piureuri 100% din fruct, fără arome chimice artificiale.",
    icon: "Sparkles",
  },
  {
    title: "Vanilie de Madagascar & Ouă Proaspete",
    description: "Extrase naturale de vanilie veritabilă și ouă proaspete pentru blaturi aerate, umede și fragede.",
    icon: "ShieldCheck",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    name: "Andreea M.",
    occasion: "Tort de Botez • Satu Mare",
    comment:
      "Tortul a fost absolut spectaculos! Nu doar că a arătat ca o operă de artă, dar gustul a fost divin – nu este acel tort greu și extrem de dulce din comerț, ci incredibil de fin și echilibrat.",
    rating: 5,
    date: "August 2026",
  },
  {
    name: "Cristian & Paula",
    occasion: "Tort de Nuntă & Candy Bar",
    comment:
      "Am colaborat cu Sweet Spot pentru evenimentul nostru din Satu Mare. Toți invitații au lăudat cupele de desert cu zmeură și tortul principal. Comunicarea a fost caldă și totul livrat impecabil.",
    rating: 5,
    date: "Iulie 2026",
  },
  {
    name: "Raluca T.",
    occasion: "Tort aniversar personalizat",
    comment:
      "Am cerut un tort după o poză pe care o văzusem pe Instagram și a ieșit chiar mai frumos decât în fotografie! Blatul a fost umed, crema fină și toți oaspeții au cerut a doua felie.",
    rating: 5,
    date: "Iunie 2026",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Cu cât timp înainte este recomandat să plasez comanda?",
    answer:
      "Pentru torturi aniversare simple, recomandăm un avans de 3-5 zile. Pentru torturi complexe, evenimente mari (nunți, botezuri) sau comenzi mari de candy bar, este ideal să ne contactați cu 2-3 săptămâni înainte pentru a rezerva data.",
  },
  {
    question: "Cum se face ridicarea sau livrarea în Satu Mare?",
    answer:
      "Comenzile se ridică direct de la laboratorul nostru de casă din Satu Mare la ora agreată împreună. Pentru torturi etajate de nuntă sau candy bar complet, asigurăm livrarea și montarea în condiții sigure direct la locație.",
  },
  {
    question: "Puteți reproduce un model de tort după o fotografie trimisă de mine?",
    answer:
      "Da, desigur! Puteți să ne trimiteți pe WhatsApp sau Instagram fotografia cu modelul pe care îl doriți. Îl vom adapta cu plăcere, păstrând detaliile dorite și garantând gustul delicios de casă.",
  },
  {
    question: "Oferiți serviciul de print comestibil pe foaie de zahăr separat?",
    answer:
      "Da! Imprimăm foi de zahăr comestibile de calitate înaltă pentru oricine pregătește un tort acasă sau pentru alte cofetării din Satu Mare. Ne trimiteți imaginea dorită și o pregătim gata de aplicat.",
  },
  {
    question: "Folosiți premixuri, pudre sau conservanți?",
    answer:
      "Niciodată. Întregul concept Sweet Spot este clădit pe respectul pentru prăjitura adevărată de casă. Folosim doar unt 82%, ouă proaspete, ciocolată veritabilă, piureuri pure de fructe și mascarpone de calitate superioară.",
  },
];
