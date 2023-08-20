const btn = document.querySelector('.btn');
const msgArea = document.querySelector('.initial');
console.log(btn, msgArea);

const actionFn = (e) => {
  //   e.preventDefault();
  let configText = msgArea.innerHTML;
  if (configText === '') {
    msgArea.innerHTML = `<h1 style="background-color:#8080ff; text-align:center; border-radius:5px;"><i>Hello PW</i></h1>`;
  } else {
    msgArea.innerHTML = '';
  }
};
