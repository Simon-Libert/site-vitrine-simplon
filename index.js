let carousel = document.querySelector(".carousel");
let back = document.querySelector(".back");
let next = document.querySelector(".next");
let current = 0;
let cellCount = 6;

const rotateCarousel = () => {
  const angle = current / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
  carousel.style.transition = 'all 0.75s ease-in-out';
}

back.addEventListener("click", () => {
  current--;
  rotateCarousel();
})

next.addEventListener("click", () => {
  current++;
  rotateCarousel();
})


