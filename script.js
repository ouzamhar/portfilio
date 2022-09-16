const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav-list");

closeButton.addEventListener("click", () => {
  nav.style.display = "none";

  closeButton.style.display = "none";
  openButton.style.display = "block";
});
openButton.addEventListener("click", () => {
  nav.style.display = "flex";

  closeButton.style.display = "block";
  openButton.style.display = "none";
});
