const inp = document.querySelector(".inp");
const addBtn = document.querySelector(".add");
const cartItems = document.querySelector(".cartItems");

const items = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  items.push(inp.value.toLowerCase());
  const uniqueItems = Array.from(new Set([...items]));
  console.log(uniqueItems);
  cartItems.innerText = JSON.stringify(uniqueItems);
  inp.value = "";
});
