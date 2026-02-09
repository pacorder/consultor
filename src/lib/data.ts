import type {
  Profile,
  Service,
  MethodologyStep,
  Certification,
  Specialization,
  CaseStudy,
  Testimonial,
  BlogPost,
  NavItem,
  LinkedInPost,
} from '@/lib/types';
import { Award, Briefcase, Check, Gem, ShieldCheck } from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Inicio', href: '/' },
  { title: 'Sobre Mí', href: '/sobre-mi' },
  { title: 'Servicios', href: '/servicios' },
  { title: 'Casos de Éxito', href: '/casos-de-exito' },
  { title: 'Testimonios', href: '/testimonios' },
  { title: 'Blog', href: '/blog' },
  { title: 'Publicaciones', href: '/publicaciones' },
  { title: 'Contacto', href: '/contacto' },
];

export const profile: Profile = {
  name: 'Sady Enrique Maureria Ferrada',
  role: 'Consultor Senior QA/QC (Calidad)',
  summary:
    'Ingeniero Civil Mecánico (U. de Chile) con Máster en Sistemas Integrados de Gestión y más de 30 años de experiencia en calidad, optimización de procesos, productividad y costos.',
  bio: [
    'Con más de tres décadas de experiencia en el campo de la ingeniería y la gestión de calidad, me he consolidado como un consultor senior especializado en la optimización de sistemas productivos y de gestión. Mi carrera se ha centrado en ayudar a empresas de diversos sectores a alcanzar la excelencia operativa, mejorar su productividad y reducir costos a través de la implementación de metodologías de calidad de clase mundial.',
    'Mi formación como Ingeniero Civil Mecánico de la prestigiosa Universidad de Chile, complementada con un Máster en Sistemas Integrados de Gestión (Calidad, Medio Ambiente y Prevención de Riesgos Laborales), me ha proporcionado una base técnica sólida y una visión holística de la gestión empresarial.',
    'He liderado y participado en más de 50 proyectos de alta complejidad en industrias como la minería, energía, construcción y manufactura, tanto a nivel nacional como internacional. Mi enfoque es siempre práctico y orientado a resultados, trabajando codo a codo con los equipos directivos y operativos para implementar soluciones a medida que generan un impacto real y sostenible en el negocio.',
  ],
  stats: [
    { value: '+30', label: 'Años de Experiencia' },
    { value: '+50', label: 'Proyectos Liderados' },
    { value: '98%', label: 'Satisfacción de Clientes' },
    { value: '25%', label: 'Reducción de Costos Prom.' },
  ],
};

export const services: Service[] = [
  {
    title: 'Optimización de Procesos',
    description: 'Análisis y mejora de flujos de trabajo para aumentar la eficiencia y reducir desperdicios.',
    longDescription: 'Mediante la aplicación de metodologías Lean y Six Sigma, identificamos cuellos de botella, eliminamos actividades sin valor agregado y rediseñamos procesos para maximizar la productividad y la calidad, resultando en una operación más ágil y rentable.',
    icon: Gem,
  },
  {
    title: 'Sistemas de Gestión de Calidad',
    description: 'Implementación y auditoría de sistemas basados en normas ISO 9001, ISO 14001 y ISO 45001.',
    longDescription: 'Acompaño a las empresas en todo el ciclo de vida de sus sistemas de gestión: desde el diseño e implementación inicial hasta la preparación para auditorías de certificación y la mejora continua, asegurando el cumplimiento normativo y la eficacia del sistema.',
    icon: ShieldCheck,
  },
  {
    title: 'Aseguramiento de Calidad (QA)',
    description: 'Definición de estrategias y planes de QA para proyectos, garantizando la calidad del producto final.',
    longDescription: 'Desarrollo e implemento planes de aseguramiento de calidad a medida para proyectos complejos, estableciendo los estándares, procedimientos y métricas necesarios para prevenir defectos y asegurar que los entregables cumplan con los requisitos más exigentes.',
    icon: Check,
  },
  {
    title: 'Control de Calidad (QC)',
    description: 'Inspección y control de calidad en terreno para fabricación, montaje y construcción.',
    longDescription: 'Ofrezco servicios de inspección y control de calidad directamente en las fases de fabricación, montaje y construcción, aplicando técnicas de inspección avanzadas y verificando el cumplimiento de especificaciones técnicas para garantizar la integridad y calidad de los activos.',
    icon: Briefcase,
  },
];

export const methodology: MethodologyStep[] = [
  {
    step: 1,
    title: 'Diagnóstico',
    description: 'Análisis profundo de la situación actual, identificando brechas y oportunidades de mejora.',
  },
  {
    step: 2,
    title: 'Planificación',
    description: 'Diseño de un plan de acción a medida, con objetivos claros, plazos y KPIs.',
  },
  {
    step: 3,
    title: 'Implementación',
    description: 'Ejecución del plan, trabajando en conjunto con sus equipos para gestionar el cambio.',
  },
  {
    step: 4,
    title: 'Verificación y Mejora',
    description: 'Medición de resultados, ajuste de estrategias y establecimiento de un ciclo de mejora continua.',
  },
];

export const certifications: Certification[] = [
  { title: 'Máster en Sistemas Integrados de Gestión (Calidad, Medioambiente, PRL)', issuer: 'Universidad de Vic', year: 2012 },
  { title: 'Ingeniero Civil Mecánico', issuer: 'Universidad de Chile', year: 1992 },
  { title: 'Auditor Líder ISO 9001:2015', issuer: 'IRCA', year: 2016 },
  { title: 'Certified Welding Inspector (CWI)', issuer: 'American Welding Society (AWS)', year: 2005 },
];

export const specializations: Specialization[] = [
  { area: 'Minería y Metales', description: 'Optimización de procesos en plantas concentradoras, fundiciones y refinerías. QA/QC para grandes proyectos mineros.' },
  { area: 'Energía', description: 'Gestión de calidad en la construcción de centrales termoeléctricas y proyectos de energías renovables.' },
  { area: 'Manufactura', description: 'Implementación de Lean Manufacturing, control estadístico de procesos y sistemas de gestión de calidad en líneas de producción.' },
  { area: 'Construcción e Infraestructura', description: 'Aseguramiento de calidad para proyectos de infraestructura pública y privada, incluyendo edificación y obras civiles.' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Optimización de Productividad en Planta Minera',
    problem: 'Una importante compañía minera enfrentaba una baja disponibilidad en su línea de molienda, afectando la producción total.',
    solution: 'Se realizó un análisis de causa raíz (RCA) y se aplicaron herramientas Lean para rediseñar el flujo de mantenimiento y operación. Se implementó un sistema de monitoreo de condición y un plan de mantenimiento predictivo.',
    result: 'Aumento del 20% en la disponibilidad de la planta, equivalente a un incremento de producción de 5,000 toneladas de cobre fino al año.',
    roi: '150% en el primer año',
  },
  {
    id: '2',
    title: 'Implementación de SGI para Certificación Tri-norma',
    problem: 'Una empresa constructora necesitaba certificarse en ISO 9001, ISO 14001 y ISO 45001 para acceder a licitaciones de mayor envergadura.',
    solution: 'Se diseñó e implementó un Sistema de Gestión Integrado (SGI) desde cero, capacitando a todo el personal y liderando el proceso de auditoría externa.',
    result: 'Certificación exitosa en las tres normas en un plazo de 8 meses, permitiendo a la empresa adjudicarse dos nuevos contratos por un valor total de $50M USD.',
    roi: 'Incalculable por acceso a nuevos mercados',
  },
  {
    id: '3',
    title: 'Reducción de Costos de No Calidad en Fabricación',
    problem: 'Un fabricante de estructuras metálicas tenía una alta tasa de rechazo interno y reclamos de clientes, generando sobrecostos del 15%.',
    solution: 'Se implementó un robusto plan de QA/QC, incluyendo la calificación de soldadores, procedimientos de inspección por ensayos no destructivos (END) y un sistema de trazabilidad de materiales.',
    result: 'Reducción de la tasa de rechazo en un 80% y disminución de los costos de no calidad a menos del 3%.',
    roi: '300% en 18 meses',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Juan Pérez',
    company: 'Gerente de Proyectos, Minera Andina',
    review: 'La experiencia de Sady fue clave para destrabar problemas complejos en nuestro proyecto. Su enfoque práctico y su capacidad para trabajar con nuestros equipos marcaron la diferencia.',
    rating: 5,
  },
  {
    name: 'María González',
    company: 'Jefa de Calidad, Constructora Siglo XXI',
    review: 'Gracias a la consultoría de Sady, no solo logramos la certificación tri-norma, sino que realmente transformamos nuestra cultura hacia la calidad y la seguridad.',
    rating: 5,
  },
  {
    name: 'Carlos Soto',
    company: 'Gerente de Operaciones, Metalmecanica S.A.',
    review: 'Los resultados hablan por sí solos. Redujimos nuestros costos de no calidad drásticamente y mejoramos la confianza de nuestros clientes. Una inversión que se pagó con creces.',
    rating: 5,
  },
  {
    name: 'Laura Fernandez',
    company: 'Gerente General, Energía Austral',
    review: 'El profesionalismo y conocimiento técnico de Sady son de primer nivel. Su asesoría en QA para nuestro parque eólico fue fundamental para el éxito del proyecto.',
    rating: 4,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: '5-claves-para-una-gestion-de-calidad-exitosa',
    title: '5 Claves para una Gestión de Calidad Exitosa en 2024',
    category: 'Gestión de Calidad',
    excerpt: 'Descubra los pilares fundamentales que toda empresa debe considerar para construir un sistema de gestión de calidad que no solo cumpla con las normas, sino que impulse el negocio.',
    date: '15 de Julio, 2024',
    author: 'Sady Maureria',
  },
  {
    slug: 'lean-manufacturing-mas-alla-de-la-fabrica',
    title: 'Lean Manufacturing: Más Allá de la Fábrica',
    category: 'Optimización',
    excerpt: 'Los principios Lean nacieron en la industria automotriz, pero su aplicación es universal. Vea cómo puede aplicar esta filosofía para optimizar procesos en cualquier tipo de organización.',
    date: '02 de Julio, 2024',
    author: 'Sady Maureria',
  },
  {
    slug: 'el-rol-del-qa-qc-en-la-era-de-la-industria-4-0',
    title: 'El Rol del QA/QC en la Era de la Industria 4.0',
    category: 'Tendencias',
    excerpt: 'La digitalización está transformando la manera en que aseguramos y controlamos la calidad. Analizamos el impacto de tecnologías como IoT, IA y Big Data en el campo del QA/QC.',
    date: '20 de Junio, 2024',
    author: 'Sady Maureria',
  },
];

export const linkedinPosts: LinkedInPost[] = [
  {
    title: 'El Futuro de la Gestión de Calidad con IA',
    summary: 'Exploramos cómo la Inteligencia Artificial está revolucionando los procesos de QA/QC, permitiendo un control más preciso y predictivo. La IA no es solo una herramienta, es un cambio de paradigma para alcanzar niveles de excelencia antes inimaginables.',
    url: '#',
    date: '25 de Agosto, 2024',
  },
  {
    title: 'Sostenibilidad y Calidad: Un Binomio Inseparable',
    summary: 'La gestión de calidad moderna no puede ignorar el impacto ambiental. En este post, discuto la sinergia entre las normas ISO 9001 e ISO 14001 para crear operaciones que no solo son eficientes y rentables, sino también responsables con nuestro planeta.',
    url: '#',
    date: '10 de Agosto, 2024',
  },
  {
    title: 'Liderazgo en Tiempos de Transformación Digital',
    summary: '¿Cómo liderar equipos de calidad en la era digital? Comparto 3 estrategias clave para fomentar una cultura de mejora continua y adaptación tecnológica en su organización, asegurando que su equipo no solo sobreviva, sino que prospere.',
    url: '#',
    date: '28 de Julio, 2024',
  },
];
