// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll animations for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".animate").forEach((section) => {
  observer.observe(section);
});
document.querySelector(".menu-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector("nav ul").classList.toggle("active");
});
