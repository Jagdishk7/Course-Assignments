
function billSplitter(){
    const bill = {};

const dishName = document.getElementById('dishName').value;
const dishCost = document.getElementById('dishCost').value;
const num = document.getElementById('num').value;
const output = document.getElementById('output');


bill.dishName = dishName;
bill.costPerPerson = dishCost / num;
bill.totalCost = dishCost;
if(bill.dishName && bill.costPerPerson && bill.totalCost){
output.innerText = JSON.stringify(bill);
}
else{
    output.innerText = "Enter all Details";

}
}