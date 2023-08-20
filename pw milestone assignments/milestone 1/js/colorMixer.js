const btn = document.getElementById("mix");
const output = document.getElementById("output");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

col1.addEventListener("change", () => {
  col1.style.backgroundColor = col1.value;
});

col2.addEventListener("change", () => {
  col2.style.backgroundColor = col2.value;
});

btn.addEventListener("click", () => {
  const col1 = document.getElementById("col1").value;
  const col2 = document.getElementById("col2").value;
  if (col1 == "red" && col2 == "red") {
    output.value = "red";
    output.style.backgroundColor = "red";
  }
  if (col1 == "blue" && col2 == "blue") {
    output.value = "blue";
    output.style.backgroundColor = "blue";
  }
  if (col1 == "yellow" && col2 == "yellow") {
    output.value = "yellow";
    output.style.backgroundColor = "yellow";
  }
  if (col1 == "red" && col2 == "blue") {
    output.value = "purple";
    output.style.backgroundColor = "purple";
  }
  if (col1 == "red" && col2 == "yellow") {
    output.value = "orange";
    output.style.backgroundColor = "orange";
  }
  if (col1 == "blue" && col2 == "yellow") {
    output.value = "green";
    output.style.backgroundColor = "green";
  }
  if (col1 == "blue" && col2 == "red") {
    output.value = "purple";
    output.style.backgroundColor = "purple";
  }
  if (col1 == "yellow" && col2 == "red") {
    output.value = "orange";
    output.style.backgroundColor = "orange";
  }
  if (col1 == "yellow" && col2 == "blue") {
    output.value = "green";
    output.style.backgroundColor = "green";
  }
});
