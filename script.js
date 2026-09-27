const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(x => x.classList.remove("active"));
  btn.classList.add("active");
  const type = btn.dataset.filter;
  cards.forEach(card => card.style.display = (type === "all" || card.dataset.type === type) ? "" : "none");
}));

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
document.querySelectorAll(".image-button").forEach(btn => {
  btn.addEventListener("click", () => {
    modalImg.src = btn.dataset.img;
    modalTitle.textContent = btn.dataset.title;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("close").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });
document.getElementById("modalContact").addEventListener("click", closeModal);