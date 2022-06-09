// Map Method 

// map Method take 'call back' function as a input
// map Method work as a loop, call a function which pass value and then index/key of array/object each time
// mostly used in React


// const numbers = [3,5,4,9,2];

// const square = function(number){
//     return number * number;
// }

// const squreNum = numbers.map(square); // map method always make new array
// console.log(squreNum);
// // if function don't return any thing, answer will be undefined

// const squreNum = numbers.map(function(number){
//     return number * number;
// })
// console.log(squreNum);

// // Arrow function
// const squreNum = numbers.map(number => number * number)
// console.log(squreNum);


// const squreNum = numbers.map(function(number, index){
//     return `${index} , ${number}`;
// })
// console.log(squreNum);

////// EXAMPLE //////
// print the userName 

const users = [
    {userName: 'zahid', age: 33},
    {userName: 'amjad', age: 31},
    {userName: 'fasih', age: 10},
    {userName: 'shahid', age: 35}
]

const fisrtName = users.map(function(user){
    return user.userName;
});
console.log(fisrtName);