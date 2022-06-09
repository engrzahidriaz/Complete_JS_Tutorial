// Find Method
// find Method take 'call back' function as a input
// find Method work as a loop, call a function which pass a value of array/object each time

// find string of length 3

const myArray = ['hello','cat','dog','lion'];

// function isLength3(string){
//     return string.length === 3;
// }
// const ans = isLength3('doy');
// console.log(ans);

// from find method
const ans = myArray.find(string => string.length === 3);
console.log(ans);    // give first element whose length will be 3


////// EXAMPLE //////

const users = [
    {userId: 1, userName: 'zahid'},
    {userId: 2, userName: 'amjad'},
    {userId: 3, userName: 'fasih'},
    {userId: 4, userName: 'shahid'},
    {userId: 5, userName: 'Hadi'}
];
const myuser = users.find(user => user.userId === 3);
console.log(myuser);