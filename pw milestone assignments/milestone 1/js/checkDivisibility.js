const inp = document.querySelector(".inp");
const addBtn = document.querySelector(".add");
const resultBtn = document.querySelector(".result-btn");
const result = document.querySelector(".result");
const arrBox = document.querySelector(".arr");

const arr = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  arr.push(Number(inp.value));
  arrBox.innerHTML = JSON.stringify(arr);
  inp.value = "";
});

resultBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const resultArr = [];
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (element % 3 == 0 && element % 2 != 0) {
        resultArr.push(element);
      }
    }
    result.innerText =
      "Numbers divisible by three but not by two are: " +
      JSON.stringify(resultArr);
  } else {
    result.innerText = "Add at least one element to the array";
  }
});
