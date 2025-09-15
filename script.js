// === Animate Box ===
function animateBox() {
  const box = document.getElementById("box");
  box.classList.add("animate");
  // remove class after animation ends so it can retrigger
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
}

// === Card Flip ===
function flipCard(container) {
  const card = container.querySelector(".card-flip");
  card.classList.toggle("flipped");
}

// === Loader Toggle ===
function toggleLoading() {
  const loader = document.getElementById("loader");
  loader.classList.toggle("spin");
}

// === Modal Functions ===
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  // fade out before hiding
  modal.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animation = "fadeIn 0.5s"; // reset for next open
  }, 500);
}
