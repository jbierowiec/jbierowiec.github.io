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
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
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
    const navBlog = {
      en: "My Blog",
      pl: "Mój Blog",
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
      en: "A young developer seeking experiences in Software, Electrical, and Mechanical Engineering.",
      pl: "Młody programista poszukujący doświadczeń w dziedzinie inżynierii oprogramowania oraz inżynierii elektrycznej i mechanicznej.",
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
      en: "Academia",
      pl: "Akademia",
    };
    const work2 = {
      en: "Technology",
      pl: "Technologia",
    };

    // blog section
    const blog_title = {
      en: "My Blog",
      pl: "Mój Blog",
    };
    const blog_subtitle = {
      en: "Most recent posts",
      pl: "Najnowsze posty",
    };
    const blog_title1 = {
      en: "Hiking in Montana",
      pl: "Wędrówka w stanie Monata",
    };
    const blog_desc1 = {
      en: "My first blog post recounting my backpacking journey in Glacier National Park, MT.",
      pl: "Mój pierwszy wpis na blogu opisujący moją wyprawę z wędrownikami do Parku Narodowego Glacier w stanie Montana.",
    };
    const blog_title2 = {
      en: "From New York City to Montréal",
      pl: "Od Nowego Jorku do Montrealu",
    };
    const blog_desc2 = {
      en: "My account of completing the Empire State Trail bikepacking from New York City to Montréal.",
      pl: "Moja relacja z ukończenia wyprawy rowerowej Empire State Trail z Nowego Jorku do Montrealu.",
    };
    const blog_title3 = {
      en: "Twin Lights Ride",
      pl: "Przejażdżka Twin Lights",
    };
    const blog_desc3 = {
      en: "My account of completing my third 100-mile bike ride on the Twin Lights Ride in New Jersey.",
      pl: "Moja relacja z ukończenia mojego trzeciego 100-milowego rajdu rowerowego Twin Lights Ride w stanie New Jersey.",
    };
    const blog_button1 = {
      en: "Coming Soon",
      pl: "Już Wkrótce",
    };
    const blog_button2 = {
      en: "Coming Soon",
      pl: "Już Wkrótce",
    };
    const blog_button3 = {
      en: "Coming Soon",
      pl: "Już Wkrótce",
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
    const footer_blog = {
      en: "My Blog",
      pl: "Mój Blog",
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
    document.getElementById("navBlog").textContent = navBlog[lang];
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

    // blog section
    document.getElementById("blog_title").textContent = blog_title[lang];
    document.getElementById("blog_subtitle").textContent = blog_subtitle[lang];
    document.getElementById("blog_title1").textContent = blog_title1[lang];
    document.getElementById("blog_desc1").textContent = blog_desc1[lang];
    document.getElementById("blog_title2").textContent = blog_title2[lang];
    document.getElementById("blog_desc2").textContent = blog_desc2[lang];
    document.getElementById("blog_title3").textContent = blog_title3[lang];
    document.getElementById("blog_desc3").textContent = blog_desc3[lang];
    document.getElementById("blog_button1").textContent = blog_button1[lang];
    document.getElementById("blog_button2").textContent = blog_button2[lang];
    document.getElementById("blog_button3").textContent = blog_button3[lang];

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
    document.getElementById("footer_blog").textContent = footer_blog[lang];
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
