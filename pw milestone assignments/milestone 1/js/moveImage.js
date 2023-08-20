const allBtns = Array.from(document.querySelectorAll('.move-btn'));
const img = document.querySelector('.img');

var left = Number(img.style.left);
var currtop = Number(img.style.top);
allBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('right')) {
      left += 10;
    }

    if (btn.classList.contains('left')) {
      left -= 10;
    }

    if (btn.classList.contains('up')) {
      currtop -= 10;
    }

    if (btn.classList.contains('down')) {
      currtop += 10;
    }

    img.style.left = left + 'px';
    img.style.top = currtop + 'px';
  });
});
