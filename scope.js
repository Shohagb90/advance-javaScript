let bonus = 20;//global

function sum(first, second){
    let result = first + second;

    if(result > 9){
        const mood = "happy";
        
        console.log(mood);
    }
    //console.log(mood);
    return result;
}

const output = sum(3, 7);
console.log(output);
console.log(bonus);