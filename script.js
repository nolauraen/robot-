function transform(btn) {
  const card = btn.parentElement;
  const img = card.querySelector("img");

  img.style.opacity = "0";

  setTimeout(() => {
    img.src = "https://via.placeholder.com/300x200.png?text=CYBER+ROBOT+MODE";
    img.style.opacity = "1";
  }, 300);
}

function scrollToSection() {
  document.getElementById("models").scrollIntoView({
    behavior: "smooth"
  });
}