/*
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector(".menu-items")
let menuOpen = false;

// main toggle
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuItems.classList.remove('open');
});
*/
const parentmenuBtn = document.querySelector(".menu-btn");
const parentmenuItems = document.querySelector(".menu-items");
const parentmenuItem = document.querySelectorAll(".menu-item");

// main toggle
parentmenuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
parentmenuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (parentmenuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
    parentmenuBtn.classList.toggle("open");
    parentmenuItems.classList.toggle("open");
}