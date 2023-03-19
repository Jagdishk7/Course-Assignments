var itemName = document.getElementById('itemName').value;
var itemCost = document.getElementById('itemCost').value;
var quantity = document.getElementById('quantity').value;

var final = [];

function addItem(){
final.map(element => {
    element.itemName = itemName;
    element.itemCost = itemCost;
    element.quantity = quantity;
    final.push(...element)
});
console.log(final);
}
