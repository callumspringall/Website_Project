/* Use event listener to only load JS after HTML has loaded to avoid console errors */

document.addEventListener("DOMContentLoaded", () => {

/* Set constants for slides and buttons to cycle through slideshow images on index.html */

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

/* Set current slide as the first one */

let currentIndex = 0;

/* Remove active flag for all slides, apply the flag to the index slide */ 

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

/* Add or subtract 1 from the slide index to cylce through slideshow images */

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

/* Execute the nextSlide or prevSilde functions on click */

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

});