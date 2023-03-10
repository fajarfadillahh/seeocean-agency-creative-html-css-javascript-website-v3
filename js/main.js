// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;

function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 2
    ? header.classList.add("sticky-action")
    : header.classList.remove("sticky-action");
}
window.addEventListener("scroll", stickyHeader);

// ===== SCROLLUP SECTION =====
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 250
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);

// ===== DARK MODE =====
if (localStorage.getItem("theme", "dark")) {
  setDarkMode();
}

function setDarkMode() {
  var setDark = document.documentElement.classList.toggle("dark");
  var emoticon = "";

  if (setDark) {
    localStorage.setItem("theme", "dark");
    emoticon = "☀️";
  } else {
    localStorage.removeItem("theme", "dark");
    emoticon = "🌙";
  }

  document.getElementById("theme-toggle").innerHTML = emoticon;
}
