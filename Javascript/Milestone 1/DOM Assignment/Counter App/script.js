let count = 0;
let outputValue = document.getElementById('outputValue');
function decrement(){
    count = count - 1;
    outputValue.innerText = count;

}

function increment(){
    count = count + 1;
    outputValue.innerText= count;
}

function reset(){
    count = count - count;
    outputValue.innerText = count;
}