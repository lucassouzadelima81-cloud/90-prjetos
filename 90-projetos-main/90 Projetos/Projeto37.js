let currentIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide(){
  currentIndex++;
  if(currentIndex >= slides.length){
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide(){
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}