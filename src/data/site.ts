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
      en: 'Welcome to Geçit Consultancy and Representation Ltd. Co.',
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
        tr: 'Şirketimiz, cam üretim prosesinde sıcak uçtan soğuk uca kadar dünya çapındaki çeşitli firmalarla çalışmaktadır. Sıcak uçta refrakter malzemeler, cam ev eşyası şekillendirme sistemleri, IS makinası göbek mekanizmaları ve damla kesme bıçakları uzmanlık alanlarımızdandır. Portföyümüz, soğuk uçta ise hat üstü kontrol sistemleri, cam dekor makinaları ve soğutma-dekor fırını bantları konularını kapsamaktadır.',
        en: 'Our company works with international companies across the glass production process, from hot-end to cold-end. Our expertise covers refractory materials, glass tableware forming systems, IS machine parison mechanisms and shear blades on the hot end, and inline inspection systems, glass decoration machines and annealing/decoration lehr belts on the cold end.',
      },
    },
    ceramics: {
      title: { tr: 'Seramik-Refrakter Endüstrisi', en: 'Ceramics-Refractory Industry' },
      body: {
        tr: 'Firmamız, seramik ve refrakter malzeme üretim süreçleriyle ilgili faaliyet göstermektedir. Bu kapsamda, seramik pişirim fırınları için kordiyalit, mullit ve silisyum karbür refrakter malzemeler üreten, alanında uzman üreticilerle iş birliği yapmaktadır. Ayrıca, refrakter ve porselen üretimi için alumina ve mikrosilika hammaddeleri sağlamaktadır.',
        en: 'Our firm is active in ceramics and refractory material production processes, working with specialist manufacturers of cordierite, mullite and silicon carbide refractories for ceramic kilns, and supplying alumina and microsilica raw materials for refractory and porcelain production.',
      },
    },
  } satisfies Record<string, { title: Localized; body: Localized }>,

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
    directionsUrl: 'https://www.google.com/maps?q=40.974709,29.065482',
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

  wassmer: {
    name: 'Wassmer Group',
    logo: '/img/wassmer.png',
    officialUrl: 'http://www.wassmer.de',
    summary: {
      tr: 'Refrakter ve tuğla endüstrisi için proses makina ve ekipmanları',
      en: 'Process machinery and equipment for the brick and refractory industries',
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
