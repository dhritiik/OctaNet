document.addEventListener("DOMContentLoaded", function() {
    const attractionsContainer = document.querySelector('.attraction-container');
    const nextButton = document.getElementById('nextButton');

    nextButton.addEventListener('click', function() {
        attractionsContainer.scrollBy({
            top: 0,
            left: 300, // Width of one attraction box
            behavior: 'smooth'
        });
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

