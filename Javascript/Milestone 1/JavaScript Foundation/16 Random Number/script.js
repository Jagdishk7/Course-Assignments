
// Self Invoking
// (()=>{

//     const output = document.getElementById('output');
    
//     const random = Math.floor(Math.random() * (100-1) +1)
//     console.log(random)
// })();


// visualized

const generate = ()=>{

    const output = document.getElementById('output');
    
    const random = Math.floor(Math.random() * (100-1) +1)
    // console.log(random)

    output.innerText = random;
}