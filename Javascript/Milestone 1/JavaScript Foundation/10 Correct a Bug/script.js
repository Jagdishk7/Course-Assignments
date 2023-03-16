const cart = [
    {
        item: 'mango',
        price:10
    },
    {
        item: 'orange',
        price:9
    },
    {
        item: 'papaya',
        price:8
    },
    {
        item: 'banana',
        price:7
    }
];


cart.forEach((prod)=>{
    prod.price = prod.price * 2;
})

console.log(cart);