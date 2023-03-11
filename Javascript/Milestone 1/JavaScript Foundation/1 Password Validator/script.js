
function submit(){
    const psBox1 = document.getElementById('psBox1');
    const setPassword = psBox1.value;
    
    const psBox2 = document.getElementById('psBox2');
    const getPassword = psBox2.value ;
    const validation = document.getElementById('validation');

    if(getPassword==setPassword){
        validation.innerText = 'Congratulations Login Succesfull'
        validation.style.color = 'green';
        console.log("Password Matched. Password validation Successful.")
    }

    else{
        validation.innerText = 'Please Enter Correct Password';
        validation.style.color = 'red'
        console.log("Password didn't match. Password validation unsuccessful")
    }
}