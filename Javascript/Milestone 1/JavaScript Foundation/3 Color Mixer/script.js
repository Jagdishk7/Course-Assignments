function mix(){
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const output = document.getElementById('output');
    output.style.color ='white';

    
    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    output.style.backgroundColor = 'purple';
                    output.innerText = 'purple';
                    break;
                case 'yellow':
                    output.style.backgroundColor = 'orange';
                    output.innerText = 'orange';
                    break;
            
                default:
                    output.innerText = 'Invalid Color Combination';
                    output.style.color = 'black';
                    break;
            }
            break;

        case 'blue':
            switch (color2) {
                case 'red':
                    output.style.backgroundColor = 'purple';
                    output.innerText = 'purple';
                    break;
                case 'yellow':
                    output.style.backgroundColor = 'green';
                    output.innerText = 'green';
                    break;
                    
                    default:
                    output.innerText = 'Invalid Color Combination';
                    output.style.color = 'black';
                    break;
                }

            break;

            case 'yellow':
            switch (color2) {
                case 'blue':
                    output.style.backgroundColor = 'green';
                    output.innerText = 'green';
                    break;
                case 'red':
                    output.style.backgroundColor = 'orange';
                    output.innerText = 'orange';
                    break;
            
                default:
                    output.innerText = 'Invalid Color Combination';
                    output.style.color = 'black';
                    break;
            }
            break;
            
            default:
            output.innerText = 'Invalid Color Combination';
                    output.style.color = 'black';
            break;
        }

        // We can also use if else ladder to solve this problem

        // if(color1 == 'red' && color2=='blue' || color1=='blue' && color2 == 'red'){
        //     output.style.backgroundColor = 'purple';
        //     output.innerText = 'purple';
        // }
        // else if(color1 == 'red' && color2=='yellow' || color1=='yellow' && color2 == 'red'){
        //     output.style.backgroundColor = 'orange';
        //     output.innerText = 'orange';
        // }
        // else if(color1 == 'blue' && color2=='yellow' || color1=='yellow' && color2 == 'blue'){
        //     output.style.backgroundColor = 'green';
        //     output.innerText = 'green';
        // }
        // else{
        //     output.innerText = 'Invalid Color Combination';
        //     output.style.color = 'black'
        // }
    
    }