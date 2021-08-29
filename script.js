const ham = document.querySelector(".ham")
const links = document.querySelector(".links")

ham.addEventListener("click", () => {
  links.classList.toggle("show")
})

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,
})
