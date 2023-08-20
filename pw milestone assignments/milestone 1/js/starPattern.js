const inp = document.querySelector(".inp");
const addBtn = document.querySelector(".btn");
const result = document.querySelector(".result");
let str = "";

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < Number(inp.value); i++) {
    for (let j = Number(inp.value); j > i; j--) {
      str += "*";
    }
    str += "<br>";
  }

  result.innerHTML = str;
});
