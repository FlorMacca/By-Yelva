/*const navToggle = document.querySelector(".nav_toggle")
const navMenu = document.querySelector(".nav_menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible")
});*/
const nav = document.querySelector(".nav_menu")

document.querySelector(".nav_toggle").addEventListener("click", e => {
  e.preventDefault()

  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible")
  } else {
    nav.classList.add("visible")
  }
})