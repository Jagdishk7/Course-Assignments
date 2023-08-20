let marks = [];
const btn = document.querySelector(".btn");
const inps = Array.from(document.querySelectorAll(".inp"));
const msg = document.querySelector(".msg");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  marks = [];
  let highest = 0;
  for (let i = 0; i < inps.length; i++) {
    marks.push(Number(inps[i].value));
  }
  for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);

    highest < marks[i] ? (highest = marks[i]) : (highest = highest);
  }
  msg.innerText = "The highest marks are " + highest;
});
