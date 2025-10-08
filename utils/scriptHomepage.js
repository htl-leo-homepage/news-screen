document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    focus: 'center',
    gap: '2rem',
    padding: { left: '20%', right: '20%' }, 
    autoplay: true,
    interval: 20000,
    arrows: true,
    pagination: false,
    pauseOnHover: false,
    speed: 500,
    drag: true,
    swipe: true,
  });

  splide.mount();
});
