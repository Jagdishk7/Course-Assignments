const list = ["HTML and Semantics","Starting with CSS","Working Template","Mobile responsive webpages"];
let i =0;
const add = () => {

  
  if(i>=list.length){
    alert("No Item Left")
  }
  else{
    const output = document.getElementById("output");
  const element = document.createElement('li');
  element.innerHTML= list[i];
  output.appendChild(element);
  i++
  }
};
