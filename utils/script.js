document.addEventListener("DOMContentLoaded", function () {
    var slideDuration = 20000; // Dauer pro Slide 
    var transitionSpeed = 500; // Übergangsgeschwindigkeit 
    var slides = document.querySelectorAll('.splide__slide').length;

    var splide = new Splide('.splide', {
        type: 'loop',
        autoplay: true,
        interval: slideDuration,
        perPage: 1,
        perMove: 1,
        heightRatio: 0.9,
        arrows: false,
        pagination: false,
        pauseOnHover: false,
        speed: transitionSpeed,
        drag: true,
        swipe: true
    });

    splide.mount();

    var progressBar = document.querySelector('.my-slider-progress-bar');
    var previousIndex = 0;
    var isBackward = false;

    function startProgressBar() {
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';

        setTimeout(() => {
            progressBar.style.transition = `width ${slideDuration}ms linear`;
            progressBar.style.width = '100%';
        }, 50);
    }

    function updateProgressBar() {
        var currentIndex = splide.index;

        if (currentIndex < previousIndex) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            isBackward = true;
        } else {
            isBackward = false;
            startProgressBar();
        }

        previousIndex = currentIndex;
    }

    splide.on('move', updateProgressBar);
    splide.on('moved', updateProgressBar);

    splide.on('move', function () {
        if (isBackward) {
            setTimeout(startProgressBar, 100);
        }
    });

    startProgressBar(); 
});
