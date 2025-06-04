const resources = {
  pt: {
    translation: {
      "main-title": "Sua presença online começa aqui.",
      "main-subtitle": "A gente cuida de tudo: design, domínio, hospedagem, manutenção e suporte. Você só se preocupa em crescer.",
      "cta-button": "Quero meu site",
      "how-it-works": "Como funciona?",
      "section2-title": "Tudo que você precisa num só lugar",
      "section2-sub": "Da criação ao suporte, oferecemos soluções completas para quem quer marcar presença online com qualidade.",
      "section3-title": "Criar seu site com a gente é simples assim:",
      "section3-sub": "Sem complicações nem termos técnicos. A gente cuida de tudo enquanto você acompanha de perto cada etapa.",
      "form-title": "Vamos dar vida ao seu site?",
      "form-subtitle": "Preencha rapidinho e a gente te chama no WhatsApp!",
      "form-button": "Enviar",
      "footer-credit": "Website desenvolvido por"
    }
  },
  en: {
    translation: {
      "main-title": "Your online presence starts here.",
      "main-subtitle": "We handle everything: design, domain, hosting, maintenance, and support. You just focus on growing.",
      "cta-button": "I want my website",
      "how-it-works": "How it works?",
      "section2-title": "Everything you need in one place",
      "section2-sub": "From creation to support, we offer complete solutions for building a quality online presence.",
      "section3-title": "Creating your site with us is this simple:",
      "section3-sub": "No complications or tech jargon. We handle everything while you follow each step closely.",
      "form-title": "Let's bring your website to life?",
      "form-subtitle": "Fill it out quickly and we'll contact you on WhatsApp!",
      "form-button": "Send",
      "footer-credit": "Website developed by"
    }
  }
};

const userLang = navigator.language.startsWith('pt') ? 'pt' : 'en';

i18next.init({
  lng: userLang,
  resources
}, function (err, t) {
  if (err) return console.error('i18next init error:', err);
  updateContent();
});

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translated = i18next.t(key);
    if (translated) {
      el.textContent = translated;
    }
  });
}
