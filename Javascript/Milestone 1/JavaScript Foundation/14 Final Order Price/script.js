

var cart = [];

function addItem(){
var itemName = document.getElementById('itemName').value;
var itemCost = document.getElementById('itemCost').value;
var quantity = document.getElementById('quantity').value;
    let obj = {};

    obj.itemName = itemName;
    obj.itemCost = itemCost;
    obj.quantity = quantity;
    obj.itemTotal = itemCost*quantity;

    cart=[...cart,obj];
    const cartView = document.getElementById('cartView');
    cartView.innerText = JSON.stringify(cart);
};

function calculate(){
    let totalCost = 0;
    cart.forEach((item)=>{
        totalCost += item.itemTotal;
    })
    const total = document.getElementById('total');
    total.innerText = 'Total Cost : Rs. ' + totalCost;
}

