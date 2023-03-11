
function result() {
    // getting elements by id
    const num1Val = document.getElementById("num1").value;
    const num2Val = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;
    const total = document.getElementById("total")

    // changing string to float
    let num1 = parseFloat(num1Val);
    let num2 = parseFloat(num2Val);

    // mathematical operations
    let add = num1 + num2;
    let sub = num1 - num2;
    let multi = num1 * num2;
    let divide = num1 / num2;


switch (operator) {
    case "+":
        total.innerText = add ;
        break;
    case "-":
        total.innerText = sub ;
        break;
    case "*":
        total.innerText = multi ;
        break;
    case "/":
        total.innerText = divide ;
        break;
   
    default:
        console.log("Invalid Operator")
        break;
   }
}
