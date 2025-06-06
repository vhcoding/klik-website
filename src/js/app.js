const handleHeaderMobile = () => {
  const btn = document.querySelector(".header-mobile-button");
  const list = document.querySelector(".nav-bar");

  btn.addEventListener("click", () => {
    btn.classList.toggle("header-mobile-button-active");

    if (btn.classList.contains("header-mobile-button-active")) {
      list.style.paddingTop = "20px";
      list.style.paddingBottom = "20px";
      list.style.maxHeight = "100vh";
    } else {
      list.style.paddingTop = "";
      list.style.paddingBottom = "";
      list.style.maxHeight = "";
    }
  });
};

handleHeaderMobile();

window.addEventListener("load", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const btnFades = document.querySelectorAll(".btn-fade");

  navLinks.forEach((link) => {
    link.classList.add("fade-in");
  });

  btnFades.forEach((el) => {
    el.classList.add("fade-in");
  });

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight * 0.75 &&
      rect.bottom >= window.innerHeight * 0.25
    );
  }

  function checkSections() {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", checkSections);
  checkSections();
});

document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#phone");

  let countryCache = null;

  window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: (callback) => {
      if (countryCache) {
        callback(countryCache);
        return;
      }

      fetch("https://get.geojs.io/v1/ip/country.json")
        .then((res) => res.json())
        .then((data) => {
          countryCache = data.country;
          callback(data.country);
        })
        .catch(() => {
          countryCache = "us";
          callback("us");
        });
    },
    loadUtils: () =>
      import(
        "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js?1743167482095"
      ),
  });
});

const form = document.getElementById("contact-form");
const sendButton = document.getElementById("send-button");
const titleElement = document.querySelector(".form-title");
const subtitleElement = document.querySelector(".form-subtitle");

sendButton.addEventListener("click", function () {
  sendButton.disabled = true;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      titleElement.style.opacity = 0;
      subtitleElement.style.opacity = 0;

      form.style.display = "none";

      setTimeout(() => {
        const isPortuguese = navigator.language.toLowerCase().startsWith("pt");
        if (isPortuguese) {
          titleElement.textContent =
            "Obrigado, entraremos em contato em breve!";
        } else {
          titleElement.textContent = "Thank you, we will be in touch soon!";
        }

        subtitleElement.style.display = "none";

        titleElement.style.opacity = 1;
      }, 400);
    }
  });
});
