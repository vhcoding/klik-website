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
