//const age = 4; //if age=0 only that time condition will be false
//const name = "shohag"; //if name=""; only that time condition will be false

//if(name){

//let name; //here undefined name that's why it will be false, also if we write
 //let name= null; it's also give false & Nan also false

//falsy list:
//0
//""
//undefined
// null
// NaN
// false

// Truthy List
// '0' or ' ' 
// []
// 'false'


// let   name= NaN; //falsy                         
// console.log(name);

// if (name) {
//     console.log("condition is true");    
// }
//  else {
//     console.log("condition is false");
// }

//
let   name= 12;                         

if (name || name ==0) {
    console.log("condition is true");    
}
 else {
    console.log("condition is false");
}