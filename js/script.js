const sliderElement = document.querySelector('.slider');
const slideInClass = 'slide-in';
let currentSlide = 0;
const slides = sliderElement.children;
const totalSlides = slides.length;

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const sliderTop = sliderElement.getBoundingClientRect().top + scrollTop;

  if (scrollTop > sliderTop) {
    sliderElement.classList.add(slideInClass);
  } else {
    sliderElement.classList.remove(slideInClass);
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
    for (let i = 0; i < totalSlides; i++) { 
        slides[i].classList.remove('active');
        }
    slides[currentSlide].classList.add('active');
    
}

function startSlideshow() {
  setInterval(nextSlide, 3000);
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', startSlideshow);
