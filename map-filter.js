const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }
// //or
// const square = element => element * element;
// //or
// const square = x => x * x;


// // numbers.map(function(element, index, array){
// //     console.log(element, index, array);
// // })

// const result = numbers.map(function(element){
//     return element * element;
// })
//or
// const result = numbers.map(x => x * x)

// //console.log(output);
// console.log(result);

const bigger = numbers.filter( x => x > 5);
console.log(bigger);

const isThere = numbers.find( x => x > 5);
console.log(isThere);