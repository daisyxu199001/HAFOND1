export const languagePrefixPattern = /^\/(fr|es|de|ru|pt)(?=\/|$)/;

export function getLanguageFromPathname(pathname = '/') {
  const match = pathname.match(languagePrefixPattern);
  return match ? match[1] : 'en';
}

const englishHome = {
  nav: {
    home: 'Home',
    products: 'Products',
    solutions: 'Solutions',
    about: 'About',
    factory: 'Factory',
    cases: 'Cases',
    resources: 'Resources',
    contact: 'Contact'
  },
  cta: {
    quote: 'Get a Quote',
    whatsapp: 'WhatsApp Us',
    catalog: 'Download Catalog',
    datasheet: 'Need a datasheet?',
    sendScreen: 'Send screen size',
    outdoorQuote: 'Ask for outdoor quote',
    meetingRoom: 'Meeting room solution',
    projectAdvice: 'Ask for Project Advice',
    discussProject: 'Discuss similar project'
  },
  hero: {
    title: 'Shenzhen LED Display Manufacturer for Global Project Buyers',
    text: 'HAFOND builds customized indoor, outdoor, rental and creative LED display solutions with in-house R&D, SMT assembly, 72-hour aging test and final QC.',
    proofLabel: 'HAFOND trust points',
    proof: ['Est. 2014', '3000+ sqm factory', '70+ professionals', 'Not a trading company']
  },
  sections: {
    products: {
      title: 'Product Categories Built Around Project Demand',
      text: "Strategic product order follows HAFOND's sales priority: flagship outdoor fixed, creative custom differentiation, high-margin fine pitch, traffic products and rental support."
    },
    solutions: {
      title: 'Solutions for the Buyers HAFOND Wants',
      text: 'Each scenario can become an SEO page, AIO/GEO answer target and future paid traffic landing page.'
    },
    factory: {
      title: 'Factory Credibility for Supplier Shortlisting',
      text: 'HAFOND gives overseas buyers clear manufacturing proof: Shenzhen factory support, in-house production workflow, 72-hour aging test, final QC and export-ready certification documents.'
    },
    cases: {
      title: 'Market Focus and Case Study Direction',
      text: 'First launch in English, then expand Spanish and German pages for the strongest target regions.'
    },
    about: {
      title: 'Project Support, Not Catalog-Only Selling',
      text: 'HAFOND is best positioned for buyers who need product selection, cabinet planning, technical confirmation, remote installation guidance and spare parts support.'
    },
    faq: {
      title: 'Buyer Questions Answered for SEO and AI Search',
      text: 'Short direct answers help Google AI Overview, Bing/Copilot, Perplexity and ChatGPT understand HAFOND accurately.'
    },
    inquiry: {
      title: 'Send Your LED Display Project Requirements',
      text: "The form follows HAFOND's required B2B fields for quote quality, CRM routing and future Google Ads conversion tracking."
    }
  },
  products: [
    {
      title: 'Outdoor Fixed LED Display',
      tag: 'Core / flagship',
      image: '/assets/generated/outdoor-fixed-installation.png',
      detail: 'FOC, FOE, FOQ, FOS and FSS series for DOOH, municipal, stadium, roadside and building facade projects.',
      specs: ['P2.97-P10', '4500-7000 nits', 'IP65 waterproof', 'Aluminum cabinet']
    },
    {
      title: 'Creative & Custom LED Display',
      tag: 'Differentiator',
      image: '/assets/generated/creative-custom-mall.png',
      detail: 'Custom shape, size, structure and branding for sphere, poster, transparent, dance floor and landmark displays.',
      specs: ['Custom fabrication', 'Brand activation', 'GOB protection', 'Retail landmark']
    },
    {
      title: 'Indoor Fine Pitch COB/GOB LED',
      tag: 'High margin',
      image: '/assets/generated/indoor-fine-pitch-control-room.png',
      detail: 'FIA, FIB, FIC and FID series for meeting rooms, control centers, corporate showrooms and broadcast studios.',
      specs: ['P1.25-P2.5', '3840Hz refresh', 'Front maintenance', '5000:1 contrast']
    },
    {
      title: 'Indoor SMD LED Display',
      tag: 'Traffic / entry',
      image: '/assets/generated/creative-custom-mall.png',
      detail: 'Cost-effective P2-P5 indoor LED display solutions for commercial, retail, hotel and signage projects.',
      specs: ['P2-P5', '20-25 day delivery', 'CE & RoHS', 'Commercial display']
    },
    {
      title: 'Rental LED Display',
      tag: 'Support category',
      image: '/assets/banners/3.jpg',
      detail: 'Indoor and outdoor rental cabinets for AV rental companies, exhibitions, concerts and event contractors.',
      specs: ['500x500mm', '7.5kg cabinet', 'Fast lock', 'Curve lock option']
    }
  ],
  solutions: [
    ['DOOH & Outdoor Advertising', 'High-brightness LED billboards for media operators and city advertising projects.', '/assets/generated/hero-outdoor-facade.png'],
    ['Sports Venues & Stadiums', 'Outdoor fixed and perimeter LED display planning for stadium visibility.', '/assets/generated/outdoor-fixed-installation.png'],
    ['Retail & Commercial Display', 'Creative, transparent and indoor screens for brand activation and storefronts.', '/assets/generated/creative-custom-mall.png'],
    ['Corporate & Conference', 'Fine pitch COB/GOB LED walls for meeting rooms and control centers.', '/assets/generated/indoor-fine-pitch-control-room.png'],
    ['Stage, Events & Rental', 'Fast-lock rental cabinets for concerts, exhibitions and AV rental companies.', '/assets/banners/3.jpg'],
    ['Municipal & Smart City', 'Reliable outdoor LED displays for public information and transport environments.', '/assets/banners/6.jpg']
  ],
  advantages: [
    ['Custom manufacturing', 'Cabinet size, shape, brightness and branding can be adjusted for real project requirements.'],
    ['In-house quality control', 'R&D, SMT assembly, screen integration, 72-hour aging test and final QC are handled on site.'],
    ['Project support', 'Pre-sales solution design, technical consultation, remote install guidance and spare parts support.'],
    ['Manufacturer, not trading company', 'HAFOND is positioned for project buyers who value stability, support and long-term cooperation.']
  ],
  cases: [
    ['Outdoor DOOH Projects', 'Middle East and South America outdoor billboard opportunities.'],
    ['Stadium & Municipal Displays', 'Project contractor content for public and sports scenarios.'],
    ['Creative Retail Landmarks', 'Custom LED formats for brand-driven buyers.']
  ],
  faqs: [
    ['Is HAFOND a trading company?', 'No. HAFOND is a Shenzhen-based LED display manufacturer with in-house R&D, SMT assembly, aging test and QC.'],
    ['Which buyers are the best fit?', 'Local system integrators, engineering contractors, LED display distributors, DOOH operators and AV rental companies.'],
    ['What project details should I send first?', 'Send your country, product type, application scenario, approximate screen area, viewing distance and deadline.'],
    ['Can HAFOND support custom LED display projects?', 'Yes. Cabinet size, shape, brightness, structure and branding can be discussed for custom fabrication.']
  ],
  footer: {
    text: 'Shenzhen LED display manufacturer since 2014 for international project buyers.',
    products: 'Products',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    faqResources: 'FAQ / Resources'
  },
  mega: {
    productCenter: 'Product Center',
    productTitle: 'Choose by project demand, not by catalog noise.',
    productText: "Outdoor fixed, creative custom, fine pitch, indoor SMD and rental LED display categories are ordered by HAFOND's strategic priority.",
    downloadText: 'Download the LED screen catalog or start a WhatsApp chat with project details.',
    solutionsTitle: 'Build landing pages around buyer intent.',
    solutionsText: 'Use these scenarios for SEO, AI search answers and later Google Ads landing pages.',
    company: 'Company',
    overview: 'Company Overview',
    team: 'Team & Management',
    certifications: 'Certifications',
    why: 'Why HAFOND',
    trustSignal: 'Trust Signal',
    trustTitle: 'Manufacturer, not trading company.',
    trustText: 'Est. 2014, Shenzhen factory, 72-hour aging test and QC on site.',
    caseCategories: 'Case Categories',
    allProjects: 'All Projects',
    projectProof: 'Project Proof',
    proofTitle: 'Real photos and verified details.',
    proofText: 'Case pages focus on actual project scenes, product configuration and installation requirements.',
    resources: 'Resources',
    downloadCenter: 'Download Center',
    guide: 'LED Screen Guide',
    pitchGuide: 'Pixel Pitch Guide',
    aioTitle: 'Answer buyer questions clearly.',
    aioText: 'Short answers, tables and FAQs help Google AI Overview and Perplexity parse HAFOND.'
  }
};

const spanishHome = {
  nav: {
    home: 'Inicio',
    products: 'Productos',
    solutions: 'Soluciones',
    about: 'Empresa',
    factory: 'Fábrica',
    cases: 'Casos',
    resources: 'Recursos',
    contact: 'Contacto'
  },
  cta: {
    quote: 'Solicitar cotización',
    whatsapp: 'Escríbenos por WhatsApp',
    catalog: 'Descargar catálogo',
    datasheet: '¿Necesita una ficha técnica?',
    sendScreen: 'Enviar tamaño de pantalla',
    outdoorQuote: 'Cotizar pantalla exterior',
    meetingRoom: 'Solución para sala de reuniones',
    projectAdvice: 'Pedir asesoría de proyecto',
    discussProject: 'Consultar un proyecto similar'
  },
  hero: {
    title: 'Fabricante de pantallas LED en Shenzhen para compradores globales',
    text: 'HAFOND fabrica soluciones LED personalizadas para interior, exterior, alquiler y proyectos creativos, con I+D propia, ensamblaje SMT, prueba de envejecimiento de 72 horas y control de calidad final.',
    proofLabel: 'Puntos de confianza de HAFOND',
    proof: ['Desde 2014', 'Fábrica de 3000+ m²', '70+ profesionales', 'No somos una comercializadora']
  },
  sections: {
    products: {
      title: 'Categorías de productos según la demanda del proyecto',
      text: 'La estructura de productos prioriza las necesidades reales del comprador: pantallas LED exteriores fijas, soluciones creativas a medida, fine pitch de alto valor, productos de tráfico y soporte para alquiler.'
    },
    solutions: {
      title: 'Soluciones LED para compradores internacionales',
      text: 'Cada aplicación ayuda al cliente a identificar rápidamente el tipo de pantalla, el entorno de instalación y la configuración adecuada.'
    },
    factory: {
      title: 'Credibilidad de fábrica para seleccionar proveedor',
      text: 'HAFOND ofrece pruebas claras de fabricación: soporte desde Shenzhen, flujo de producción interno, prueba de envejecimiento de 72 horas, QC final y documentos de certificación para exportación.'
    },
    cases: {
      title: 'Mercados objetivo y dirección de casos',
      text: 'El sitio se lanza primero en inglés y español, con contenido preparado para Medio Oriente, Sudamérica, Europa y otros mercados clave.'
    },
    about: {
      title: 'Soporte de proyecto, no solo venta por catálogo',
      text: 'HAFOND ayuda a compradores que necesitan selección de producto, planificación de gabinetes, confirmación técnica, guía remota de instalación y soporte de repuestos.'
    },
    faq: {
      title: 'Preguntas de compradores respondidas con claridad',
      text: 'Respuestas breves y directas ayudan a Google, Perplexity y otros motores de IA a entender correctamente a HAFOND.'
    },
    inquiry: {
      title: 'Envíe los requisitos de su proyecto LED',
      text: 'El formulario recoge los datos B2B necesarios para preparar una cotización precisa y responder con rapidez.'
    }
  },
  products: [
    {
      title: 'Pantalla LED exterior fija',
      tag: 'Producto principal',
      image: '/assets/generated/outdoor-fixed-installation.png',
      detail: 'Series FOC, FOE, FOQ, FOS y FSS para DOOH, proyectos municipales, estadios, carreteras y fachadas de edificios.',
      specs: ['P2.97-P10', '4500-7000 nits', 'Protección IP65', 'Gabinete de aluminio']
    },
    {
      title: 'Pantalla LED creativa y personalizada',
      tag: 'Diferenciación',
      image: '/assets/generated/creative-custom-mall.png',
      detail: 'Forma, tamaño, estructura y branding personalizados para esferas, pósters, pantallas transparentes, pisos LED y proyectos icónicos.',
      specs: ['Fabricación a medida', 'Activación de marca', 'Protección GOB', 'Retail landmark']
    },
    {
      title: 'Pantalla LED indoor fine pitch COB/GOB',
      tag: 'Alto valor',
      image: '/assets/generated/indoor-fine-pitch-control-room.png',
      detail: 'Series FIA, FIB, FIC y FID para salas de reuniones, centros de control, showrooms corporativos y estudios de transmisión.',
      specs: ['P1.25-P2.5', '3840Hz', 'Mantenimiento frontal', 'Contraste 5000:1']
    },
    {
      title: 'Pantalla LED indoor SMD',
      tag: 'Entrada / tráfico',
      image: '/assets/generated/creative-custom-mall.png',
      detail: 'Soluciones LED indoor P2-P5 para comercios, retail, hoteles y señalización con buena relación costo-beneficio.',
      specs: ['P2-P5', 'Entrega 20-25 días', 'CE & RoHS', 'Display comercial']
    },
    {
      title: 'Pantalla LED de alquiler',
      tag: 'Categoría de soporte',
      image: '/assets/banners/3.jpg',
      detail: 'Gabinetes de alquiler indoor y outdoor para empresas AV, ferias, conciertos y contratistas de eventos.',
      specs: ['500x500mm', 'Gabinete 7.5kg', 'Cierre rápido', 'Opción curva']
    }
  ],
  solutions: [
    ['DOOH y publicidad exterior', 'Pantallas LED de alto brillo para operadores de medios y publicidad urbana.', '/assets/generated/hero-outdoor-facade.png'],
    ['Estadios y recintos deportivos', 'Planificación de pantallas LED fijas y perimetrales para alta visibilidad.', '/assets/generated/outdoor-fixed-installation.png'],
    ['Retail y display comercial', 'Pantallas creativas, transparentes e indoor para marcas, vitrinas y centros comerciales.', '/assets/generated/creative-custom-mall.png'],
    ['Corporativo y conferencias', 'Videowalls LED fine pitch COB/GOB para salas de reuniones y centros de control.', '/assets/generated/indoor-fine-pitch-control-room.png'],
    ['Escenarios, eventos y alquiler', 'Gabinetes de cierre rápido para conciertos, exposiciones y empresas AV.', '/assets/banners/3.jpg'],
    ['Municipal y smart city', 'Pantallas LED exteriores confiables para información pública y transporte.', '/assets/banners/6.jpg']
  ],
  advantages: [
    ['Fabricación personalizada', 'Tamaño de gabinete, forma, brillo y branding se pueden ajustar a los requisitos reales del proyecto.'],
    ['Control de calidad interno', 'I+D, ensamblaje SMT, integración de pantalla, prueba de envejecimiento de 72 horas y QC final se gestionan en fábrica.'],
    ['Soporte de proyecto', 'Diseño de solución preventa, consultoría técnica, guía remota de instalación y soporte de repuestos.'],
    ['Fabricante, no comercializadora', 'HAFOND está orientada a compradores que valoran estabilidad, soporte y cooperación a largo plazo.']
  ],
  cases: [
    ['Proyectos DOOH exteriores', 'Oportunidades de pantallas publicitarias en Medio Oriente y Sudamérica.'],
    ['Estadios y pantallas municipales', 'Contenido para contratistas de proyectos públicos y deportivos.'],
    ['Landmarks creativos de retail', 'Formatos LED personalizados para compradores orientados a marca.']
  ],
  faqs: [
    ['¿HAFOND es una comercializadora?', 'No. HAFOND es un fabricante de pantallas LED en Shenzhen con I+D, ensamblaje SMT, prueba de envejecimiento y QC internos.'],
    ['¿Qué compradores encajan mejor?', 'Integradores locales, contratistas de ingeniería, distribuidores de pantallas LED, operadores DOOH y empresas de alquiler AV.'],
    ['¿Qué datos debo enviar primero?', 'País, tipo de producto, aplicación, área aproximada de pantalla, distancia de visualización y fecha límite del proyecto.'],
    ['¿HAFOND puede apoyar proyectos LED personalizados?', 'Sí. Podemos discutir tamaño, forma, brillo, estructura y branding del gabinete para fabricación a medida.']
  ],
  footer: {
    text: 'Fabricante de pantallas LED en Shenzhen desde 2014 para compradores internacionales.',
    products: 'Productos',
    quickLinks: 'Enlaces rápidos',
    contact: 'Contacto',
    faqResources: 'FAQ / Recursos'
  },
  mega: {
    productCenter: 'Centro de productos',
    productTitle: 'Elija según la demanda del proyecto, no por ruido de catálogo.',
    productText: 'Las categorías incluyen pantallas exteriores fijas, creativas a medida, fine pitch, indoor SMD y alquiler, ordenadas por prioridad comercial de HAFOND.',
    downloadText: 'Descargue el catálogo LED o inicie una conversación por WhatsApp con los detalles de su proyecto.',
    solutionsTitle: 'Soluciones organizadas por intención del comprador.',
    solutionsText: 'Estos escenarios sirven para SEO, respuestas de IA y futuras páginas de campañas publicitarias.',
    company: 'Empresa',
    overview: 'Resumen de empresa',
    team: 'Equipo y gestión',
    certifications: 'Certificaciones',
    why: 'Por qué HAFOND',
    trustSignal: 'Señal de confianza',
    trustTitle: 'Fabricante, no comercializadora.',
    trustText: 'Desde 2014, fábrica en Shenzhen, prueba de envejecimiento de 72 horas y QC en sitio.',
    caseCategories: 'Categorías de casos',
    allProjects: 'Todos los proyectos',
    projectProof: 'Prueba de proyecto',
    proofTitle: 'Fotos reales y detalles verificados.',
    proofText: 'Las páginas de casos deben mostrar escenas reales, configuración de producto y requisitos de instalación.',
    resources: 'Recursos',
    downloadCenter: 'Centro de descargas',
    guide: 'Guía de pantallas LED',
    pitchGuide: 'Guía de pixel pitch',
    aioTitle: 'Responder preguntas de compradores con claridad.',
    aioText: 'Respuestas breves, tablas y FAQ ayudan a Google AI Overview y Perplexity a entender HAFOND.'
  }
};

export const homeTranslations = {
  en: englishHome,
  es: spanishHome,
  fr: {
    ...englishHome,
    nav: { ...englishHome.nav, home: 'Accueil', products: 'Produits', solutions: 'Solutions', about: 'Entreprise', factory: 'Usine', cases: 'Cas', resources: 'Ressources', contact: 'Contact' },
    hero: {
      ...englishHome.hero,
      title: 'Fabricant d’écrans LED à Shenzhen pour acheteurs internationaux',
      text: 'HAFOND fabrique des solutions LED personnalisées pour intérieur, extérieur, location et projets créatifs, avec R&D interne, assemblage SMT, test de vieillissement de 72 heures et contrôle qualité final.'
    },
    cta: { ...englishHome.cta, quote: 'Demander un devis', whatsapp: 'WhatsApp', catalog: 'Télécharger le catalogue' }
  },
  de: {
    ...englishHome,
    nav: { ...englishHome.nav, home: 'Start', products: 'Produkte', solutions: 'Lösungen', about: 'Unternehmen', factory: 'Fabrik', cases: 'Projekte', resources: 'Ressourcen', contact: 'Kontakt' },
    hero: {
      ...englishHome.hero,
      title: 'LED-Display-Hersteller aus Shenzhen für globale Projektkäufer',
      text: 'HAFOND fertigt kundenspezifische LED-Lösungen für Indoor-, Outdoor-, Rental- und kreative Projekte mit eigener F&E, SMT-Montage, 72-Stunden-Alterungstest und Endkontrolle.'
    },
    cta: { ...englishHome.cta, quote: 'Angebot anfragen', whatsapp: 'WhatsApp', catalog: 'Katalog herunterladen' }
  },
  ru: {
    ...englishHome,
    nav: { ...englishHome.nav, home: 'Главная', products: 'Продукты', solutions: 'Решения', about: 'О компании', factory: 'Завод', cases: 'Проекты', resources: 'Ресурсы', contact: 'Контакты' },
    hero: {
      ...englishHome.hero,
      title: 'Производитель LED-экранов в Шэньчжэне для международных проектов',
      text: 'HAFOND производит индивидуальные LED-решения для indoor, outdoor, rental и креативных проектов с собственной R&D, SMT-сборкой, 72-часовым тестом старения и финальным QC.'
    },
    cta: { ...englishHome.cta, quote: 'Получить расчет', whatsapp: 'WhatsApp', catalog: 'Скачать каталог' }
  },
  pt: {
    ...englishHome,
    nav: { ...englishHome.nav, home: 'Início', products: 'Produtos', solutions: 'Soluções', about: 'Empresa', factory: 'Fábrica', cases: 'Casos', resources: 'Recursos', contact: 'Contato' },
    hero: {
      ...englishHome.hero,
      title: 'Fabricante de telas LED em Shenzhen para compradores globais',
      text: 'A HAFOND fabrica soluções LED personalizadas para interior, exterior, locação e projetos criativos, com P&D interno, montagem SMT, teste de envelhecimento de 72 horas e QC final.'
    },
    cta: { ...englishHome.cta, quote: 'Solicitar cotação', whatsapp: 'WhatsApp', catalog: 'Baixar catálogo' }
  }
};

const localizedShared = {
  fr: {
    sections: {
      products: { title: 'Catégories de produits selon la demande du projet', text: 'Les produits sont organisés selon les besoins réels des acheteurs : extérieur fixe, créatif sur mesure, fine pitch, indoor SMD et location.' },
      solutions: { title: 'Solutions LED pour acheteurs internationaux', text: 'Chaque scénario aide le client à identifier rapidement le type d’écran, l’environnement d’installation et la configuration adaptée.' },
      factory: { title: 'Crédibilité usine pour sélectionner un fournisseur', text: 'HAFOND présente des preuves de fabrication : usine à Shenzhen, production interne, test de vieillissement 72 heures, QC final et documents d’exportation.' },
      cases: { title: 'Marchés cibles et orientation des cas', text: 'Contenu préparé pour le Moyen-Orient, l’Amérique du Sud, l’Europe et d’autres marchés clés.' },
      about: { title: 'Support projet, pas seulement vente catalogue', text: 'HAFOND aide les acheteurs avec sélection produit, plan caisson, confirmation technique, guide d’installation à distance et pièces de rechange.' },
      faq: { title: 'Questions d’acheteurs avec réponses claires', text: 'Des réponses courtes aident Google, Perplexity et les moteurs IA à comprendre HAFOND correctement.' },
      inquiry: { title: 'Envoyez les exigences de votre projet LED', text: 'Le formulaire collecte les informations B2B nécessaires pour préparer un devis précis et répondre rapidement.' }
    },
    products: [
      { title: 'Écran LED extérieur fixe', tag: 'Produit principal', image: '/assets/generated/outdoor-fixed-installation.png', detail: 'Séries FOC, FOE, FOQ, FOS et FSS pour DOOH, projets municipaux, stades, routes et façades.', specs: ['P2.97-P10', '4500-7000 nits', 'Protection IP65', 'Caisson aluminium'] },
      { title: 'Écran LED créatif et personnalisé', tag: 'Différenciation', image: '/assets/generated/creative-custom-mall.png', detail: 'Forme, taille, structure et branding personnalisés pour sphères, posters, transparents, planchers LED et projets iconiques.', specs: ['Fabrication sur mesure', 'Activation de marque', 'Protection GOB', 'Retail landmark'] },
      { title: 'Écran LED indoor fine pitch COB/GOB', tag: 'Haute valeur', image: '/assets/generated/indoor-fine-pitch-control-room.png', detail: 'Séries FIA, FIB, FIC et FID pour salles de réunion, centres de contrôle, showrooms et studios.', specs: ['P1.25-P2.5', '3840Hz', 'Maintenance avant', 'Contraste 5000:1'] },
      { title: 'Écran LED indoor SMD', tag: 'Entrée / trafic', image: '/assets/generated/creative-custom-mall.png', detail: 'Solutions indoor P2-P5 pour commerce, retail, hôtels et signalétique.', specs: ['P2-P5', 'Livraison 20-25 jours', 'CE & RoHS', 'Affichage commercial'] },
      { title: 'Écran LED de location', tag: 'Catégorie support', image: '/assets/banners/3.jpg', detail: 'Caissons indoor et outdoor pour sociétés AV, salons, concerts et événements.', specs: ['500x500mm', 'Caisson 7.5kg', 'Verrou rapide', 'Option courbe'] }
    ],
    solutions: [
      ['DOOH et publicité extérieure', 'Écrans LED haute luminosité pour médias urbains.', '/assets/generated/hero-outdoor-facade.png'],
      ['Stades et sites sportifs', 'Planification LED fixe et périmétrique pour haute visibilité.', '/assets/generated/outdoor-fixed-installation.png'],
      ['Retail et affichage commercial', 'Écrans créatifs, transparents et indoor pour marques et vitrines.', '/assets/generated/creative-custom-mall.png'],
      ['Entreprise et conférence', 'Murs LED fine pitch COB/GOB pour salles de réunion.', '/assets/generated/indoor-fine-pitch-control-room.png'],
      ['Scène, événements et location', 'Caissons rapides pour concerts, salons et prestataires AV.', '/assets/banners/3.jpg'],
      ['Municipal et smart city', 'Écrans outdoor fiables pour information publique.', '/assets/banners/6.jpg']
    ],
    advantages: [['Fabrication personnalisée', 'Taille, forme, luminosité et branding adaptés au projet.'], ['Contrôle qualité interne', 'R&D, SMT, intégration, test 72 heures et QC final en usine.'], ['Support projet', 'Conseil avant-vente, consultation technique, installation à distance et pièces.'], ['Fabricant, pas trading company', 'HAFOND vise les acheteurs recherchant stabilité et coopération long terme.']],
    cases: [['Projets DOOH extérieurs', 'Opportunités billboard au Moyen-Orient et en Amérique du Sud.'], ['Stades et municipal', 'Contenu pour projets publics et sportifs.'], ['Retail créatif', 'Formats LED sur mesure pour marques.']],
    faqs: [['HAFOND est-elle une société de trading ?', 'Non. HAFOND est un fabricant LED à Shenzhen avec R&D, SMT, test de vieillissement et QC internes.'], ['Quels acheteurs conviennent le mieux ?', 'Intégrateurs, entrepreneurs, distributeurs LED, opérateurs DOOH et sociétés AV.'], ['Quelles informations envoyer ?', 'Pays, produit, application, surface, distance de vue et délai.'], ['HAFOND soutient-elle les projets personnalisés ?', 'Oui. Taille, forme, luminosité, structure et branding peuvent être discutés.']],
    footer: { text: 'Fabricant d’écrans LED à Shenzhen depuis 2014 pour acheteurs internationaux.', products: 'Produits', quickLinks: 'Liens rapides', contact: 'Contact', faqResources: 'FAQ / Ressources' }
  },
  de: {
    sections: {
      products: { title: 'Produktkategorien nach Projektbedarf', text: 'Die Produkte folgen dem realen Käuferbedarf: Outdoor Fixed, kreative Sonderlösungen, Fine Pitch, Indoor SMD und Rental.' },
      solutions: { title: 'LED-Lösungen für internationale Käufer', text: 'Jedes Szenario hilft Kunden, Displaytyp, Installationsumgebung und passende Konfiguration schnell zu verstehen.' },
      factory: { title: 'Fabriknachweis für Lieferantenauswahl', text: 'HAFOND zeigt Fertigungsnachweise: Shenzhen-Fabrik, interne Produktion, 72-Stunden-Aging-Test, End-QC und Exportdokumente.' },
      cases: { title: 'Zielmärkte und Projektbeispiele', text: 'Inhalte für Nahost, Südamerika, Europa und weitere Schlüsselmärkte.' },
      about: { title: 'Projektunterstützung statt nur Katalogverkauf', text: 'HAFOND unterstützt Produktauswahl, Gehäuseplanung, technische Klärung, Remote-Installation und Ersatzteile.' },
      faq: { title: 'Käuferfragen klar beantwortet', text: 'Kurze Antworten helfen Google, Perplexity und KI-Suchmaschinen, HAFOND richtig zu verstehen.' },
      inquiry: { title: 'Senden Sie Ihre LED-Projektanforderungen', text: 'Das Formular sammelt die nötigen B2B-Daten für ein präzises Angebot und schnelle Antwort.' }
    },
    products: [
      { title: 'Fest installiertes Outdoor-LED-Display', tag: 'Hauptprodukt', image: '/assets/generated/outdoor-fixed-installation.png', detail: 'FOC, FOE, FOQ, FOS und FSS für DOOH, kommunale Projekte, Stadien, Straßen und Fassaden.', specs: ['P2.97-P10', '4500-7000 nits', 'IP65 Schutz', 'Aluminiumgehäuse'] },
      { title: 'Kreatives und kundenspezifisches LED-Display', tag: 'Differenzierung', image: '/assets/generated/creative-custom-mall.png', detail: 'Form, Größe, Struktur und Branding für Kugeln, Poster, transparente Displays und Sonderformen.', specs: ['Sonderfertigung', 'Markenaktivierung', 'GOB Schutz', 'Retail landmark'] },
      { title: 'Indoor Fine Pitch COB/GOB LED', tag: 'Hoher Wert', image: '/assets/generated/indoor-fine-pitch-control-room.png', detail: 'FIA, FIB, FIC und FID für Meetingräume, Kontrollzentren, Showrooms und Studios.', specs: ['P1.25-P2.5', '3840Hz', 'Frontwartung', 'Kontrast 5000:1'] },
      { title: 'Indoor SMD LED-Display', tag: 'Einstieg / Traffic', image: '/assets/generated/creative-custom-mall.png', detail: 'Kosteneffiziente P2-P5 Indoor-Lösungen für Handel, Hotels und Signage.', specs: ['P2-P5', '20-25 Tage Lieferung', 'CE & RoHS', 'Commercial Display'] },
      { title: 'Rental LED Display', tag: 'Support-Kategorie', image: '/assets/banners/3.jpg', detail: 'Indoor- und Outdoor-Rental-Cabinets für AV-Firmen, Messen, Konzerte und Events.', specs: ['500x500mm', '7.5kg Cabinet', 'Fast Lock', 'Kurvenoption'] }
    ],
    solutions: [['DOOH und Außenwerbung', 'Helle LED-Billboards für Stadtwerbung.', '/assets/generated/hero-outdoor-facade.png'], ['Sportstätten und Stadien', 'Outdoor Fixed und Perimeter LED Planung.', '/assets/generated/outdoor-fixed-installation.png'], ['Retail und Commercial Display', 'Kreative, transparente und Indoor-Screens für Marken.', '/assets/generated/creative-custom-mall.png'], ['Corporate und Konferenz', 'Fine Pitch LED-Wände für Meetingräume.', '/assets/generated/indoor-fine-pitch-control-room.png'], ['Bühne, Events und Rental', 'Fast-Lock Cabinets für Konzerte und AV-Firmen.', '/assets/banners/3.jpg'], ['Municipal und Smart City', 'Zuverlässige Outdoor-Displays für öffentliche Information.', '/assets/banners/6.jpg']],
    advantages: [['Kundenspezifische Fertigung', 'Gehäusegröße, Form, Helligkeit und Branding nach Projektbedarf.'], ['Interne Qualitätskontrolle', 'R&D, SMT, Integration, 72-Stunden-Test und End-QC im Werk.'], ['Projektunterstützung', 'Pre-Sales Design, technische Beratung, Remote-Installation und Ersatzteile.'], ['Hersteller, kein Händler', 'HAFOND ist für langfristige Projektkäufer positioniert.']],
    cases: [['Outdoor DOOH Projekte', 'Billboard-Chancen in Nahost und Südamerika.'], ['Stadien und kommunale Displays', 'Inhalte für öffentliche und Sportprojekte.'], ['Kreative Retail-Landmarks', 'Sonderformate für markenorientierte Käufer.']],
    faqs: [['Ist HAFOND ein Handelsunternehmen?', 'Nein. HAFOND ist ein LED-Display-Hersteller in Shenzhen mit interner R&D, SMT, Aging-Test und QC.'], ['Welche Käufer passen am besten?', 'Integratoren, Bauunternehmer, LED-Distributoren, DOOH-Betreiber und AV-Rental-Firmen.'], ['Welche Daten soll ich zuerst senden?', 'Land, Produkttyp, Anwendung, Fläche, Betrachtungsabstand und Termin.'], ['Unterstützt HAFOND Custom-Projekte?', 'Ja. Gehäusegröße, Form, Helligkeit, Struktur und Branding können angepasst werden.']],
    footer: { text: 'LED-Display-Hersteller aus Shenzhen seit 2014 für internationale Projektkäufer.', products: 'Produkte', quickLinks: 'Schnelllinks', contact: 'Kontakt', faqResources: 'FAQ / Ressourcen' }
  },
  ru: {
    sections: {
      products: { title: 'Категории продуктов по потребностям проекта', text: 'Продукты организованы по реальным запросам покупателей: outdoor fixed, custom, fine pitch, indoor SMD и rental.' },
      solutions: { title: 'LED-решения для международных покупателей', text: 'Каждый сценарий помогает быстро понять тип экрана, условия установки и конфигурацию.' },
      factory: { title: 'Доверие к заводу для выбора поставщика', text: 'HAFOND показывает производство в Шэньчжэне, внутренний процесс, 72-часовой тест, финальный QC и экспортные документы.' },
      cases: { title: 'Целевые рынки и кейсы', text: 'Контент подготовлен для Ближнего Востока, Южной Америки, Европы и других ключевых рынков.' },
      about: { title: 'Проектная поддержка, не только каталог', text: 'HAFOND помогает с выбором продукта, планом кабинетов, техническим подтверждением, удаленной установкой и запчастями.' },
      faq: { title: 'Вопросы покупателей с ясными ответами', text: 'Короткие ответы помогают Google, Perplexity и AI-поиску правильно понимать HAFOND.' },
      inquiry: { title: 'Отправьте требования к LED-проекту', text: 'Форма собирает B2B-данные для точного расчета и быстрого ответа.' }
    },
    products: [
      { title: 'Стационарный уличный LED-экран', tag: 'Основной продукт', image: '/assets/generated/outdoor-fixed-installation.png', detail: 'Серии FOC, FOE, FOQ, FOS и FSS для DOOH, муниципальных проектов, стадионов, дорог и фасадов.', specs: ['P2.97-P10', '4500-7000 nits', 'IP65 защита', 'Алюминиевый кабинет'] },
      { title: 'Креативный и индивидуальный LED-экран', tag: 'Дифференциация', image: '/assets/generated/creative-custom-mall.png', detail: 'Индивидуальная форма, размер, структура и branding для сфер, posters, transparent и спецпроектов.', specs: ['Custom производство', 'Активация бренда', 'GOB защита', 'Retail landmark'] },
      { title: 'Indoor Fine Pitch COB/GOB LED', tag: 'Высокая ценность', image: '/assets/generated/indoor-fine-pitch-control-room.png', detail: 'Серии FIA, FIB, FIC и FID для переговорных, центров управления, шоурумов и студий.', specs: ['P1.25-P2.5', '3840Hz', 'Front service', 'Контраст 5000:1'] },
      { title: 'Indoor SMD LED-экран', tag: 'Входной продукт', image: '/assets/generated/creative-custom-mall.png', detail: 'Экономичные indoor решения P2-P5 для торговли, отелей и signage.', specs: ['P2-P5', '20-25 дней', 'CE & RoHS', 'Commercial display'] },
      { title: 'Rental LED-экран', tag: 'Поддерживающая категория', image: '/assets/banners/3.jpg', detail: 'Indoor и outdoor rental cabinets для AV-компаний, выставок, концертов и событий.', specs: ['500x500mm', '7.5kg cabinet', 'Fast lock', 'Curve option'] }
    ],
    solutions: [['DOOH и наружная реклама', 'Яркие LED-билборды для городских медиа.', '/assets/generated/hero-outdoor-facade.png'], ['Спорт и стадионы', 'Планирование outdoor fixed и perimeter LED.', '/assets/generated/outdoor-fixed-installation.png'], ['Retail и коммерческие дисплеи', 'Креативные, transparent и indoor экраны для брендов.', '/assets/generated/creative-custom-mall.png'], ['Корпоративные и конференции', 'Fine pitch LED walls для переговорных.', '/assets/generated/indoor-fine-pitch-control-room.png'], ['Сцена, события и rental', 'Fast-lock cabinets для концертов и AV-компаний.', '/assets/banners/3.jpg'], ['Муниципальные и smart city', 'Надежные outdoor дисплеи для общественной информации.', '/assets/banners/6.jpg']],
    advantages: [['Custom производство', 'Размер, форма, яркость и branding под требования проекта.'], ['Внутренний контроль качества', 'R&D, SMT, интеграция, 72-часовой тест и финальный QC на заводе.'], ['Проектная поддержка', 'Pre-sales дизайн, техническая консультация, remote install и запасные части.'], ['Производитель, не торговая компания', 'HAFOND ориентирован на стабильность и долгосрочное сотрудничество.']],
    cases: [['Outdoor DOOH проекты', 'Возможности billboard на Ближнем Востоке и в Южной Америке.'], ['Стадионы и муниципальные дисплеи', 'Контент для публичных и спортивных проектов.'], ['Креативный retail', 'Custom LED форматы для брендов.']],
    faqs: [['HAFOND торговая компания?', 'Нет. HAFOND — производитель LED-экранов в Шэньчжэне с R&D, SMT, aging test и QC.'], ['Кому подходит HAFOND?', 'Интеграторам, подрядчикам, LED-дистрибьюторам, DOOH-операторам и AV rental компаниям.'], ['Что отправить сначала?', 'Страну, продукт, применение, площадь, дистанцию просмотра и срок.'], ['Поддерживает ли HAFOND custom проекты?', 'Да. Размер, форма, яркость, структура и branding обсуждаются индивидуально.']],
    footer: { text: 'Производитель LED-экранов в Шэньчжэне с 2014 года для международных проектов.', products: 'Продукты', quickLinks: 'Быстрые ссылки', contact: 'Контакты', faqResources: 'FAQ / Ресурсы' }
  },
  pt: {
    sections: {
      products: { title: 'Categorias de produtos por demanda do projeto', text: 'Produtos organizados por necessidade real: outdoor fixo, custom criativo, fine pitch, indoor SMD e locação.' },
      solutions: { title: 'Soluções LED para compradores internacionais', text: 'Cada cenário ajuda o cliente a identificar tipo de tela, ambiente de instalação e configuração adequada.' },
      factory: { title: 'Credibilidade de fábrica para seleção de fornecedor', text: 'A HAFOND mostra fábrica em Shenzhen, produção interna, teste de 72 horas, QC final e documentos de exportação.' },
      cases: { title: 'Mercados-alvo e direção de casos', text: 'Conteúdo preparado para Oriente Médio, América do Sul, Europa e outros mercados-chave.' },
      about: { title: 'Suporte de projeto, não só venda por catálogo', text: 'A HAFOND apoia seleção de produto, plano de gabinete, confirmação técnica, instalação remota e peças.' },
      faq: { title: 'Perguntas de compradores respondidas claramente', text: 'Respostas curtas ajudam Google, Perplexity e mecanismos de IA a entender a HAFOND.' },
      inquiry: { title: 'Envie os requisitos do seu projeto LED', text: 'O formulário coleta dados B2B para preparar cotação precisa e resposta rápida.' }
    },
    products: [
      { title: 'Tela LED externa fixa', tag: 'Produto principal', image: '/assets/generated/outdoor-fixed-installation.png', detail: 'Séries FOC, FOE, FOQ, FOS e FSS para DOOH, municipal, estádios, estradas e fachadas.', specs: ['P2.97-P10', '4500-7000 nits', 'Proteção IP65', 'Gabinete alumínio'] },
      { title: 'Tela LED criativa e personalizada', tag: 'Diferenciação', image: '/assets/generated/creative-custom-mall.png', detail: 'Forma, tamanho, estrutura e branding personalizados para esfera, poster, transparente, piso LED e projetos icônicos.', specs: ['Fabricação custom', 'Ativação de marca', 'Proteção GOB', 'Retail landmark'] },
      { title: 'Tela LED indoor fine pitch COB/GOB', tag: 'Alto valor', image: '/assets/generated/indoor-fine-pitch-control-room.png', detail: 'Séries FIA, FIB, FIC e FID para salas, centros de controle, showrooms e estúdios.', specs: ['P1.25-P2.5', '3840Hz', 'Manutenção frontal', 'Contraste 5000:1'] },
      { title: 'Tela LED indoor SMD', tag: 'Entrada / tráfego', image: '/assets/generated/creative-custom-mall.png', detail: 'Soluções indoor P2-P5 para comércio, retail, hotéis e sinalização.', specs: ['P2-P5', '20-25 dias', 'CE & RoHS', 'Display comercial'] },
      { title: 'Tela LED de locação', tag: 'Categoria suporte', image: '/assets/banners/3.jpg', detail: 'Gabinetes indoor e outdoor para AV, exposições, shows e eventos.', specs: ['500x500mm', 'Gabinete 7.5kg', 'Fast lock', 'Opção curva'] }
    ],
    solutions: [['DOOH e publicidade externa', 'Billboards LED de alto brilho para mídia urbana.', '/assets/generated/hero-outdoor-facade.png'], ['Esportes e estádios', 'Planejamento de LED fixo e perimetral.', '/assets/generated/outdoor-fixed-installation.png'], ['Retail e display comercial', 'Telas criativas, transparentes e indoor para marcas.', '/assets/generated/creative-custom-mall.png'], ['Corporativo e conferência', 'LED walls fine pitch para salas.', '/assets/generated/indoor-fine-pitch-control-room.png'], ['Palco, eventos e locação', 'Gabinetes fast-lock para shows e AV.', '/assets/banners/3.jpg'], ['Municipal e smart city', 'Displays outdoor confiáveis para informação pública.', '/assets/banners/6.jpg']],
    advantages: [['Fabricação personalizada', 'Tamanho, forma, brilho e branding ajustados ao projeto.'], ['Controle de qualidade interno', 'P&D, SMT, integração, teste 72 horas e QC final na fábrica.'], ['Suporte de projeto', 'Design pré-venda, consultoria técnica, instalação remota e peças.'], ['Fabricante, não trading', 'A HAFOND atende compradores que valorizam estabilidade e cooperação longa.']],
    cases: [['Projetos DOOH externos', 'Oportunidades de billboard no Oriente Médio e América do Sul.'], ['Estádios e municipal', 'Conteúdo para projetos públicos e esportivos.'], ['Retail criativo', 'Formatos LED custom para compradores de marca.']],
    faqs: [['A HAFOND é trading?', 'Não. A HAFOND é fabricante de telas LED em Shenzhen com P&D, SMT, teste de envelhecimento e QC internos.'], ['Quais compradores combinam melhor?', 'Integradores, contratistas, distribuidores LED, operadores DOOH e empresas AV.'], ['Quais dados enviar primeiro?', 'País, produto, aplicação, área, distância de visualização e prazo.'], ['A HAFOND apoia projetos custom?', 'Sim. Tamanho, forma, brilho, estrutura e branding podem ser discutidos.']],
    footer: { text: 'Fabricante de telas LED em Shenzhen desde 2014 para compradores internacionais.', products: 'Produtos', quickLinks: 'Links rápidos', contact: 'Contato', faqResources: 'FAQ / Recursos' }
  }
};

for (const [locale, values] of Object.entries(localizedShared)) {
  Object.assign(homeTranslations[locale], values);
  homeTranslations[locale].mega = {
    ...homeTranslations[locale].mega,
    productCenter: values.footer.products,
    productTitle: values.sections.products.title,
    productText: values.sections.products.text,
    downloadText: values.sections.inquiry.text,
    solutionsTitle: values.sections.solutions.title,
    solutionsText: values.sections.solutions.text,
    company: values.footer.contact === 'Контакты' ? 'Компания' : homeTranslations[locale].mega.company,
    overview: values.sections.about.title,
    certifications: homeTranslations[locale].nav.factory,
    trustTitle: values.advantages[3][0],
    trustText: values.advantages[3][1],
    caseCategories: values.sections.cases.title,
    allProjects: values.footer.contact === 'Контакты' ? 'Все проекты' : homeTranslations[locale].mega.allProjects,
    projectProof: values.sections.cases.title,
    proofTitle: values.cases[0][0],
    proofText: values.cases[0][1],
    resources: values.footer.faqResources,
    downloadCenter: values.footer.contact === 'Контакты' ? 'Загрузки' : homeTranslations[locale].mega.downloadCenter,
    guide: values.footer.contact === 'Контакты' ? 'Руководство LED-экранов' : homeTranslations[locale].mega.guide,
    pitchGuide: values.footer.contact === 'Контакты' ? 'Руководство pixel pitch' : homeTranslations[locale].mega.pitchGuide,
    aioTitle: values.sections.faq.title,
    aioText: values.sections.faq.text
  };
}

Object.assign(homeTranslations.fr.cta, {
  quote: 'Demander un devis',
  whatsapp: 'WhatsApp',
  catalog: 'Télécharger le catalogue',
  datasheet: 'Besoin d’une fiche technique ?',
  sendScreen: 'Envoyer la taille de l’écran',
  outdoorQuote: 'Demander un devis extérieur',
  meetingRoom: 'Solution salle de réunion',
  projectAdvice: 'Demander conseil projet',
  discussProject: 'Discuter d’un projet similaire'
});
Object.assign(homeTranslations.fr.hero, {
  proof: ['Depuis 2014', 'Usine 3000+ m²', '70+ professionnels', 'Pas une société de trading']
});
Object.assign(homeTranslations.fr.mega, {
  company: 'Entreprise',
  team: 'Équipe et direction',
  why: 'Pourquoi HAFOND',
  trustSignal: 'Signal de confiance',
  allProjects: 'Tous les projets',
  downloadCenter: 'Centre de téléchargement',
  guide: 'Guide écran LED',
  pitchGuide: 'Guide pixel pitch'
});

Object.assign(homeTranslations.de.cta, {
  quote: 'Angebot anfragen',
  whatsapp: 'WhatsApp',
  catalog: 'Katalog herunterladen',
  datasheet: 'Benötigen Sie ein Datenblatt?',
  sendScreen: 'Bildschirmgröße senden',
  outdoorQuote: 'Outdoor-Angebot anfragen',
  meetingRoom: 'Meetingraum-Lösung',
  projectAdvice: 'Projektberatung anfragen',
  discussProject: 'Ähnliches Projekt besprechen'
});
Object.assign(homeTranslations.de.hero, {
  proof: ['Seit 2014', '3000+ m² Fabrik', '70+ Fachkräfte', 'Kein Handelsunternehmen']
});
Object.assign(homeTranslations.de.mega, {
  company: 'Unternehmen',
  team: 'Team und Management',
  why: 'Warum HAFOND',
  trustSignal: 'Vertrauenssignal',
  allProjects: 'Alle Projekte',
  downloadCenter: 'Download-Center',
  guide: 'LED-Screen-Guide',
  pitchGuide: 'Pixel-Pitch-Guide'
});

Object.assign(homeTranslations.ru.cta, {
  quote: 'Получить расчет',
  whatsapp: 'WhatsApp',
  catalog: 'Скачать каталог',
  datasheet: 'Нужна спецификация?',
  sendScreen: 'Отправить размер экрана',
  outdoorQuote: 'Запросить outdoor расчет',
  meetingRoom: 'Решение для переговорной',
  projectAdvice: 'Получить консультацию',
  discussProject: 'Обсудить похожий проект'
});
Object.assign(homeTranslations.ru.hero, {
  proof: ['С 2014 года', 'Фабрика 3000+ м²', '70+ специалистов', 'Не торговая компания']
});
Object.assign(homeTranslations.ru.mega, {
  team: 'Команда и управление',
  why: 'Почему HAFOND',
  trustSignal: 'Сигнал доверия'
});

Object.assign(homeTranslations.pt.cta, {
  quote: 'Solicitar cotação',
  whatsapp: 'WhatsApp',
  catalog: 'Baixar catálogo',
  datasheet: 'Precisa de ficha técnica?',
  sendScreen: 'Enviar tamanho da tela',
  outdoorQuote: 'Solicitar cotação outdoor',
  meetingRoom: 'Solução para sala de reunião',
  projectAdvice: 'Pedir consultoria de projeto',
  discussProject: 'Discutir projeto similar'
});
Object.assign(homeTranslations.pt.hero, {
  proof: ['Desde 2014', 'Fábrica 3000+ m²', '70+ profissionais', 'Não somos trading']
});
Object.assign(homeTranslations.pt.mega, {
  company: 'Empresa',
  team: 'Equipe e gestão',
  why: 'Por que HAFOND',
  trustSignal: 'Sinal de confiança',
  allProjects: 'Todos os projetos',
  downloadCenter: 'Centro de downloads',
  guide: 'Guia de telas LED',
  pitchGuide: 'Guia de pixel pitch'
});
