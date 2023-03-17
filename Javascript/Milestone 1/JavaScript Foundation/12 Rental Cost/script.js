function calculateBtn(){
    const days = document.getElementById('days').value;
    const carType = document.getElementById('carType').value;
    const output = document.getElementById('output');

    if(carType==='Economy'){
        output.innerText = 'Rs. ' + days * 4000;
    }
    else if(carType==='Midsize'){
        output.innerText = 'Rs. ' + days * 10000;
    }
    else if(carType==='Luxury'){
        output.innerText = 'Rs. ' + days * 20000;
    }
}