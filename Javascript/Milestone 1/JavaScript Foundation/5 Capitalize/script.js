function submit(){
const input = document.getElementById('inputBox').value;
const outputBox = document.getElementById('outputBox');

const output = input[0].toUpperCase() + input.slice(1);

outputBox.innerText = output;
console.log(output)
}