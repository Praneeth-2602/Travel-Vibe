const slides = document.querySelectorAll('.card');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    const backgroundImage = window.getComputedStyle(slides[currentSlide]).getPropertyValue('background-image');
    // Store the background image in a variable or use it as needed
    videoContainer.style.backgroundImage = backgroundImage;
    videoContainer.style.backgroundSize = 'cover';
    videoContainer.style.backgroundRepeat = 'no-repeat';
    videoBG.remove();
}

function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    const backgroundImage = window.getComputedStyle(slides[currentSlide]).getPropertyValue('background-image');
    // Store the background image in a variable or use it as needed
    videoContainer.style.backgroundImage = backgroundImage;
    videoBG.remove();
}

const videoContainer= document.querySelector('.video-container');
const videoBG = document.querySelector('#video-bg');