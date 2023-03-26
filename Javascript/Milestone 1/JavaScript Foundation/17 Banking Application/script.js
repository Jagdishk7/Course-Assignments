

let account = {
    name: 'admin',
    balance: '9999999999'
}

const withdraw = ()=>{
    const withdraw = document.getElementById('withdraw').value;
    const output = document.getElementById('output');
    
    

  account.balance = account.balance - withdraw;

    
    output.innerText = withdraw + " Rupees debited from your account and Remaing Balance is : " + account.balance 
}

