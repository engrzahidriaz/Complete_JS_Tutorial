// Block Scope vs Function Scope
// Block Scope --> let and const , you can access in same block
// Function Scope --> var

// following function give error, beacuse let is not access out of block
// {
//     let firstName = 'zahid';
// }
// console.log(firstName);


// {
//     let firstName = 'zahid';  // it is seperate block
//     console.log(firstName);
// }
// {
//     let firstName = 'fasih';  // it is seperate block
//     console.log(firstName);
// }
// let firstName = 'shahid';  // it is global block
// console.log(firstName);


// following function don't give error, beacuse var can access out of block
// whole file is consider as main function (function scope)
// {
//     var firstName = 'zahid';
// }
// console.log(firstName);


// {
//     let firstName = 'zahid'; 
// }
// {
//     let firstName = 'fasih'; 
//     console.log(firstName); // can access from other block
// }


//// Applications ////

// let give error
// if(true){
//     let myName = 'zahid';
//     console.log(myName);
// }
// console.log(myName);

if(true){
    var myName = 'zahid';
    console.log(myName);
}
console.log(myName);





