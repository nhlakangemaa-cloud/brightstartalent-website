// OPEN MENU
function openMenu() {

  document
    .getElementById("fullscreenMenu")
    .classList.add("active");

}

// CLOSE MENU
function closeMenu() {

  document
    .getElementById("fullscreenMenu")
    .classList.remove("active");

}
// TOGGLE SEARCH
function toggleSearch() {
let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen;

  if (isOpen) {
    menu.classList.add("open");
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
  } else {
    menu.classList.remove("open");
    menuBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
  }
}

  const search =
    document.getElementById("searchContainer");

  search.classList.toggle("active");

  // AUTO FOCUS
  document.getElementById("searchInput").focus();

}

// SEARCH ACTORS
function searchActors() {

  const input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const links =
    document.querySelectorAll(".menu-links a");

  links.forEach(link => {

    const text =
      link.textContent.toLowerCase();

    if (text.includes(input)) {

      link.style.display = "block";

    } else {

      link.style.display = "none";

    }

  });

}

// ARTISTS DROPDOWN
function toggleArtists() {

  const dropdown =
    document.getElementById("artistsDropdown");

  dropdown.style.display =
    dropdown.style.display === "block"
      ? "none"
      : "block";

}

// TALENT DROPDOWN
function toggleDropdown() {

  const dropdown = document.getElementById("talentDropdown");

  dropdown.style.display =
    dropdown.style.display === "block"
      ? "none"
      : "block";
}

// FADE IN ANIMATION
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

  fadeElements.forEach(el => {

    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }

  });

});

// SHOW ELEMENTS ON PAGE LOAD
window.addEventListener("load", () => {

  fadeElements.forEach(el => {

    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }

  });

});

// ACCORDION FORM
function toggleSection(header) {

  const content = header.nextElementSibling;

  content.style.display =
    content.style.display === "block"
      ? "none"
      : "block";
}

// APPLICATION DATES
const today = new Date();

const month = today.getMonth() + 1;
const day = today.getDate();

const form = document.getElementById("applicationForm");
const closedMessage = document.getElementById("closedMessage");

// FEBRUARY (2 - 28)
const februaryOpen =
  month === 2 && day >= 2 && day <= 28;

// AUGUST (2 - 20)
const augustOpen =
  month === 8 && day >= 2 && day <= 20;

// SHOW / HIDE FORM
if (form && closedMessage) 

  if (februaryOpen || augustOpen) {

    form.style.display = "block";
    closedMessage.style.display = "none";

  } else {

    form.style.display = "none";
    closedMessage.style.display = "block";

  }
// TOGGLE SEARCH
function toggleSearch() {

  const search =
    document.getElementById("searchContainer");

  search.classList.toggle("active");

  // AUTO FOCUS
  document.getElementById("searchInput").focus();

}

// SEARCH ACTORS
function searchActors() {

  const input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const links =
    document.querySelectorAll(".menu-links a");

  links.forEach(link => {

    const text =
      link.textContent.toLowerCase();

    if (text.includes(input)) {

      link.style.display = "block";

    } else {

      link.style.display = "none";

    }

  });

}