var cart =['mango','orange','mango', 'lichi']

function removeDuplicates(cart){
    return cart.filter((item,index)=> {
        return cart.indexOf(item) === index 
    })
}

console.log(removeDuplicates(cart))
