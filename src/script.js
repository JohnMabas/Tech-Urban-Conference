const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");

btn.addEventListener("click", () => {
  const isHidden = menu.classList.toggle("hidden");
  btn.setAttribute("aria-expanded", String(!isHidden));
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});


