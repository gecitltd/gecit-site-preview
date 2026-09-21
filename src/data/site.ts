export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

export interface Localized<T = string> {
  tr: T;
  en: T;
}

export const site = {
  brand: 'Geçit',
  legalName: {
    tr: 'Geçit Danışmanlık ve Temsilcilik Ltd. Şti.',
    en: 'Geçit Consultancy and Representation Ltd. Co.',
  } satisfies Localized,

  nav: {
    home: { tr: 'Ana Sayfa', en: 'Home' },
    glass: { tr: 'Cam Endüstrisi', en: 'Glass Industry' },
    ceramics: { tr: 'Seramik-Refrakter Endüstrisi', en: 'Ceramics-Refractory Industry' },
    contact: { tr: 'İletişim', en: 'Contact' },
    langSwitch: { tr: 'English', en: 'Türkçe' },
  } satisfies Record<string, Localized>,

  hero: {
    heading: {
      tr: "Geçit Danışmanlık ve Temsilcilik'e Hoşgeldiniz",
      en: 'Welcome to Geçit Consultancy and Representation',
    },
    // Substring of `heading` rendered with the gradient fill. Kept as data so the
    // headline copy itself stays a single translatable sentence.
    headingAccent: {
      tr: 'Geçit',
      en: 'Geçit',
    },
    subheading: {
      tr: 'Cam, seramik ve refrakter endüstrileri için dünya çapında üreticilerin Türkiye temsilcisi.',
      en: 'Representing world-class manufacturers in Turkey for the glass, ceramics and refractory industries.',
    },
  } satisfies Record<string, Localized>,

  marqueeLabel: {
    tr: 'Temsil Ettiğimiz Üreticiler',
    en: 'Manufacturers We Represent',
  } satisfies Localized,

  sectionEyebrows: {
    glass: { tr: 'Sıcak Uçtan Soğuk Uca', en: 'Hot End to Cold End' },
    ceramics: { tr: 'Refrakter ve Hammaddeler', en: 'Refractories & Raw Materials' },
    contact: { tr: 'Bize Ulaşın', en: 'Get in Touch' },
  } satisfies Record<string, Localized>,

  about: {
    glass: {
      title: { tr: 'Cam Endüstrisi', en: 'Glass Industry' },
      body: {
        tr: [
          'Şirketimiz, cam üretim prosesinde sıcak uçtan soğuk uca kadar dünya çapındaki çeşitli firmalarla çalışmaktadır.',
          'Sıcak uçta refrakter malzemeler, IS makinası ekipmanları, yağlama sistemleri, damla kesme bıçakları, uzun ömürlü ve gelişmiş kalıp ve kalıp bakım, işleme, ölçme sistemleri, cam ev eşyası şekillendirme sistemleri, uzmanlık alanlarımızdandır.',
          'Portföyümüz, soğuk uçta ise tavlama-dekor-temper fırınları, hat üstü kameralı kontrol sistemleri, cam dekor makinaları ve soğutma-dekor fırını bantları konularını kapsamaktadır.',
        ],
        en: [
          'Our company works with leading global manufacturers across the entire glass production process, covering solutions from the hot end to the cold end.',
          'In the Hot End, our expertise spans high-performance refractory materials, I.S. machine equipment, automated lubrication systems, shear blades, advanced long-life mould equipment, as well as comprehensive systems for mould maintenance, machining, inspection, and tableware forming.',
          'In the Cold End, our portfolio includes annealing-decoration-tempering lehrs, advanced online camera inspection systems, glass decorating machinery, and high-durability belts for annealing and decorating lehrs.',
        ],
      },
    },
    ceramics: {
      title: { tr: 'Seramik-Refrakter Endüstrisi', en: 'Ceramics-Refractory Industry' },
      body: {
        tr: [
          'Firmamız, seramik ve refrakter malzeme üretim süreçleriyle ilgili faaliyet göstermektedir. Bu kapsamda, seramik pişirim fırınları için kordiyerit, mullit ve silisyum karbür refrakter malzemeler üreten, alanında uzman üreticilerle iş birliği yapmaktadır.',
          'Ayrıca, refrakter ve porselen üretimi için alumina, mikrosilika ve grafit hammaddeleri sağlamaktadır.',
        ],
        en: [
          'Our company is actively engaged in the manufacturing processes of ceramics and refractory materials. Within this scope, we collaborate with industry-leading manufacturers specialized in producing high-performance cordierite, mullite, and silicon carbide (SiC) refractory materials designed for ceramic firing kilns.',
          'Additionally, we supply premium-grade raw materials—including alumina, microsilica, and graphite—for the production of refractories and advanced porcelain products.',
        ],
      },
    },
  } satisfies Record<string, { title: Localized; body: Localized<string[]> }>,

  glassSegments: {
    'hot-end': { tr: 'Sıcak Uç', en: 'Hot End' },
    'cold-end': { tr: 'Soğuk Uç', en: 'Cold End' },
  } satisfies Record<string, Localized>,

  contact: {
    title: { tr: 'İletişim', en: 'Contact' },
    addressLines: ['Akış Sok. 9/35', 'Göztepe / Kadıköy / İstanbul 34730'],
    phone: '(+90) 216 450 56 82/84',
    fax: '(+90) 216 450 54 80',
    email: 'info@gecit.net',
    mapImage: '/img/office-map.jpg',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Ak%C4%B1%C5%9F+Sok.+9%2F35%2C+G%C3%B6ztepe%2C+Kad%C4%B1k%C3%B6y%2C+%C4%B0stanbul+34730',
    labels: {
      phone: { tr: 'Tel', en: 'Phone' },
      fax: { tr: 'Faks', en: 'Fax' },
      email: { tr: 'E-posta', en: 'Email' },
      directions: { tr: 'Yol Tarifi Al', en: 'Get Directions' },
    } satisfies Record<string, Localized>,
    mapAttribution: {
      tr: 'Harita verileri © OpenStreetMap katkıda bulunanlar',
      en: 'Map data © OpenStreetMap contributors',
    } satisfies Localized,
  },

  productsLabel: { tr: 'Ürünler', en: 'Products' } satisfies Localized,
  moreInfoLabel: { tr: 'Daha Fazla Bilgi', en: 'More Information' } satisfies Localized,
  viewCompaniesLabel: { tr: 'Firmaları Görün', en: 'View Companies' } satisfies Localized,

  seo: {
    description: {
      tr: 'Geçit Danışmanlık Temsilcilik Ltd. Sitesine hoşgeldiniz, sitemiz firmalarımızın tanıtımını yapmaktadır.',
      en: 'Welcome to Geçit Danışmanlık Temsilcilik Ltd. Our site introduces the companies we represent in the glass, ceramics and refractory industries.',
    },
    keywords:
      'Gecit ltd, temsilcilik, Vesuvius, Sorg, eme, walter, fastner, zecchetti, cam, glass, seramik, ceramic, refrakter, refractory, cam firini, glass furnace, cam sekillendirme, glass forming, dekorlama, glass decoration, ambalaj, PET, palletizer, aluminyumoksit, silisyumkarbur, schunk, nabaltec, tecno5, antonini, alumina',
  },

  footerCopyright: (year: number, locale: Locale) =>
    locale === 'tr'
      ? `© Geçit Danışmanlık ve Temsilcilik Ltd. Şti. ${year}`
      : `© Geçit Consultancy and Representation Ltd. Co. ${year}`,
} as const;
