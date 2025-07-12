// Page load animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  const intro = document.querySelector(".intro");
  intro.style.opacity = "1";
  intro.style.transform = "translateY(0)";
});

// Optional: Flash effect on reload
window.onload = () => {
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100%";
  flash.style.height = "100%";
  flash.style.background = "white";
  flash.style.opacity = "0.9";
  flash.style.zIndex = "9999";
  flash.style.transition = "opacity 0.8s ease";
  document.body.appendChild(flash);
  setTimeout(() => {
    flash.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(flash);
    }, 800);
  }, 100);
};

// Card click to flip manually
const cards = document.querySelectorAll('.card-inner');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Optional: Auto-flip all cards every 10 seconds
// setInterval(() => {
//   cards.forEach(card => {
//     card.classList.toggle('flipped');
//   });
// }, 10000);