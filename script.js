function transform(btn) {
  const card = btn.parentElement;
  const img = card.querySelector("img");

  if (img.dataset.state === "robot") {
    img.src = img.dataset.car;
    img.dataset.state = "car";
  } else {
    img.src = img.dataset.robot;
    img.dataset.state = "robot";
  }
}