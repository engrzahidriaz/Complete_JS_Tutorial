// Default Parameters


// simple function
// function addTwo(a,b){
//     return a + b;
// }
// const result = addTwo(4,5);
// console.log(result)


// function with default parameter (old)
// function addTwo(a,b){
//     if(typeof b === 'undefined'){
//         b = 1;
//     }
//     return a + b;
// }
// const result = addTwo(4);
// console.log(result);


// function with default parameter (old)
function addTwo(a,b=1){
    return a + b;
}
const result = addTwo(4);
console.log(result);