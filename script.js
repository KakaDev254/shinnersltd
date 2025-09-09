// Hero Slideshow
const slides = document.querySelectorAll(".hero-slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  index = (index + 1) % slides.length;
}
setInterval(showSlide, 5000);

// Mobile Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

// Modal functionality
const modal = document.getElementById("videoModal");
const btn1 = document.getElementById("openVideo");
const btn2 = document.getElementById("openVideo2");
const span = document.querySelector(".close");
const video = document.getElementById("mcVideo");

function openModal() {
  modal.style.display = "flex";
  video.currentTime = 0; // start from beginning
  video.play();
}

btn1.onclick = openModal;
btn2.onclick = openModal;

span.onclick = function () {
  modal.style.display = "none";
  video.pause();
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
    video.pause();
  }
};
