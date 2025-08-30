import { useMemo, useState } from "react";

/** Idiomas suportados */
type Lang = "en" | "pt" | "es";

/** Item de serviço exibido em cards */
interface ServiceItem {
  title: string;
  desc: string;
}

/** Estrutura de cópia por idioma */
interface Copy {
  langName: string;
  heroTitle: string;
  heroSubtitle: string;
  cta1: string;
  cta2: string;
  servicesTitle: string;
  services: ServiceItem[];
  footer: string;
  navServices: string;
}

/** Mensagens por idioma */
const MESSAGES: Record<Lang, Copy> = {
  en: {
    langName: "English",
    heroTitle: "Consulting & Administrative Support",
    heroSubtitle:
      "Personalized online assistance for individuals. We help with document handling, digitalization, backoffice tasks, and clarifying insurance-related questions.",
    cta1: "Chat on WhatsApp (321)",
    cta2: "Chat on WhatsApp (407)",
    servicesTitle: "Our Services",
    services: [
      {
        title: "Document Assistance",
        desc: "Help preparing, reviewing, and organizing your paperwork.",
      },
      {
        title: "Digitalization",
        desc: "We digitize and organize your documents for easier access.",
      },
      {
        title: "Backoffice Services",
        desc: "Support with administrative tasks and daily demands.",
      },
      {
        title: "Consulting",
        desc: "Guidance to streamline your processes and solve challenges.",
      },
      {
        title: "Insurance Support",
        desc: "We help clarify your insurance policy questions and guide next steps.",
      },
      {
        title: "Remote Assistance",
        desc: "Available online via WhatsApp, email, and calls.",
      },
    ],
    footer: "© EM SERVICES — All rights reserved.",
    navServices: "Services",
  },
  pt: {
    langName: "Português",
    heroTitle: "Consultoria & Apoio Administrativo",
    heroSubtitle:
      "Atendimento online personalizado para pessoas físicas. Ajudamos com documentação, digitalização, serviços de backoffice e dúvidas relacionadas a seguros.",
    cta1: "Falar no WhatsApp (321)",
    cta2: "Falar no WhatsApp (407)",
    servicesTitle: "Nossos Serviços",
    services: [
      {
        title: "Apoio com Documentos",
        desc: "Auxílio na preparação, revisão e organização da sua papelada.",
      },
      {
        title: "Digitalização",
        desc: "Transformamos seus documentos em versão digital organizada.",
      },
      {
        title: "Serviços de Backoffice",
        desc: "Suporte em tarefas administrativas e demandas do dia a dia.",
      },
      {
        title: "Consultoria",
        desc: "Orientação para otimizar processos e resolver problemas.",
      },
      {
        title: "Apoio em Seguros",
        desc: "Esclarecemos dúvidas sobre apólices e próximos passos.",
      },
      {
        title: "Atendimento Remoto",
        desc: "Disponível online por WhatsApp, e-mail e chamadas.",
      },
    ],
    footer: "© EM SERVICES — Todos os direitos reservados.",
    navServices: "Serviços",
  },
  es: {
    langName: "Español",
    heroTitle: "Consultoría & Apoyo Administrativo",
    heroSubtitle:
      "Asistencia en línea personalizada para personas. Ayudamos con documentación, digitalización, tareas de backoffice y dudas relacionadas con seguros.",
    cta1: "Hablar por WhatsApp (321)",
    cta2: "Hablar por WhatsApp (407)",
    servicesTitle: "Nuestros Servicios",
    services: [
      {
        title: "Apoyo con Documentos",
        desc: "Ayuda en la preparación, revisión y organización de tus papeles.",
      },
      {
        title: "Digitalización",
        desc: "Digitalizamos y organizamos documentos para fácil acceso.",
      },
      {
        title: "Servicios de Backoffice",
        desc: "Soporte en tareas administrativas y demandas diarias.",
      },
      {
        title: "Consultoría",
        desc: "Orientación para optimizar procesos y resolver desafíos.",
      },
      {
        title: "Apoyo en Seguros",
        desc: "Aclaramos dudas sobre pólizas y próximos pasos.",
      },
      {
        title: "Atención Remota",
        desc: "Disponible en línea por WhatsApp, correo y llamadas.",
      },
    ],
    footer: "© EM SERVICES — Todos los derechos reservados.",
    navServices: "Servicios",
  },
};

/** Links de WhatsApp */
const WHATSAPP = {
  a: "https://wa.me/13212403690",
  b: "https://wa.me/14079639347",
} as const;

/** Mensagem inicial por idioma */
const INITIAL_MESSAGE: Record<Lang, string> = {
  en: "Hello! I came from EM SERVICES website. I’d like assistance.",
  pt: "Olá! Vim pelo site da EM SERVICES. Gostaria de atendimento.",
  es: "¡Hola! Vengo del sitio de EM SERVICES. Me gustaría atención.",
};

export default function App() {
  // idioma padrão: inglês
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo<Copy>(() => MESSAGES[lang], [lang]);

  const encodedMsg = useMemo<string>(
    () => encodeURIComponent(INITIAL_MESSAGE[lang]),
    [lang]
  );

  return (
    <div className="site">
      {/* HEADER */}
      <header className="header">
        <div className="brand">
          <div className="logo">EM</div>
          <span>EM SERVICES</span>
        </div>

        <nav className="nav">
          <a href="#services">{t.navServices}</a>

          <div className="lang">
            <button
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
              aria-label="English"
              title="English"
              type="button"
            >
              EN
            </button>
            <button
              className={`lang-btn ${lang === "pt" ? "active" : ""}`}
              onClick={() => setLang("pt")}
              aria-label="Português"
              title="Português"
              type="button"
            >
              PT
            </button>

            <button
              className={`lang-btn ${lang === "es" ? "active" : ""}`}
              onClick={() => setLang("es")}
              aria-label="Español"
              title="Español"
              type="button"
            >
              ES
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>

          <div className="cta">
            <a
              className="btn btn-primary"
              href={`${WHATSAPP.a}?text=${encodedMsg}`}
              target="_blank"
              rel="noreferrer"
            >
              {t.cta1}
            </a>
            <a
              className="btn btn-outline"
              href={`${WHATSAPP.b}?text=${encodedMsg}`}
              target="_blank"
              rel="noreferrer"
            >
              {t.cta2}
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Quick info">
          <div className="badge">Online</div>
          <h3>EM SERVICES</h3>
          <p>Documents • Backoffice • Consulting</p>
          <div
            style={{
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
              opacity: 0.95,
            }}
          >
            {/* Ícone de documento */}
            <svg width="28" height="28" viewBox="0 0 24 24">
              <path
                d="M6 2h7l5 5v15H6z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M14 2v6h6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span style={{ fontSize: 14 }}>
              Helping you with documentation & insurance-related questions
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>{t.servicesTitle}</h2>
        <div className="grid">
          {t.services.map((s: ServiceItem, i: number) => (
            <article key={i} className="card">
              <div className="card-icon" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4 6h16v12H4zM4 10h16M8 14h4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">{t.footer}</footer>
    </div>
  );
}
