const name = document.getElementById("name");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameVal = name.value;
  const firstLetter = nameVal[0].toUpperCase();
  const restStr = nameVal.slice(1);
  const finalStr = firstLetter + restStr;
  console.log(finalStr);
  msg.innerText = "Name: " + finalStr;
});
