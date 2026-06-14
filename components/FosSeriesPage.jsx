'use client';

import Image from 'next/image';
import InquiryForm from './InquiryForm';
import { ArrowIcon, CheckIcon, ShieldIcon } from './Icons';
import LanguageSwitcher from './LanguageSwitcher';
import { homeTranslations } from '../data/i18n';

const whatsappUrl = 'https://wa.me/8618824278011?text=Hello%2C%20I%20am%20interested%20in%20your%20FOS%20Series%20outdoor%20LED%20display.%20Please%20send%20me%20more%20details.';
const supportedLanguages = ['en', 'es', 'fr', 'de', 'ru', 'pt'];

const english = {
  kicker: 'Outdoor Fixed LED Display',
  title: 'FOS Series Outdoor Fixed LED Display',
  intro: 'Engineered for outdoor advertising, building facade and municipal display projects that need flexible cabinet sizes, fast maintenance and reliable outdoor protection.',
  keyLines: ['Pixel Pitch: P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10', 'Cabinet Size: 320x480 / 320x640 / 640x480 / 640x640 / 960x480mm'],
  proof: ['IP65 / IP66 option', '40% energy saving option', '4500-7000 nits', 'Front & rear service'],
  anchors: ['Overview', 'Details', 'Specifications', 'Applications', 'Downloads', 'Inquiry'],
  cta: { quote: 'Get a Quote', whatsapp: 'WhatsApp Us', datasheet: 'Download Datasheet', catalog: 'LED Screen Catalog', customCatalog: 'Custom LED Catalog', guide: 'Request Installation Guide' },
  overview: {
    title: 'Outdoor Fixed LED Display for Project Buyers',
    text: 'FOS Series presents the product fit, cabinet dimensions, maintenance method and inquiry actions clearly, then gives buyers the technical proof they need to shortlist an outdoor LED display supplier.',
    metrics: [['Pixel Pitch', 'P2.97-P10'], ['Cabinet Options', '5 compatible sizes'], ['Protection', 'Outdoor IP65 / IP66 option'], ['Best Fit', 'DOOH, facade, municipal']]
  },
  details: [
    ['01', 'Fast Installation & Quick Maintenance', 'Fast-operation cabinet locks and quick power-cord connection make installation and maintenance more efficient for outdoor fixed projects.', ['Quick cabinet lock', 'Tool-less module service', 'Quick power cord connection', 'Front and rear service planning']],
    ['02', 'Diverse Cabinet Sizes, Various Options', 'Multiple standard cabinet sizes are compatible and can be combined to fit different screen proportions and engineering structures.', ['320x480mm', '320x640mm', '640x480mm', '640x640mm', '960x480mm']],
    ['03', 'Built-in Wiring Design, Tidy Looking & Space Saving', 'The hidden wiring layout improves rear appearance, saves installation space and supports cleaner maintenance planning.', ['Hidden wiring design', 'Clean rear structure', 'Space-saving cabinet layout', 'Easier maintenance']],
    ['04', '45° Bevel Edge Cabinet Option', 'Optional 45° bevel edge cabinets can support L-shape and right-angle LED screen effects for building corners and creative outdoor displays.', ['45° bevel edge', 'L-shape screen effect', 'Right-angle display', 'Optional design']]
  ],
  specsHead: {
    title: 'Technical Specifications',
    text: 'Parameters are rendered as HTML content, not as an image, so buyers and search engines can read them clearly.',
    item: 'Item',
    spec: 'Specification'
  },
  specs: [
    ['Pixel Pitch', 'P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10'],
    ['Cabinet Size', '320x480mm / 320x640mm / 640x480mm / 640x640mm / 960x480mm'],
    ['Cabinet Material', 'Aluminum cabinet project configuration'],
    ['Brightness', '4500-7000 nits project range'],
    ['Protection', 'IP65 outdoor protection / IP66 project option'],
    ['Maintenance', 'Front and rear service planning'],
    ['Installation', 'Fixed installation'],
    ['Application', 'Outdoor advertising / DOOH / billboard / building facade']
  ],
  applicationsHead: { title: 'Applications', text: 'Connect each product page to application intent for SEO, AIO/GEO visibility and future paid traffic.' },
  applications: [
    ['Outdoor Billboard', 'High brightness for clear visibility under direct sunlight.', '/assets/generated/hero-outdoor-facade.png'],
    ['Roadside Advertising', 'Project-ready cabinet options for outdoor media networks.', '/assets/generated/outdoor-fixed-installation.png'],
    ['Shopping Mall Facade', 'Flexible cabinet sizing for commercial building displays.', '/assets/generated/creative-custom-mall.png'],
    ['Municipal Information', 'Reliable outdoor display planning for public information projects.', '/assets/generated/outdoor-fixed-installation.png']
  ],
  cases: {
    title: 'Related Case Study Slots',
    text: 'Related project examples help buyers compare similar outdoor billboard, facade and stadium display requirements before requesting a quotation.',
    items: ['Outdoor Billboard Project', 'Shopping Mall Facade Project', 'Stadium Perimeter Project'],
    itemText: 'HAFOND can match product model, pixel pitch, screen area and installation method to similar verified project scenarios.'
  },
  downloads: { title: 'Downloads', text: 'Give buyers quick access to the product catalog and future datasheet files after lightweight lead capture.' },
  inquiry: {
    title: 'Send Your Project Inquiry',
    text: 'Tell us screen size, viewing distance, installation environment and deadline. HAFOND will respond within 24 hours.',
    card: 'Contact Us on WhatsApp'
  }
};

const translations = {
  en: english,
  es: {
    kicker: 'Pantalla LED exterior fija',
    title: 'Pantalla LED exterior fija serie FOS',
    intro: 'Diseñada para publicidad exterior, fachadas de edificios y proyectos municipales que necesitan tamaños de gabinete flexibles, mantenimiento rápido y protección confiable para exterior.',
    keyLines: ['Pixel pitch: P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10', 'Tamaño de gabinete: 320x480 / 320x640 / 640x480 / 640x640 / 960x480mm'],
    proof: ['Opción IP65 / IP66', 'Opción de ahorro energético 40%', '4500-7000 nits', 'Servicio frontal y trasero'],
    anchors: ['Resumen', 'Detalles', 'Especificaciones', 'Aplicaciones', 'Descargas', 'Consulta'],
    cta: { quote: 'Solicitar cotización', whatsapp: 'WhatsApp', datasheet: 'Descargar ficha técnica', catalog: 'Catálogo de pantallas LED', customCatalog: 'Catálogo LED personalizado', guide: 'Solicitar guía de instalación' },
    overview: {
      title: 'Pantalla LED exterior fija para compradores de proyectos',
      text: 'La serie FOS muestra claramente ajuste de producto, dimensiones de gabinete, mantenimiento y acciones de consulta para que el comprador pueda evaluar al proveedor con rapidez.',
      metrics: [['Pixel pitch', 'P2.97-P10'], ['Opciones de gabinete', '5 tamaños compatibles'], ['Protección', 'IP65 exterior / opción IP66'], ['Uso ideal', 'DOOH, fachada, municipal']]
    },
    details: [
      ['01', 'Instalación rápida y mantenimiento ágil', 'Cierres rápidos de gabinete y conexión de energía eficiente facilitan la instalación y el mantenimiento en proyectos exteriores fijos.', ['Cierre rápido', 'Servicio de módulo sin herramientas', 'Conexión rápida de energía', 'Mantenimiento frontal y trasero']],
      ['02', 'Varios tamaños de gabinete', 'Diferentes tamaños estándar se pueden combinar para ajustarse a proporciones de pantalla y estructuras de ingeniería.', ['320x480mm', '320x640mm', '640x480mm', '640x640mm', '960x480mm']],
      ['03', 'Cableado integrado y apariencia limpia', 'El diseño de cableado oculto mejora la parte trasera, ahorra espacio y simplifica el mantenimiento.', ['Cableado oculto', 'Estructura trasera limpia', 'Diseño compacto', 'Mantenimiento más sencillo']],
      ['04', 'Opción de gabinete con borde biselado 45°', 'Los gabinetes opcionales con borde de 45° permiten pantallas LED en L y esquinas de edificios.', ['Borde biselado 45°', 'Efecto en forma de L', 'Pantalla en ángulo recto', 'Diseño opcional']]
    ],
    specsHead: { title: 'Especificaciones técnicas', text: 'Los parámetros se muestran como HTML para que compradores y buscadores puedan leerlos claramente.', item: 'Ítem', spec: 'Especificación' },
    specs: [
      ['Pixel pitch', 'P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10'],
      ['Tamaño de gabinete', '320x480mm / 320x640mm / 640x480mm / 640x640mm / 960x480mm'],
      ['Material de gabinete', 'Configuración de aluminio para proyectos'],
      ['Brillo', 'Rango de proyecto 4500-7000 nits'],
      ['Protección', 'IP65 exterior / opción IP66'],
      ['Mantenimiento', 'Planificación de servicio frontal y trasero'],
      ['Instalación', 'Instalación fija'],
      ['Aplicación', 'Publicidad exterior / DOOH / valla LED / fachada']
    ],
    applicationsHead: { title: 'Aplicaciones', text: 'Cada aplicación conecta el producto con una intención real de compra y cotización.' },
    applications: [
      ['Valla publicitaria exterior', 'Alto brillo para buena visibilidad bajo luz solar directa.', '/assets/generated/hero-outdoor-facade.png'],
      ['Publicidad en carretera', 'Opciones de gabinete listas para redes de medios exteriores.', '/assets/generated/outdoor-fixed-installation.png'],
      ['Fachada de centro comercial', 'Tamaños flexibles para pantallas en edificios comerciales.', '/assets/generated/creative-custom-mall.png'],
      ['Información municipal', 'Planificación confiable para pantallas públicas exteriores.', '/assets/generated/outdoor-fixed-installation.png']
    ],
    cases: { title: 'Espacios para casos relacionados', text: 'Los casos ayudan al comprador a comparar requisitos de vallas, fachadas y estadios antes de solicitar cotización.', items: ['Proyecto de valla exterior', 'Proyecto de fachada comercial', 'Proyecto perimetral de estadio'], itemText: 'HAFOND puede relacionar modelo, pixel pitch, área de pantalla e instalación con escenarios reales similares.' },
    downloads: { title: 'Descargas', text: 'Acceso rápido a catálogos y futuras fichas técnicas para compradores calificados.' },
    inquiry: { title: 'Envíe su consulta de proyecto', text: 'Indique tamaño de pantalla, distancia de visualización, entorno de instalación y fecha límite. HAFOND responderá dentro de 24 horas.', card: 'Contáctenos por WhatsApp' }
  }
};

translations.fr = {
  ...english,
  kicker: 'Écran LED extérieur fixe',
  title: 'Écran LED extérieur fixe série FOS',
  intro: 'Conçu pour la publicité extérieure, les façades et les projets municipaux nécessitant des formats de caisson flexibles, une maintenance rapide et une protection extérieure fiable.',
  cta: { quote: 'Demander un devis', whatsapp: 'WhatsApp', datasheet: 'Télécharger la fiche technique', catalog: 'Catalogue écrans LED', customCatalog: 'Catalogue LED personnalisé', guide: 'Demander le guide d’installation' },
  anchors: ['Aperçu', 'Détails', 'Spécifications', 'Applications', 'Téléchargements', 'Demande'],
  overview: { ...english.overview, title: 'Écran LED extérieur fixe pour acheteurs de projets', text: 'La série FOS présente clairement le produit, les dimensions de caisson, la maintenance et les actions de demande afin de faciliter la présélection du fournisseur.' },
  specsHead: { ...english.specsHead, title: 'Spécifications techniques', item: 'Élément', spec: 'Spécification' },
  applicationsHead: { title: 'Applications', text: 'Chaque application relie le produit à une intention d’achat concrète.' },
  inquiry: { title: 'Envoyer votre demande de projet', text: 'Indiquez la taille de l’écran, la distance de vue, l’environnement d’installation et le délai. HAFOND répond sous 24 heures.', card: 'Contactez-nous sur WhatsApp' }
};

translations.de = {
  ...english,
  kicker: 'Fest installiertes Outdoor-LED-Display',
  title: 'FOS Serie Outdoor Fixed LED Display',
  intro: 'Entwickelt für Außenwerbung, Gebäudefassaden und kommunale Projekte, die flexible Gehäusegrößen, schnelle Wartung und zuverlässigen Außenschutz benötigen.',
  cta: { quote: 'Angebot anfragen', whatsapp: 'WhatsApp', datasheet: 'Datenblatt herunterladen', catalog: 'LED-Screen-Katalog', customCatalog: 'Custom-LED-Katalog', guide: 'Installationsleitfaden anfragen' },
  anchors: ['Überblick', 'Details', 'Spezifikationen', 'Anwendungen', 'Downloads', 'Anfrage'],
  overview: { ...english.overview, title: 'Outdoor Fixed LED Display für Projektkäufer', text: 'Die FOS Serie zeigt Produktfit, Gehäusemaße, Wartungsmethode und Anfragewege klar für eine schnelle Lieferantenauswahl.' },
  specsHead: { ...english.specsHead, title: 'Technische Spezifikationen', item: 'Punkt', spec: 'Spezifikation' },
  applicationsHead: { title: 'Anwendungen', text: 'Jede Anwendung verbindet das Produkt mit einer konkreten Kaufabsicht.' },
  inquiry: { title: 'Projektanfrage senden', text: 'Teilen Sie Bildschirmgröße, Betrachtungsabstand, Installationsumgebung und Termin mit. HAFOND antwortet innerhalb von 24 Stunden.', card: 'Kontakt über WhatsApp' }
};

translations.ru = {
  ...english,
  kicker: 'Стационарный уличный LED-экран',
  title: 'Стационарный уличный LED-экран серии FOS',
  intro: 'Решение для наружной рекламы, фасадов зданий и муниципальных проектов, где нужны гибкие размеры кабинетов, быстрое обслуживание и надежная защита для улицы.',
  cta: { quote: 'Получить расчет', whatsapp: 'WhatsApp', datasheet: 'Скачать спецификацию', catalog: 'Каталог LED-экранов', customCatalog: 'Каталог custom LED', guide: 'Запросить руководство по установке' },
  anchors: ['Обзор', 'Детали', 'Параметры', 'Применение', 'Загрузки', 'Запрос'],
  overview: { ...english.overview, title: 'Уличный LED-экран для проектных покупателей', text: 'Серия FOS ясно показывает назначение продукта, размеры кабинетов, обслуживание и путь запроса для быстрой оценки поставщика.' },
  specsHead: { ...english.specsHead, title: 'Технические характеристики', item: 'Пункт', spec: 'Характеристика' },
  applicationsHead: { title: 'Применение', text: 'Каждая сфера применения связывает продукт с реальным запросом покупателя.' },
  inquiry: { title: 'Отправьте запрос по проекту', text: 'Укажите размер экрана, дистанцию просмотра, условия установки и сроки. HAFOND ответит в течение 24 часов.', card: 'Связаться через WhatsApp' }
};

translations.pt = {
  ...english,
  kicker: 'Tela LED externa fixa',
  title: 'Tela LED externa fixa série FOS',
  intro: 'Projetada para publicidade externa, fachadas e projetos municipais que exigem gabinetes flexíveis, manutenção rápida e proteção externa confiável.',
  cta: { quote: 'Solicitar cotação', whatsapp: 'WhatsApp', datasheet: 'Baixar ficha técnica', catalog: 'Catálogo de telas LED', customCatalog: 'Catálogo LED personalizado', guide: 'Solicitar guia de instalação' },
  anchors: ['Visão geral', 'Detalhes', 'Especificações', 'Aplicações', 'Downloads', 'Consulta'],
  overview: { ...english.overview, title: 'Tela LED externa fixa para compradores de projetos', text: 'A série FOS apresenta claramente aplicação, dimensões do gabinete, manutenção e caminhos de consulta para facilitar a seleção do fornecedor.' },
  specsHead: { ...english.specsHead, title: 'Especificações técnicas', item: 'Item', spec: 'Especificação' },
  applicationsHead: { title: 'Aplicações', text: 'Cada aplicação conecta o produto a uma intenção real de compra.' },
  inquiry: { title: 'Envie sua consulta de projeto', text: 'Informe tamanho da tela, distância de visualização, ambiente de instalação e prazo. A HAFOND responderá em até 24 horas.', card: 'Fale conosco pelo WhatsApp' }
};

Object.assign(translations.fr, {
  keyLines: ['Pixel pitch : P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10', 'Format caisson : 320x480 / 320x640 / 640x480 / 640x640 / 960x480mm'],
  proof: ['Option IP65 / IP66', 'Option économie d’énergie 40%', '4500-7000 nits', 'Service avant et arrière'],
  details: [
    ['01', 'Installation rapide et maintenance efficace', 'Les serrures rapides et la connexion d’alimentation facilitent l’installation et la maintenance des projets extérieurs fixes.', ['Serrure rapide', 'Service module sans outil', 'Connexion d’alimentation rapide', 'Maintenance avant et arrière']],
    ['02', 'Plusieurs formats de caisson', 'Plusieurs formats standards peuvent être combinés selon les proportions d’écran et les structures du projet.', ['320x480mm', '320x640mm', '640x480mm', '640x640mm', '960x480mm']],
    ['03', 'Câblage intégré et apparence propre', 'Le câblage caché améliore l’aspect arrière, économise l’espace et simplifie la maintenance.', ['Câblage caché', 'Structure arrière propre', 'Design compact', 'Maintenance plus simple']],
    ['04', 'Option caisson à bord biseauté 45°', 'Le bord biseauté 45° permet des écrans LED en L et des installations d’angle.', ['Bord biseauté 45°', 'Effet en L', 'Écran à angle droit', 'Option sur demande']]
  ],
  specs: [
    ['Pixel pitch', 'P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10'],
    ['Format caisson', '320x480mm / 320x640mm / 640x480mm / 640x640mm / 960x480mm'],
    ['Matériau', 'Configuration aluminium pour projets'],
    ['Luminosité', 'Plage projet 4500-7000 nits'],
    ['Protection', 'IP65 extérieur / option IP66'],
    ['Maintenance', 'Service avant et arrière'],
    ['Installation', 'Installation fixe'],
    ['Application', 'Publicité extérieure / DOOH / billboard / façade']
  ],
  applications: [
    ['Billboard extérieur', 'Haute luminosité pour visibilité en plein soleil.', '/assets/generated/hero-outdoor-facade.png'],
    ['Publicité routière', 'Caissons prêts pour réseaux média extérieurs.', '/assets/generated/outdoor-fixed-installation.png'],
    ['Façade de centre commercial', 'Formats flexibles pour bâtiments commerciaux.', '/assets/generated/creative-custom-mall.png'],
    ['Information municipale', 'Planification fiable pour affichage public extérieur.', '/assets/generated/outdoor-fixed-installation.png']
  ],
  cases: { title: 'Emplacements de cas liés', text: 'Les cas aident les acheteurs à comparer panneaux, façades et stades avant devis.', items: ['Projet billboard extérieur', 'Projet façade commerciale', 'Projet périmètre stade'], itemText: 'HAFOND peut relier modèle, pixel pitch, surface et installation à des scénarios réels similaires.' },
  downloads: { title: 'Téléchargements', text: 'Accès rapide aux catalogues et futures fiches techniques pour acheteurs qualifiés.' }
});

Object.assign(translations.de, {
  keyLines: ['Pixel Pitch: P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10', 'Gehäusegröße: 320x480 / 320x640 / 640x480 / 640x640 / 960x480mm'],
  proof: ['Option IP65 / IP66', '40% Energiesparoption', '4500-7000 nits', 'Front- und Rückservice'],
  details: [
    ['01', 'Schnelle Installation und Wartung', 'Schnellverschlüsse und einfache Stromverbindung machen Installation und Wartung effizienter.', ['Schnellverschluss', 'Werkzeugloser Modulservice', 'Schnelle Stromverbindung', 'Front- und Rückservice']],
    ['02', 'Verschiedene Gehäusegrößen', 'Mehrere Standardgrößen können für unterschiedliche Bildschirmproportionen kombiniert werden.', ['320x480mm', '320x640mm', '640x480mm', '640x640mm', '960x480mm']],
    ['03', 'Integrierte Verkabelung und saubere Optik', 'Verdeckte Verkabelung verbessert die Rückseite, spart Platz und vereinfacht die Wartung.', ['Verdeckte Verkabelung', 'Saubere Rückstruktur', 'Kompaktes Layout', 'Einfachere Wartung']],
    ['04', '45° abgeschrägte Gehäuseoption', 'Optionale 45° Gehäuse unterstützen L-Form und Eckinstallationen.', ['45° Abschrägung', 'L-Form-Effekt', 'Rechtwinkel-Display', 'Optionales Design']]
  ],
  specs: [
    ['Pixel Pitch', 'P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10'],
    ['Gehäusegröße', '320x480mm / 320x640mm / 640x480mm / 640x640mm / 960x480mm'],
    ['Gehäusematerial', 'Aluminium-Konfiguration für Projekte'],
    ['Helligkeit', 'Projektbereich 4500-7000 nits'],
    ['Schutz', 'Outdoor IP65 / Option IP66'],
    ['Wartung', 'Front- und Rückservice'],
    ['Installation', 'Festinstallation'],
    ['Anwendung', 'Außenwerbung / DOOH / Billboard / Fassade']
  ],
  applications: [
    ['Outdoor-Billboard', 'Hohe Helligkeit für direkte Sonneneinstrahlung.', '/assets/generated/hero-outdoor-facade.png'],
    ['Straßenwerbung', 'Projektbereite Gehäuse für Outdoor-Mediennetze.', '/assets/generated/outdoor-fixed-installation.png'],
    ['Shopping-Mall-Fassade', 'Flexible Größen für kommerzielle Fassaden.', '/assets/generated/creative-custom-mall.png'],
    ['Kommunale Information', 'Zuverlässige Planung für öffentliche Outdoor-Displays.', '/assets/generated/outdoor-fixed-installation.png']
  ],
  cases: { title: 'Verwandte Projektbeispiele', text: 'Projektbeispiele helfen beim Vergleich von Billboard-, Fassaden- und Stadionanforderungen.', items: ['Outdoor-Billboard-Projekt', 'Shopping-Mall-Fassade', 'Stadion-Perimeter-Projekt'], itemText: 'HAFOND kann Modell, Pixel Pitch, Fläche und Installation mit ähnlichen realen Szenarien abgleichen.' },
  downloads: { title: 'Downloads', text: 'Schneller Zugriff auf Kataloge und zukünftige Datenblätter für qualifizierte Käufer.' }
});

Object.assign(translations.ru, {
  keyLines: ['Pixel pitch: P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10', 'Размер кабинета: 320x480 / 320x640 / 640x480 / 640x640 / 960x480mm'],
  proof: ['Опция IP65 / IP66', 'Опция экономии энергии 40%', '4500-7000 nits', 'Обслуживание спереди и сзади'],
  details: [
    ['01', 'Быстрая установка и обслуживание', 'Быстрые замки кабинета и удобное питание повышают эффективность монтажа и обслуживания.', ['Быстрый замок', 'Обслуживание модуля без инструмента', 'Быстрое подключение питания', 'Передний и задний сервис']],
    ['02', 'Разные размеры кабинетов', 'Стандартные размеры можно комбинировать под разные пропорции экрана и конструкции.', ['320x480mm', '320x640mm', '640x480mm', '640x640mm', '960x480mm']],
    ['03', 'Встроенная проводка и аккуратный вид', 'Скрытая проводка улучшает внешний вид сзади, экономит место и упрощает обслуживание.', ['Скрытая проводка', 'Чистая задняя структура', 'Компактная компоновка', 'Простое обслуживание']],
    ['04', 'Опция кабинета с фаской 45°', 'Кабинеты с фаской 45° подходят для L-образных экранов и углов зданий.', ['Фаска 45°', 'L-образный эффект', 'Экран под прямым углом', 'Опциональный дизайн']]
  ],
  specs: [
    ['Pixel pitch', 'P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10'],
    ['Размер кабинета', '320x480mm / 320x640mm / 640x480mm / 640x640mm / 960x480mm'],
    ['Материал кабинета', 'Алюминиевая конфигурация для проектов'],
    ['Яркость', 'Диапазон 4500-7000 nits'],
    ['Защита', 'Outdoor IP65 / опция IP66'],
    ['Обслуживание', 'Передний и задний сервис'],
    ['Установка', 'Стационарная установка'],
    ['Применение', 'Наружная реклама / DOOH / billboard / фасад']
  ],
  applications: [
    ['Наружный billboard', 'Высокая яркость для видимости под солнцем.', '/assets/generated/hero-outdoor-facade.png'],
    ['Дорожная реклама', 'Готовые кабинеты для outdoor медиа-сетей.', '/assets/generated/outdoor-fixed-installation.png'],
    ['Фасад торгового центра', 'Гибкие размеры для коммерческих фасадов.', '/assets/generated/creative-custom-mall.png'],
    ['Муниципальная информация', 'Надежное планирование для общественных outdoor экранов.', '/assets/generated/outdoor-fixed-installation.png']
  ],
  cases: { title: 'Связанные проектные примеры', text: 'Примеры помогают сравнить требования billboard, фасадов и стадионов перед запросом цены.', items: ['Проект outdoor billboard', 'Проект фасада ТЦ', 'Проект периметра стадиона'], itemText: 'HAFOND может сопоставить модель, pixel pitch, площадь и установку с похожими реальными сценариями.' },
  downloads: { title: 'Загрузки', text: 'Быстрый доступ к каталогам и будущим спецификациям для квалифицированных покупателей.' }
});

Object.assign(translations.pt, {
  keyLines: ['Pixel pitch: P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10', 'Tamanho do gabinete: 320x480 / 320x640 / 640x480 / 640x640 / 960x480mm'],
  proof: ['Opção IP65 / IP66', 'Opção de economia 40%', '4500-7000 nits', 'Serviço frontal e traseiro'],
  details: [
    ['01', 'Instalação rápida e manutenção ágil', 'Travas rápidas e conexão de energia facilitam instalação e manutenção em projetos externos fixos.', ['Trava rápida', 'Serviço de módulo sem ferramentas', 'Conexão rápida de energia', 'Serviço frontal e traseiro']],
    ['02', 'Vários tamanhos de gabinete', 'Tamanhos padrão podem ser combinados para diferentes proporções de tela e estruturas.', ['320x480mm', '320x640mm', '640x480mm', '640x640mm', '960x480mm']],
    ['03', 'Fiação integrada e visual limpo', 'A fiação oculta melhora a parte traseira, economiza espaço e simplifica a manutenção.', ['Fiação oculta', 'Estrutura traseira limpa', 'Layout compacto', 'Manutenção mais simples']],
    ['04', 'Opção de gabinete com bisel 45°', 'Gabinetes opcionais com bisel 45° suportam telas em L e cantos de edifícios.', ['Bisel 45°', 'Efeito em L', 'Tela em ângulo reto', 'Design opcional']]
  ],
  specs: [
    ['Pixel pitch', 'P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10'],
    ['Tamanho do gabinete', '320x480mm / 320x640mm / 640x480mm / 640x640mm / 960x480mm'],
    ['Material do gabinete', 'Configuração em alumínio para projetos'],
    ['Brilho', 'Faixa de projeto 4500-7000 nits'],
    ['Proteção', 'IP65 externo / opção IP66'],
    ['Manutenção', 'Serviço frontal e traseiro'],
    ['Instalação', 'Instalação fixa'],
    ['Aplicação', 'Publicidade externa / DOOH / billboard / fachada']
  ],
  applications: [
    ['Outdoor billboard', 'Alto brilho para visibilidade sob luz solar direta.', '/assets/generated/hero-outdoor-facade.png'],
    ['Publicidade rodoviária', 'Gabinetes prontos para redes de mídia externa.', '/assets/generated/outdoor-fixed-installation.png'],
    ['Fachada de shopping', 'Tamanhos flexíveis para edifícios comerciais.', '/assets/generated/creative-custom-mall.png'],
    ['Informação municipal', 'Planejamento confiável para displays públicos externos.', '/assets/generated/outdoor-fixed-installation.png']
  ],
  cases: { title: 'Casos relacionados', text: 'Casos ajudam compradores a comparar requisitos de outdoors, fachadas e estádios antes da cotação.', items: ['Projeto outdoor billboard', 'Projeto fachada comercial', 'Projeto perímetro de estádio'], itemText: 'A HAFOND pode relacionar modelo, pixel pitch, área e instalação a cenários reais similares.' },
  downloads: { title: 'Downloads', text: 'Acesso rápido a catálogos e futuras fichas técnicas para compradores qualificados.' }
});

export default function FosSeriesPage({ language = 'en' }) {
  const copy = translations[language] || translations.en;
  const nav = homeTranslations[language]?.nav || homeTranslations.en.nav;
  const prefix = language === 'en' ? '' : `/${language}`;

  return (
    <>
      <ProductHeader nav={nav} copy={copy} prefix={prefix} />
      <main className="product-page product-detail-v2">
        <section className="product-hero product-hero-dark">
          <div className="product-hero-copy">
            <p className="product-kicker">{copy.kicker}</p>
            <h1>{copy.title}</h1>
            <p>{copy.intro}</p>
            <div className="product-key-lines">
              {copy.keyLines.map((line) => <span key={line}><CheckIcon />{line}</span>)}
            </div>
            <div className="product-hero-actions">
              <a className="button button-primary" href="#inquiry">{copy.cta.quote} <ArrowIcon /></a>
              <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.cta.whatsapp}</a>
              <a className="button button-outline" href="/assets/docs/hafond-led-screen-catalog.pdf">{copy.cta.datasheet}</a>
            </div>
            <div className="product-proof-grid">
              {copy.proof.map((item) => <span key={item}><ShieldIcon />{item}</span>)}
            </div>
          </div>
          <div className="product-hero-media">
            <Image src="/assets/generated/outdoor-fixed-installation.png" alt={`${copy.title} - HAFOND`} width={1200} height={770} priority />
          </div>
        </section>

        <nav className="product-anchor" aria-label="FOS Series page sections">
          {copy.anchors.map((item, index) => (
            <a key={item} href={`#${['overview', 'details', 'specifications', 'applications', 'downloads', 'inquiry'][index]}`}>{item}</a>
          ))}
        </nav>

        <section className="product-overview" id="overview">
          <div>
            <h2>{copy.overview.title}</h2>
            <p>{copy.overview.text}</p>
          </div>
          <div className="overview-metrics">
            {copy.overview.metrics.map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}
          </div>
        </section>

        <section className="product-detail-blocks" id="details">
          {copy.details.map(([number, title, text, points]) => (
            <article className="detail-block" key={title}>
              <div className="detail-media">
                <Image src="/assets/products/fos-feature-specs.png" alt={`${title} - HAFOND`} width={820} height={560} />
              </div>
              <div className="detail-copy">
                <span>{number}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </section>

        <section className="product-specs" id="specifications">
          <div className="product-section-head">
            <h2>{copy.specsHead.title}</h2>
            <p>{copy.specsHead.text}</p>
          </div>
          <div className="spec-table spec-table-formal">
            <div className="spec-row spec-head"><span>{copy.specsHead.item}</span><strong>{copy.specsHead.spec}</strong></div>
            {copy.specs.map(([label, value]) => <div className="spec-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
          <div className="spec-cta-row">
            <a className="button button-outline" href="/assets/docs/hafond-led-screen-catalog.pdf">{copy.cta.datasheet}</a>
            <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.cta.whatsapp}</a>
          </div>
        </section>

        <section className="product-applications" id="applications">
          <div className="product-section-head">
            <h2>{copy.applicationsHead.title}</h2>
            <p>{copy.applicationsHead.text}</p>
          </div>
          <div className="product-application-grid">
            {copy.applications.map(([title, text, image]) => (
              <article key={title}>
                <Image src={image} alt={`${title} - HAFOND`} width={560} height={360} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-cases">
          <div className="product-section-head">
            <h2>{copy.cases.title}</h2>
            <p>{copy.cases.text}</p>
          </div>
          <div className="case-preview-grid light-cases">
            {copy.cases.items.map((title) => <article key={title}><h3>{title}</h3><p>{copy.cases.itemText}</p></article>)}
          </div>
        </section>

        <section className="product-downloads" id="downloads">
          <div>
            <h2>{copy.downloads.title}</h2>
            <p>{copy.downloads.text}</p>
          </div>
          <div>
            <a className="button button-outline" href="/assets/docs/hafond-led-screen-catalog.pdf">{copy.cta.catalog}</a>
            <a className="button button-outline" href="/assets/docs/hafond-custom-led-display-catalog.pdf">{copy.cta.customCatalog}</a>
            <a className="button button-primary" href="#inquiry">{copy.cta.guide}</a>
          </div>
        </section>

        <section className="section inquiry-section product-bottom-inquiry" id="inquiry">
          <div>
            <h2>{copy.inquiry.title}</h2>
            <p>{copy.inquiry.text}</p>
            <div className="product-whatsapp-card">
              <strong>{copy.inquiry.card}</strong>
              <span>+86-18824278011</span>
              <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.cta.whatsapp}</a>
            </div>
          </div>
          <InquiryForm language={language} />
        </section>
      </main>
    </>
  );
}

function ProductHeader({ nav, copy, prefix }) {
  return (
    <header className="site-header">
      <a className="logo" href={`${prefix || '/'}`}>
        <Image src="/assets/hafond-logo.png" alt="HAFOND logo" width={280} height={72} priority />
      </a>
      <nav>
        <a className="nav-link" href={`${prefix}/#products`}>{nav.products}</a>
        <a className="nav-link" href={`${prefix}/#solutions`}>{nav.solutions}</a>
        <a className="nav-link" href={`${prefix}/#factory`}>{nav.factory}</a>
        <a className="nav-link" href={`${prefix}/#cases`}>{nav.cases}</a>
        <a className="nav-link" href={`${prefix}/#resources`}>{nav.resources}</a>
        <a className="nav-link" href={`${prefix}/#contact`}>{nav.contact}</a>
      </nav>
      <div className="site-actions">
        <LanguageSwitcher />
        <a className="button button-primary header-cta" href="#inquiry">{copy.cta.quote}</a>
      </div>
    </header>
  );
}
