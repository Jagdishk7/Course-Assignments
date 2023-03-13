function countBtn(){
    const input = document.getElementById('inputBox').value;
    const output = document.getElementById('outputBox');

    let count = 0;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            count += 1;
        }
    }
    console.log(count)
    output.innerText = 'Total Vowels : ' + count;
}