/**
 * Internationalization (i18n) Module
 */

const LANG_STORAGE_KEY = 'azael_portfolio_lang';

const translations = {
  en: {
    nav: ["About", "Experience", "Projects", "Expertise"],
    resumeBtn: "View Resume",
    modalResumeTitle: "Resume",
    hero: {
      subtitle: "Software Engineer",
      title: "Building Systems That Work",
      lead: "I am Azael Fajardo. 7th-semester Computer Systems Engineering student with hands-on experience in software development, artificial intelligence, automation, backend development, and Linux infrastructure. Turning complex enterprise problems into elegant, high-performance solutions.",
    },
    experience: {
      kicker: "Career Path",
      title: "Experience",
      subtitle: "Designing, shipping, and operating resilient systems across research and production environments.",
      roles: [
        {
          role: "Developer · Researcher",
          date: "Jan 2026 — Present",
          desc: "Building a distributed-systems simulation environment to study performance, resilience, and chaos engineering.",
          list: [
            "Design simulation components that execute and control distributed processes.",
            "Run containerized experiments with Docker & Kubernetes, including chaos-engineering tests."
          ],
          tags: ["Distributed Systems", "Docker", "Kubernetes", "Chaos Engineering"]
        },
        {
          role: "Infrastructure Lead",
          date: "Sep 2025 — Present",
          desc: "Leading self-hosted infrastructure and software for a production business serving real customers.",
          list: [
            "Architected a dedicated Linux server running Docker, DNS, reverse proxies, and firewalls.",
            "Ship production apps (INVITACIONES, CHATBOTNAUTA) and Nextcloud, exposed securely via Cloudflare Tunnel."
          ],
          tags: ["Linux", "Docker", "Cloudflare Tunnel", "Nextcloud"]
        },
        {
          role: "Sous Chef",
          date: "Jan 2024 — Jan 2025",
          desc: "Promoted from dishwasher to Sous Chef through consistent performance and leadership.",
          list: [
            "Coordinated the kitchen team and supervised daily operations.",
            "Sustained service quality and continuity under high-pressure demand."
          ],
          tags: ["Team Leadership", "Operations"]
        }
      ]
    },
    projects: {
      kicker: "Portfolio",
      title: "Featured Projects",
      items: [
        {
          title: "A.R.G.O.S.",
          subtitle: "AI Multi-Agent Personal Assistant",
          desc: "Multi-agent AI system with a multi-provider LLM router, long-term memory via RAG & embeddings, and remote RPA execution over WebSocket."
        },
        {
          title: "Event Management Platform",
          subtitle: "WhatsApp Automation & Access Control",
          desc: "Production-grade full-stack platform for automated WhatsApp invitations, RSVP management, and unique QR generation with anti-duplication scanning."
        },
        {
          title: "BOVEDA",
          subtitle: "Personal Finance Platform",
          desc: "Self-hosted finance manager with WebAuthn/Passkeys authentication, deployed securely via Docker, Nginx, and Cloudflare Tunnels."
        },
        {
          title: "CHATBOTNAUTA",
          subtitle: "Enterprise AI Chatbot",
          desc: "Automated WhatsApp customer service agent for a print shop. Interprets natural language requests and generates quotes dynamically."
        },
        {
          title: "Microservices Resilience",
          subtitle: "Chaos Engineering & Observability",
          desc: "Implementation of circuit breakers, chaos engineering (k6), and full observability on a Kubernetes cluster."
        },
        {
          title: "DocFix / INEs",
          subtitle: "Computer Vision Document Processor",
          desc: "Desktop app leveraging AI segmentation and OpenCV to detect, crop, and normalize ID cards for automated print layouts."
        }
      ]
    },
    expertise: {
      kicker: "Toolbox",
      title: "Expertise",
      hexLabels: ["Backend", "AI & LLMs", "DevOps", "Databases", "Security", "Frontend"]
    }
  },
  es: {
    nav: ["Sobre mí", "Experiencia", "Proyectos", "Especialidad"],
    resumeBtn: "Ver CV",
    modalResumeTitle: "Currículum Vitae",
    hero: {
      subtitle: "Ingeniero de Software",
      title: "Construyendo Sistemas Que Funcionan",
      lead: "Soy Azael Fajardo. Estudiante de 7mo semestre de Ingeniería en Sistemas Computacionales con experiencia práctica en desarrollo de software, inteligencia artificial, automatización, backend e infraestructura Linux. Transformando problemas empresariales complejos en soluciones elegantes y de alto rendimiento.",
    },
    experience: {
      kicker: "Trayectoria",
      title: "Experiencia",
      subtitle: "Diseñando, entregando y operando sistemas resilientes en entornos de investigación y producción.",
      roles: [
        {
          role: "Desarrollador · Investigador",
          date: "Ene 2026 — Presente",
          desc: "Construyendo un entorno de simulación de sistemas distribuidos para estudiar rendimiento, resiliencia e ingeniería del caos.",
          list: [
            "Diseño de componentes de simulación que ejecutan y controlan procesos distribuidos.",
            "Ejecución de experimentos en contenedores con Docker y Kubernetes, incluyendo pruebas de ingeniería del caos."
          ],
          tags: ["Sistemas Distribuidos", "Docker", "Kubernetes", "Ingeniería del Caos"]
        },
        {
          role: "Líder de Infraestructura",
          date: "Sep 2025 — Presente",
          desc: "Dirigiendo infraestructura self-hosted y software para un negocio en producción con clientes reales.",
          list: [
            "Arquitectura de un servidor Linux dedicado corriendo Docker, DNS, reverse proxies y firewalls.",
            "Despliegue de aplicaciones de producción (INVITACIONES, CHATBOTNAUTA) y Nextcloud, expuestas de forma segura mediante Cloudflare Tunnel."
          ],
          tags: ["Linux", "Docker", "Cloudflare Tunnel", "Nextcloud"]
        },
        {
          role: "Sous Chef",
          date: "Ene 2024 — Ene 2025",
          desc: "Promovido de lavaplatos a Sous Chef a través de un desempeño consistente y liderazgo.",
          list: [
            "Coordinación del equipo de cocina y supervisión de las operaciones diarias.",
            "Mantenimiento de la calidad del servicio y continuidad bajo demanda de alta presión."
          ],
          tags: ["Liderazgo de Equipo", "Operaciones"]
        }
      ]
    },
    projects: {
      kicker: "Portafolio",
      title: "Proyectos Destacados",
      items: [
        {
          title: "A.R.G.O.S.",
          subtitle: "Asistente Personal de IA Multi-Agente",
          desc: "Sistema de IA multi-agente con router LLM multi-proveedor, memoria a largo plazo vía RAG y embeddings, y ejecución remota de RPA por WebSocket."
        },
        {
          title: "Plataforma de Gestión de Eventos",
          subtitle: "Automatización de WhatsApp y Control de Acceso",
          desc: "Plataforma full-stack de grado de producción para invitaciones automatizadas por WhatsApp, gestión de RSVP y generación de QR únicos con escaneo anti-duplicados."
        },
        {
          title: "BOVEDA",
          subtitle: "Plataforma de Finanzas Personales",
          desc: "Gestor de finanzas self-hosted con autenticación WebAuthn/Passkeys, desplegado de forma segura mediante Docker, Nginx y Cloudflare Tunnels."
        },
        {
          title: "CHATBOTNAUTA",
          subtitle: "Chatbot de IA Empresarial",
          desc: "Agente de atención al cliente automatizado por WhatsApp para negocio de impresión. Interpreta peticiones en lenguaje natural y genera cotizaciones dinámicamente."
        },
        {
          title: "Resiliencia en Microservicios",
          subtitle: "Ingeniería del Caos y Observabilidad",
          desc: "Implementación de circuit breakers, ingeniería del caos (k6) y observabilidad completa en un clúster de Kubernetes."
        },
        {
          title: "DocFix / INEs",
          subtitle: "Procesador de Documentos con Visión Computacional",
          desc: "Aplicación de escritorio usando segmentación con IA y OpenCV para detectar, recortar y normalizar identificaciones para automatizar layouts de impresión."
        }
      ]
    },
    expertise: {
      kicker: "Herramientas",
      title: "Especialidad",
      hexLabels: ["Backend", "IA y LLMs", "DevOps", "Bases de Datos", "Seguridad", "Frontend"]
    }
  }
};

export function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle');
  const storedLang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
  
  applyLanguage(storedLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('lang') || 'en';
      const newLang = currentLang === 'en' ? 'es' : 'en';
      applyLanguage(newLang);
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'en' ? 'ES' : 'EN';
  }

  const t = translations[lang];

  // Nav
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  if (navLinks.length >= 4) {
    navLinks[0].textContent = t.nav[0];
    navLinks[1].textContent = t.nav[1];
    navLinks[2].textContent = t.nav[2];
    navLinks[3].textContent = t.nav[3];
  }
  const btnResume = document.querySelector('.btn-nav-resume');
  if (btnResume) btnResume.textContent = t.resumeBtn;

  // Hero
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.textContent = t.hero.title;
  const heroLead = document.querySelector('.hero-lead');
  if (heroLead) heroLead.textContent = t.hero.lead;

  // Experience
  const expKicker = document.querySelector('#experience .section-kicker');
  if (expKicker) expKicker.textContent = t.experience.kicker;
  const expTitle = document.querySelector('#experience .section-title');
  if (expTitle) expTitle.textContent = t.experience.title;
  const expSubtitle = document.querySelector('#experience .section-subtitle');
  if (expSubtitle) expSubtitle.textContent = t.experience.subtitle;

  const expCards = document.querySelectorAll('.exp-card');
  expCards.forEach((card, index) => {
    if (t.experience.roles[index]) {
      const role = t.experience.roles[index];
      
      const roleEl = card.querySelector('.exp-role');
      if (roleEl) roleEl.textContent = role.role;
      
      const dateEl = card.querySelector('.exp-date');
      if (dateEl) dateEl.textContent = role.date;
      
      const descEl = card.querySelector('.exp-desc');
      if (descEl) descEl.textContent = role.desc;
      
      const listItems = card.querySelectorAll('.exp-list li');
      listItems.forEach((li, liIndex) => {
        if (role.list[liIndex]) {
          li.textContent = role.list[liIndex];
        }
      });

      const tagEls = card.querySelectorAll('.exp-tags .tag');
      tagEls.forEach((tag, tIndex) => {
        if (role.tags[tIndex]) {
          tag.textContent = role.tags[tIndex];
        }
      });
    }
  });

  // Projects
  const projKicker = document.querySelector('#projects .section-kicker');
  if (projKicker) projKicker.textContent = t.projects.kicker;
  const projTitle = document.querySelector('#projects .section-title');
  if (projTitle) projTitle.textContent = t.projects.title;

  const projCards = document.querySelectorAll('.project-card');
  projCards.forEach((card, index) => {
    if (t.projects.items[index]) {
      const titleEl = card.querySelector('.project-title');
      if (titleEl) titleEl.textContent = t.projects.items[index].title;
      const subtitleEl = card.querySelector('.project-subtitle');
      if (subtitleEl) subtitleEl.textContent = t.projects.items[index].subtitle;
      const descEl = card.querySelector('.project-desc');
      if (descEl) descEl.textContent = t.projects.items[index].desc;
    }
  });

  // Expertise
  const expKicker2 = document.querySelector('#expertise .section-kicker');
  if (expKicker2) expKicker2.textContent = t.expertise.kicker;
  const expTitle2 = document.querySelector('#expertise .section-title');
  if (expTitle2) expTitle2.textContent = t.expertise.title;

  const hexLabels = document.querySelectorAll('.hex-label');
  hexLabels.forEach((label, index) => {
    if (t.expertise.hexLabels[index]) {
      label.textContent = t.expertise.hexLabels[index];
    }
  });

  // Modal Resume
  const modalResumeTitle = document.getElementById('modal-resume-title');
  if (modalResumeTitle) modalResumeTitle.textContent = t.modalResumeTitle;
}
