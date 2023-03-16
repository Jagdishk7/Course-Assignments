let i = prompt('Enter Row Length');
let star ='';
// External loop
for (let a = i; a >= 1; a--) {
  
  
  // printing star
  for (let k = 0; k < i; k++) {
    star += "*";
  }
  star += "\n";
  i--;
}
// console.log(star);
document.getElementById('stars').innerText = star