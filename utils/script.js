var slideDuration = 5000; // Wechsel alle 5 Sekunden
var transitionSpeed = 1000; // Übergangsgeschwindigkeit (1 Sekunde)
var totalSlides = document.querySelectorAll('.splide__slide').length;
var totalDuration = totalSlides * slideDuration; // Gesamtzeit (für eine komplette Runde)

var splide = new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: slideDuration,
    perPage: 1,
    perMove: 1,
    heightRatio: 0.9,
    arrows: false,
    pagination: false,
    resetProgress: false,
    pauseOnHover: false,
    speed: transitionSpeed,
});

splide.mount();

function startProgressBar() {
    var progressBar = document.querySelector('.my-slider-progress-bar');
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    
    setTimeout(function () {
        progressBar.style.transition = 'width ' + totalDuration + 'ms linear';
        progressBar.style.width = '100%';
    }, 50);
}

splide.on('active', function (slide) {
    if (slide.index === 0) {
        startProgressBar(); // reset animation, bei beginn
    }
});

startProgressBar();
