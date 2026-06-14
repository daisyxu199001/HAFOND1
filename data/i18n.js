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
