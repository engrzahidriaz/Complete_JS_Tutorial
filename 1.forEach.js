// Important Array Methods 

//// forEach Method ////
// forEach Method take 'call back' function as a input
// forEach Method work as a loop, call a function which pass value and then index/key of array/object each time

// const numbers = [4,7,3,9,2];

// function mutiplyTwo(number, index){
//     console.log(index);
//     console.log(number*2);
// }
// mutiplyTwo(numbers[0],0);


// function mutiplyTwo(number, index){
//     console.log('index is:', index);
//     console.log(`${number}*2 : ${number*2}`);
// }
// mutiplyTwo(numbers[0],0);
// mutiplyTwo(numbers[1],1);
// mutiplyTwo(numbers[2],2);


// function mutiplyTwo(number, index){
//     console.log('index is:', index);
//     console.log(`${number}*2 : ${number*2}`);
// }

// for(let i=0; i<numbers.length; i++){
//     mutiplyTwo(numbers[i], i)
// }


// function myfunc(number, index){
//     console.log(`index is ${index} and number is ${number}`);
// }

// for(let i=0; i<numbers.length; i++){
//     myfunc(numbers[i], i)
// }

// // use forEach instad of above function, give same output 
// numbers.forEach(myfunc);
// // above function call myfunc again and again and pass number and then index each time



// const numbers = [4,7,3,9,2];

// numbers.forEach(function(number, index){
//     console.log(`index is ${index} and number is ${number}`);
// })


// numbers.forEach(function(number){    // always pass first argument as a number
//     console.log(number*2)
// })


// numbers.forEach(function(number, index){
//     console.log(`index is ${index} and number is ${number}`);
//     console.log(`${number}*2 : ${number*2}`)
// })


////// EXAMPLE //////
// print the userName 

const users = [
    {userName: 'zahid', age: 33},
    {userName: 'amjad', age: 31},
    {userName: 'fasih', age: 10},
    {userName: 'shahid', age: 35}
]

// users.forEach(function(value, key){
//     console.log(value.userName)
// })

// users.forEach(function(user){
//     console.log(user.userName)
// })

// Arrow function
// users.forEach(user => console.log(user.userName))

// you can solve above using 'for of' loop
for(let user of users){
    console.log(user.userName);
}