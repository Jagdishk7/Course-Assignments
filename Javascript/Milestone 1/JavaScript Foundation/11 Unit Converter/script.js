function convertBtn(){
    const celsius = document.getElementById('celsius').value;
    const output = document.getElementById('output');

    const fTemp = (celsius * 9/5)+32
    output.innerText = fTemp + ' F';
}