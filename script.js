function transform(btn) {
  const card = btn.parentElement;
  const img = card.querySelector("img");

  // эффект “исчезновения”
  img.style.opacity = "0";
  img.style.transform = "scale(0.8) rotate(5deg)";

  setTimeout(() => {
    if (img.dataset.state === "robot") {
      img.src = img.dataset.car;
      img.dataset.state = "car";
    } else {
      img.src = img.dataset.robot;
      img.dataset.state = "robot";
    }

    // эффект появления
    img.style.opacity = "1";
    img.style.transform = "scale(1) rotate(0deg)";
  }, 300);
}

function scrollToSection() {
  document.getElementById("models").scrollIntoView({
    behavior: "smooth"
  });
}