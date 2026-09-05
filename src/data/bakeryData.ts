export interface ProductItem {
  id: string;
  title: string;
  category: 'cakes' | 'rolls' | 'mini' | 'prints' | 'candybar';
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

export const PRODUCTS: ProductItem[] = [
  {
    id: "tort-fistic-zmeura",
    title: "Tort Semnătură Fistic & Zmeură",
    category: "cakes",
    categoryLabel: "Torturi Fine",
    description:
      "Blat pufos cu făină de migdale, cremă mătăsoasă de mascarpone cu pastă pură de fistic 100%, inserție răcoroasă de jeleu de zmeură de casă și decorat cu fistic copt și fructe proaspete.",
    flavorNotes: ["Pastă pură de fistic", "Zmeură proaspătă", "Mascarpone italian", "Blat fin de migdale"],
    servings: "10 - 16 porții (aprox. 1.8 - 2.5 kg)",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
    badge: "Cel mai iubit",
    featured: true,
  },
  {
    id: "cinnamon-rolls-box",
    title: "Cinnamon Rolls Artizanale",
    category: "rolls",
    categoryLabel: "Rulouri & Dospite",
    description:
      "Rulouri pufoase cu scorțișoară aromată Ceylon, coapte proaspăt și glazurate cu cremă catifelată de brânză. Disponibile în variante cu sos Lotus Biscoff, ciocolată belgiană sau caramel sărat.",
    flavorNotes: ["Scorțișoară Ceylon", "Cremă fină de brânză", "Unt 82%", "Sos Lotus Biscoff opțional"],
    servings: "Cutie de 4, 6 sau 12 bucăți",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    badge: "Specialitatea Casei",
    featured: true,
  },
  {
    id: "babka-ciocolata-nuci",
    title: "Babka Împletit cu Ciocolată & Nuci",
    category: "rolls",
    categoryLabel: "Rulouri & Dospite",
    description:
      "Cozonac babka artizanal cu dospire lentă, extrem de pufos și însiropat, plin de straturi generoase de ciocolată neagră belgiană și miez crocant de nucă rumenită.",
    flavorNotes: ["Ciocolată belgiană 54%", "Nucă crocantă", "Aluat bogat în unt", "Sirop parfumat de portocală"],
    servings: "Bucată întreagă (aprox. 850g)",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1000&q=80",
    badge: "Tradiție & Rafinament",
    featured: true,
  },
  {
    id: "tort-nunta-elegance",
    title: "Tort de Nuntă & Botez „Pure Floral”",
    category: "cakes",
    categoryLabel: "Evenimente Speciale",
    description:
      "Tort festiv etajat cu finisaj impecabil în cremă lejeră de unt elvețian, decorat cu flori naturale igienizate și accente aurii fine. Compoziția internă se personalizează la cerere.",
    flavorNotes: ["Finisaj unt elvețian", "Flori naturale elegante", "Arome personalizate", "Etaje stabile"],
    servings: "De la 25 până la 120+ porții",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80",
    badge: "Evenimente Premium",
    featured: true,
  },
  {
    id: "tort-ciocolata-visine",
    title: "Tort Intens de Ciocolată & Vișine",
    category: "cakes",
    categoryLabel: "Torturi Fine",
    description:
      "Blat umed dens de ciocolată neagră, mousse cremos de ciocolată belgiană cu lapte, inserție de vișine întregi ușor acrișoare și glazură oglindă lucioasă.",
    flavorNotes: ["Ciocolată neagră intensă", "Vișine aromate", "Ganache ciocolată", "Echilibru dulce-acrișor"],
    servings: "8 - 14 porții (aprox. 1.6 - 2.2 kg)",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "mini-pavlova-fructe",
    title: "Mini Pavlova cu Fructe de Pădure",
    category: "mini",
    categoryLabel: "Mini Prăjituri",
    description:
      "Cuiburi delicate de bezea crocantă la exterior și miez pufos de bezea marshmallow, cremă lejeră de mascarpone cu vanilie de Madagascar și abundență de fructe proaspete de sezon.",
    flavorNotes: ["Bezea aerată", "Mascarpone & vanilie", "Fructe de pădure proaspete"],
    servings: "Platouri de 8, 12 sau 24 bucăți",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "tarte-fine-artizanale",
    title: "Platou Mini Tarte & Choux Craquelin",
    category: "mini",
    categoryLabel: "Mini Prăjituri",
    description:
      "Tarte artizanale cu aluat fraged cu unt, cremă fină de lămâie cu bezea arsă, ganache de ciocolată și choux umplut cu cremă bogată de vanilie sau pralină.",
    flavorNotes: ["Aluat fraged cu unt", "Cremă de lămâie", "Ciocolată caramelizată", "Choux pufos"],
    servings: "Platou festiv mixt (1 - 2 kg)",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "print-comestibil-tort",
    title: "Tort Personalizat cu Print Comestibil",
    category: "prints",
    categoryLabel: "Foi de Zahăr & Print",
    description:
      "Torturi personalizate pentru copii, zile de naștere sau companii, decorate cu foi de zahăr de calitate superioară imprimate alimentar la rezoluție fotografică de înaltă fidelitate.",
    flavorNotes: ["Foaie de zahăr flexibilă", "Culori alimentare certificate", "Orice imagine sau logo", "Design tematic"],
    servings: "Personalizat în funcție de numărul de invitați",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80",
    badge: "Personalizare 100%",
    featured: true,
  },
  {
    id: "candy-bar-evenimente",
    title: "Candy Bar Tematic & Platouri Dulci",
    category: "candybar",
    categoryLabel: "Candy Bar",
    description:
      "Colț dulce complet personalizat pentru nunți, botezuri și petreceri în Satu Mare. Include mini pavlova, macarons, cupe cu mousse, mini tarte și brioșe decorate în tematica evenimentului.",
    flavorNotes: ["Diversitate de arome", "Decor armonizat cu sala", "Aranjament inclus", "Porții individuale comode"],
    servings: "Pentru evenimente de la 30 la 200+ persoane",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1000&q=80",
    badge: "Pachet Eveniment",
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
      "Tortul a fost absolut spectaculos! Nu doar că a arătat ca o operă de artă, dar gustul de fistic și zmeură a fost divin – nu este acel tort greu și extrem de dulce din comerț, ci incredibil de fin și echilibrat.",
    rating: 5,
    date: "August 2026",
  },
  {
    name: "Cristian & Paula",
    occasion: "Tort de Nuntă & Candy Bar",
    comment:
      "Am colaborat cu Sweet Spot pentru nunta noastră din Satu Mare. Toți invitații au lăudat mini pavlova și tortul principal. Comunicarea a fost caldă, impecabilă și totul a fost livrat la timp.",
    rating: 5,
    date: "Iulie 2026",
  },
  {
    name: "Raluca T.",
    occasion: "Cinnamon Rolls & Babka de weekend",
    comment:
      "Cele mai bune rulouri cu scorțișoară pe care le-am mâncat vreodată în Satu Mare! Aluatul este incredibil de pufos, iar glazura de cremă de brânză e desăvârșită. Am devenit clientă fidelă!",
    rating: 5,
    date: "Iunie 2026",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Cu cât timp înainte este recomandat să plasez comanda?",
    answer:
      "Pentru torturi simple și prăjituri sau rulouri de weekend, recomandăm un avans de 3-5 zile. Pentru torturi mari de eveniment (nunți, botezuri, candy bar tematic), este ideal să ne contactați cu 2-4 săptămâni înainte pentru a rezerva data.",
  },
  {
    question: "Cum se face ridicarea sau livrarea în Satu Mare?",
    answer:
      "Comenzile se ridică direct de la laboratorul nostru de casă din Satu Mare la ora agreată împreună. Pentru torturi etajate de nuntă sau comenzi mari de candy bar, asigurăm livrarea și montarea în condiții sigure direct la sala de eveniment.",
  },
  {
    question: "Puteți reproduce un model de tort după o fotografie?",
    answer:
      "Absolut! Ne puteți trimite fotografia de referință pe WhatsApp sau Instagram. Vom păstra stilul dorit, adaptându-l tehnic și punându-ne amprenta artizanală pentru un rezultat armonios și delicios.",
  },
  {
    question: "Folosiți premixuri, pudre sau conservanți?",
    answer:
      "Niciodată. Întregul concept Sweet Spot este clădit pe respectul pentru prăjitura adevărată de casă. Folosim doar unt 82%, ouă proaspete, ciocolată veritabilă, piureuri pure de fructe și mascarpone de calitate superioară.",
  },
  {
    question: "Oferiți și opțiuni pentru persoane cu alergii sau preferințe speciale?",
    answer:
      "Putem adapta anumite rețete pentru alergii specifice (ex: fără nuci, fără alcool, etc.). Vă rugăm să ne menționați aceste detalii la discuția inițială.",
  },
];
