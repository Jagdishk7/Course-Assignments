const para = document.querySelector('.para');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let paraText = para.innerText;
  const paraHighlighted = paraText
    .split(' ')
    .map((e) => {
      if (e.length > 8) {
        e = `<span style="background-color: yellow;">${e}</span>`;
      }
      return e;
    })
    .join(' ');

  para.innerHTML = paraHighlighted;
});
