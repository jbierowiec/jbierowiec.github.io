/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrectTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrectIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme,
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrectTheme());
  localStorage.setItem("selected-icon", getCurrectIcon());
});

/*===================== YEAR CALCULATOR =====================*/
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = `Jan C Bierowiec. ${currentYear}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".language [data-language]");
  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const lang = e.target.getAttribute("data-language");
      changeLanguage(lang);
    });
  });

  function changeLanguage(lang) {
    // navigation
    const navHome = {
      en: "Home",
      pl: "Strona Główna",
    };
    const navAbout = {
      en: "About Me",
      pl: "O Mnie",
    };
    const navPortfolio = {
      en: "What I Do",
      pl: "Co Robię",
    };
    const navContact = {
      en: "Contact Me",
      pl: "Skontaktuj Się",
    };
    const navLanguage = {
      en: "Language",
      pl: "Język",
    };
    const naven = {
      en: "English",
      pl: "Angielski",
    };
    const navpl = {
      en: "Polish",
      pl: "Polski",
    };

    // home section
    const home_desc = {
      en: "A young interdisciplinary engineer, with a focus on educational technology, mechatronics, and intelligent automation.",
      pl: "Młody inżynier o interdyscyplinarnym podejściu, specjalizującym się w technologiach edukacyjnych, mechatronice i inteligentnej automatyce.",
    };

    // about section
    const about_title = {
      en: "About Me",
      pl: "O Mnie",
    };
    const about_subtitle = {
      en: "The Real Jan",
      pl: "Prawdziwy Janek",
    };
    const about_desc1 = {
      en: "At the age of 22, I hold a Bachelor of Science in Engineering Physics and a Master of Science in Computer Science, both from Fordham University. Along my journey, I've been exposed to multiple industries, giving me experience in tutoring, teaching, educational technology, simulation development, web development, software engineering, blog writing, and creative problem solving.",
      pl: "W wieku 22 lat uzyskałem tytuł licencjata z inżynierii fizyki oraz magistra informatyki na Uniwersytecie Fordham. W trakcie swojej kariery zetknąłem się z wieloma branżami, co dało mi doświadczenie w korepetycjach, nauczaniu, technologiach edukacyjnych, tworzeniu symulacji, tworzeniu stron internetowych, inżynierii oprogramowania, pisaniu blogów i kreatywnym rozwiązywaniu problemów.",
    };
    const about_desc2 = {
      en: "In addition to building software that helps others and creates solutions to everyday challenges, I also recognize that there's a whole world beyond the screen. During my free time, I set out on adventures that reconnect me with that world—whether it's hiking through trails, backpacking into the mountains, road cycling long distances, or embarking on multi-day bikepacking journeys.",
      pl: "Oprócz tworzenia oprogramowania, które pomaga innym i rozwiązuje codzienne problemy, zdaję sobie również sprawę, że istnieje cały świat poza ekranem. W wolnym czasie wyruszam na przygody, które pozwalają mi na nowo nawiązać z nim kontakt - czy to wędrówki szlakami, wędrówki z plecakiem po górach, długie dystanse na rowerze szosowym, czy wielodniowe wyprawy rowerowe.",
    };

    // portfolio section
    const portfolio_title = {
      en: "What I Do",
      pl: "Co Robię",
    };
    const portfolio_subtitle = {
      en: "My Work & Hobbies",
      pl: "Moja Praca i Hobby",
    };

    const work1 = {
      en: "Adventures",
      pl: "Przygody",
    };
    const work2 = {
      en: "Cycling",
      pl: "Kolarstwo",
    };
    const work3 = {
      en: "Technology",
      pl: "Technologia",
    };
    const work4 = {
      en: "Academia",
      pl: "Akademia",
    };
    const work_link1 = {
      en: "Live Site",
      pl: "Żywa Strona",
    };
    const work_link2 = {
      en: "Live Site",
      pl: "Żywa Strona",
    };
    const work_link3 = {
      en: "Live Site",
      pl: "Żywa Strona",
    };
    const work_link4 = {
      en: "Live Site",
      pl: "Żywa Strona",
    };

    // contact section
    const contact_title = {
      en: "Contact Me",
      pl: "Skontaktuj Się",
    };
    const contact_subtitle = {
      en: "Get in Touch",
      pl: "Skontaktuj Się ze Mną",
    };
    const contact_name = {
      en: "Name",
      pl: "Imię",
    };
    const contact_email = {
      en: "Email",
      pl: "Email",
    };
    const contact_project = {
      en: "Project",
      pl: "Projekt",
    };
    const contact_message = {
      en: "Message",
      pl: "Wiadomość",
    };
    const contact_button = {
      en: "Send Message <i class='uil uil-message button__icon'></i>",
      pl: "Wyślij Wiadomość <i class='uil uil-message button__icon'></i>",
    };

    // footer section
    const footer_home = {
      en: "Home",
      pl: "Strona Główna",
    };
    const footer_about = {
      en: "About Me",
      pl: "O Mnie",
    };
    const footer_portfolio = {
      en: "What I Do",
      pl: "Co Robię",
    };
    const footer_contact = {
      en: "Contact Me",
      pl: "Skontaktuj Się",
    };
    const legal_ending = {
      en: "&#169; Jan C. Bierowiec <span id='year'></span> All Rights Reserved",
      pl: "&#169; Jan C. Bierowiec <span id='year'></span> Wszelkie Prawa Zastrzeżone",
    };

    document.querySelector("html").setAttribute("lang", lang);

    // navigation
    document.getElementById("navHome").textContent = navHome[lang];
    document.getElementById("navAbout").textContent = navAbout[lang];
    document.getElementById("navPortfolio").textContent = navPortfolio[lang];
    document.getElementById("navContact").textContent = navContact[lang];
    document.getElementById("navLanguage").textContent = navLanguage[lang];
    document.getElementById("naven").textContent = naven[lang];
    document.getElementById("navpl").textContent = navpl[lang];

    // home section
    document.getElementById("home_desc").textContent = home_desc[lang];

    // about section
    document.getElementById("about_title").textContent = about_title[lang];
    document.getElementById("about_subtitle").textContent =
      about_subtitle[lang];
    document.getElementById("about_desc1").textContent = about_desc1[lang];
    document.getElementById("about_desc2").textContent = about_desc2[lang];

    // portfolio section
    document.getElementById("portfolio_title").textContent =
      portfolio_title[lang];
    document.getElementById("portfolio_subtitle").textContent =
      portfolio_subtitle[lang];

    // work & hobbies
    document.getElementById("work1").textContent = work1[lang];
    document.getElementById("work2").textContent = work2[lang];
    document.getElementById("work3").textContent = work3[lang];
    document.getElementById("work4").textContent = work4[lang];
    document.getElementById("work_link1").textContent = work_link1[lang];
    document.getElementById("work_link2").textContent = work_link2[lang];
    document.getElementById("work_link3").textContent = work_link3[lang];
    document.getElementById("work_link4").textContent = work_link4[lang];

    // contact section
    document.getElementById("contact_title").textContent = contact_title[lang];
    document.getElementById("contact_subtitle").textContent =
      contact_subtitle[lang];
    document.getElementById("contact_name").textContent = contact_name[lang];
    document.getElementById("contact_email").textContent = contact_email[lang];
    document.getElementById("contact_project").textContent =
      contact_project[lang];
    document.getElementById("contact_message").textContent =
      contact_message[lang];
    document.getElementById("contact_button").innerHTML = contact_button[lang];

    // footer section
    document.getElementById("footer_home").textContent = footer_home[lang];
    document.getElementById("footer_about").textContent = footer_about[lang];
    document.getElementById("footer_portfolio").textContent =
      footer_portfolio[lang];
    document.getElementById("footer_contact").textContent =
      footer_contact[lang];
    document.getElementById("legal_ending").innerHTML = legal_ending[lang];
    document.getElementById("year").textContent = new Date().getFullYear();
  }
});

function calculateAge(birthYear, birthMonth) {
  const today = new Date();
  let age = today.getFullYear() - birthYear;
  if (today.getMonth() < birthMonth) {
    age--; // birthday hasn't happened yet this year
  }
  return age;
}

document.getElementById("age").textContent = calculateAge(2002, 11); // December = 11

document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("navLanguage");
  const languageList = document.getElementById("languageList");
  //const navLanguage = document.getElementById("navLanguage");
  const languageOptions = languageList.querySelectorAll("li");

  languageSelector.addEventListener("click", () => {
    languageList.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !languageSelector.contains(e.target) &&
      !languageList.contains(e.target)
    ) {
      languageList.classList.remove("active");
    }
  });

  // Initially hide the language list
  languageList.style.display = "none";

  // Toggle language list visibility on click
  languageSelector.addEventListener("click", function () {
    if (languageList.style.display === "none") {
      languageList.style.display = "block";
    } else {
      languageList.style.display = "none";
    }
  });

  // Hide language list when a language option is clicked
  languageOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      languageList.style.display = "none";
    });
  });
});

/*
var swiper = new Swiper(".blog__container", {
  cssMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
*/

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyI7zXIglHx9zAPdcmCJDvYXYDLTC_SglJ3qMV_LjiRha7dqRV0JevuMc5uQZ8kCoru/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

/* ==================== SECTION SCROLL ANIMATIONS ==================== */
const sectionsToAnimate = [
  { id: "about", visibleClass: "about--visible" },
  { id: "portfolio", visibleClass: "portfolio--visible" },
  //{ id: "blog", visibleClass: "blog--visible" },
  { id: "contact", visibleClass: "contact--visible" },
];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const cls = section.dataset.visibleClass;
          if (cls) section.classList.add(cls);
          // animate only once
          observer.unobserve(section);
        }
      });
    },
    {
      root: null,
      threshold: 0.25, // 25% of section in view
    },
  );

  sectionsToAnimate.forEach((cfg) => {
    const el = document.getElementById(cfg.id);
    if (el) {
      el.dataset.visibleClass = cfg.visibleClass;
      observer.observe(el);
    }
  });
} else {
  // Fallback: just show them if IntersectionObserver isn't supported
  sectionsToAnimate.forEach((cfg) => {
    const el = document.getElementById(cfg.id);
    if (el) el.classList.add(cfg.visibleClass);
  });
}
