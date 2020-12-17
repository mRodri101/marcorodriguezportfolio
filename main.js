const parentmenuBtn = document.querySelector(".menu-btn");

const parentmenuItems = document.querySelector(".menu-items");
const parentmenuItem = document.querySelectorAll(".menu-item");

let menuShowing = false;
$('.menu-btn').click(function(){
  toggle();

  if(!menuShowing) {
    $('.sidenav').addClass("slidein").removeClass("slideout");
    menuShowing = true;
  } else {
    $('.sidenav').addClass("slideout").removeClass("slidein");
    menuShowing = false;
  }
})

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