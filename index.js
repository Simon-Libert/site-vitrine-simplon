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

$(document).ready(function () {
  // var test = $('#map-container').hasClass('mapit');
  var test = window.google != undefined;

  $('.ismap').click(function () {
    console.log("Map is clicked");
    $gmap = true;
    $mapit = false;

    yepnope({
      test: test,
      yep: {
        "alreadyLoaded": "timeout=1!"
      },
      nope: {
        "googleMap": "https://maps.google.com/maps/api/js?v=3&sensor=true&callback=initMap"
      },
      callback: {
        "alreadyLoaded": function () {
          console.log("Already Loaded");
          initMap();
        }
      },
      complete: function (url, result, key) {
        console.log("Complete");
      }
    });
    console.log("I should run before YepNope");
  });

});
