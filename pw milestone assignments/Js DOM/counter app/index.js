const btns = Array.from(document.querySelectorAll(".btn"));

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let valueBox = document.querySelector(".output-box");
    let value = Number(valueBox.innerText);

    if (btn.classList.contains("decrease-btn")) {
      value -= 1;
      valueBox.innerText = value;
    } else if (btn.classList.contains("reset-btn")) {
      value = 0;
      valueBox.innerText = value;
    } else if (btn.classList.contains("increase-btn")) {
      value = value + 1;
      valueBox.innerText = value;
    }
  });
});
