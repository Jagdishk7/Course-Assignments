const cardBox = document.querySelector(".card-box");
const allCards = Array.from(document.querySelectorAll(".card"));

allCards.forEach((card) => {
  if (window.innerWidth > "1100") {
    card.classList.add("positioned");
  } else {
    card.classList.remove("positioned");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > "1100") {
    allCards.forEach((card) => card.classList.add("positioned"));
  } else if (window.innerWidth < "1100") {
    allCards.forEach((card) => card.classList.remove("positioned"));
  }
});
