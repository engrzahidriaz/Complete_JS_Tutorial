// Filter Method 

const numbers = [1,3,2,4,8,6];

// filter the even numbers
// const isEven = function(number){
//     return number%2 ===0;
// }
// const evenNum = numbers.filter(isEven); 
// console.log(evenNum);


// const evenNum = numbers.filter(function(number){
//     return number%2 ===0;
// }); 
// console.log(evenNum);

// Arrow Function
const evenNum = numbers.filter(number => number%2 ===0); 
console.log(evenNum);