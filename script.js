const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[currentSlide].style.display = "block";
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)

function changeBackground() {
  const photoInput = document.getElementById("photoInput");
  const file = photoInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const imageURL = e.target.result;
      document.body.style.backgroundImage = `url('${imageURL}')`;
    };

    reader.readAsDataURL(file);
  }
}
