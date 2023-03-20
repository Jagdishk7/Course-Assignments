


const calculate = ()=>{
    const originalPrice = document.getElementById('originalPrice').value;
    const discountedPrice = document.getElementById('discountedPrice').value;
    const output = document.getElementById('output');
    
    const totalDiscount = ((originalPrice- discountedPrice) / originalPrice ) * 100;
    output.innerText = "Discount is : "+ totalDiscount.toFixed(2) + "%";
}