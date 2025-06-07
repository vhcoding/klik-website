const i18nextResources = {
  en: {
    translation: {
      "main-title": "Your online presence starts here.",
      "main-subtitle":
        "We handle everything: design, domain, hosting, maintenance, and support. You just focus on growing.",
      "cta-button": "Get Started",
      "how-it-works": "How it works?",
      "section2-title": "Everything you need in one place",
      "section2-sub":
        "From creation to support, we offer complete solutions for building a quality online presence.",
      "section3-title": "Creating your site with us is this simple:",
      "section3-sub":
        "No complications or tech jargon. We handle everything while you follow each step closely.",
      "form-title": "Let's bring your website to life?",
      "form-subtitle": "Fill it out quickly and we'll contact you on WhatsApp!",
      "form-button": "Send",
      "footer-credit": "Website developed by",
      "nav-services": "Services",
      "nav-how-it-works": "How it works",
      "nav-plans": "Plans",
      "nav-extras": "Extras",
      "s2-card1-title": "Website and landing page creation",
      "s2-card1-text":
        "Modern, responsive sites with your brand. Perfect for showcasing your business and establishing an online presence.",
      "s2-card2-title": "Domain registration and hosting",
      "s2-card2-text":
        "Your site with its own address, secure, fast, and stable hosting.",
      "s2-card3-title": "Maintenance and support",
      "s2-card3-text":
        "Updates, improvements, and technical issues? Count on us! We solve everything for you.",
      "s3-adv1-title": "Briefing",
      "s3-adv1-text":
        "We'll understand your business, goals, and preferred style. Everything to create a site that's uniquely yours.",
      "s3-adv2-title": "Layout",
      "s3-adv2-text":
        "Custom design with colors, fonts, and structure designed to delight your audience.",
      "s3-adv3-title": "Development",
      "s3-adv3-text":
        "We transform your approved layout into a fully functional, responsive, and optimized website.",
      "s3-adv4-title": "Hosting",
      "s3-adv4-text":
        "We set up fast and secure servers so your site runs smoothly without crashes or scares.",
      "s3-adv5-title": "Publication",
      "s3-adv5-text":
        "Your site goes live with everything it needs: custom domain, SSL, and integrations.",
      "s3-adv6-title": "Support and maintenance",
      "s3-adv6-text":
        "Updates, backups, and fine-tuning to keep your site flawless. Questions? Our team solves them!",
      "s4-title": "Is your business not taking off?",
      "s4-sub": "Let's make it <strong>skyrocket on the web!</strong>",
      "s4-cta-button": "I want my website",
      "s5-title": "Find the perfect plan for you",
      "s5-sub":
        "Your site, your way. You choose what you need, and we make it happen.",
      "s5-plan1-name": "Basic",
      "s5-plan1-desc":
        "For small businesses that need a professional Landing Page.",
      "s5-plan1-feat1":
        "<strong>1 Landing Page: </strong>Responsive, unique, and custom design.",
      "s5-plan1-feat2":
        "<strong>Simple integrations: </strong>Contact form, social media links, Google Maps location.",
      "s5-plan1-feat3":
        "<strong>2 adjustments after delivery: </strong>Changes to text, images, colors.",
      "s5-plan1-feat4": "<strong>Email support: </strong>Response within 48h.",
      "s5-plan1-feat5": "<strong>Deadline: </strong>Up to 10 business days.",
      "s5-plan-cta": "Choose plan",
      "s5-plan2-name": "Intermediate",
      "s5-plan2-desc":
        "For companies that want to go beyond the basics, with optimized performance and more integration possibilities.",
      "s5-plan2-feat1":
        "<strong>1 Landing Page + 1 Additional Page: </strong>Responsive, unique, and custom design.",
      "s5-plan2-feat3":
        "<strong>Intermediate Integrations: </strong>Message redirection to WhatsApp.",
      "s5-plan2-feat4":
        "<strong>Performance optimization: </strong>Fast site (PageSpeed 90+).",
      "s5-plan2-feat5":
        "<strong>5 adjustments after delivery: </strong>Changes to text, images, and colors.",
      "s5-plan2-feat6":
        "<strong>WhatsApp support: </strong>Response within 24h.",
      "s5-plan2-feat7": "<strong>Deadline: </strong>Up to 12 business days.",
      "s5-plan3-name": "Professional",
      "s5-plan3-desc":
        "For companies that need a robust site, advanced integrations, and high-priority support.",
      "s5-plan3-feat1":
        "<strong>1 Landing Page + 3 Additional Pages: </strong>Responsive, unique, and custom design.",
      "s5-plan3-feat4":
        "<strong>Advanced Integrations: </strong>Payment APIs (e.g., Stripe, Mercado Pago) and CRM APIs.",
      "s5-plan3-feat6":
        "<strong>Unlimited adjustments: </strong>Unlimited changes to text, images, colors for 30 days after delivery.",
      "s5-plan3-feat7":
        "<strong>Priority support via WhatsApp or phone: </strong>Response within 6h.",
      "s5-plan3-feat8": "<strong>Deadline: </strong>Up to 15 business days.",
      "s6-title": "Extras that make a difference",
      "s6-sub":
        "Expand navigation, impress with animations, or speak to the world. Just choose what fits your project.",
      "s6-extra1-title": "Additional<br />page",
      "s6-extra1-desc":
        "Need more space to showcase your services? We create pages with the same care as the main page.",
      "s6-extra2-title": "Advanced <br />animations",
      "s6-extra2-desc":
        "Highlight sections, menus, and interactions with visual effects, making your site more modern, dynamic, and engaging.",
      "s6-extra3-title": "Translation<br />service",
      "s6-extra3-desc":
        "Speak to the world: we adapt your site to English with professional translation. Ideal for reaching a global audience.",
      "s7-title": "We are the team that will bring your site to life",
      "s7-sub":
        "We unite design and development to deliver sites that work — and delight.",
      "s7-team1-name": "Helena Cunha",
      "s7-team1-role": "Web Designer",
      "s7-team2-name": "Vitor Hugo Lopes",
      "s7-team2-role": "Developer",
      "form-placeholder-name": "Name",
      "basic-price" : "$600",
      "intermediate-price" : "$1500",
      "pro-price" : "$2000",
      "add-page" : "$100",
      "advanced-animations" : "$50",
      "translation-service" : "$100",
    },
  },
};

const userLang = navigator.language.startsWith("pt") ? "pt" : "en";

if (userLang !== "pt") {
  i18next.init(
    {
      lng: userLang,
      resources: i18nextResources,
      interpolation: {
        escapeValue: false,
      },
    },
    function (err, t) {
      if (err) return console.error("i18next init error:", err);
      updateContent();
    }
  );
}

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translated = i18next.t(key);
    if (translated) {
      if (translated.includes("<") && translated.includes(">")) {
        el.innerHTML = translated;
      } else {
        el.textContent = translated;
      }
      if (
        el.tagName === "INPUT" &&
        el.type !== "submit" &&
        el.type !== "button"
      ) {
        el.placeholder = translated;
      }
    }
  });
}
