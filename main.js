let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for(let item of slides) {
    item.style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  for(let dot of dots) {
    dot.className = dot.className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  setTimeout(showSlides, 2500);
}