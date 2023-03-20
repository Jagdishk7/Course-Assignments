

var cart = [];

const addItem = () =>{
const itemName = document.getElementById('itemName').value;
const itemCost = document.getElementById('itemCost').value;
const quantity = document.getElementById('quantity').value;
    let obj = {};

    obj.itemName = itemName;
    obj.itemCost = itemCost;
    obj.quantity = quantity;
    obj.itemTotal = itemCost*quantity;

    cart=[...cart,obj];
    const cartView = document.getElementById('cartView');
    cartView.innerText = JSON.stringify(cart);
};

const calculate = () =>{
    let totalCost = 0;
    cart.forEach((item)=>{
        totalCost += item.itemTotal;
    })
    const total = document.getElementById('total');
    total.innerText = 'Total Cost : Rs. ' + totalCost;
}

