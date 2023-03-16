const arr = [35,33,65,98,58,66];

const newArr = arr.filter((num)=>{
    if(num%3==0 && num%2!=0){
        return true;
    }
})

console.log(newArr);