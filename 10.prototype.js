// prototype

function hello(){
    console.log('hello word');
}
console.log(hello.name);    // name property gives function name

// Function in JS --> function + Object

// you can add more properties
hello.myOwnProp = 'Add new Property';
console.log(hello.myOwnProp);

// Function provides more useful property

// Prototype: Function also provide free space mean Object '{}' which is called prototype
// prototype is object which has only one property that is constractor to add key:value pair
console.log(hello.prototype); 

// only function provide prototype property
if(hello.prototype){
    console.log('prototype is present')
}else{
    console.log('prototype is not present')
}

// const hello = {key: 'value'}
// if(hello.prototype){
//     console.log('prototype is present')
// }else{
//     console.log('prototype is not present') // not for objects or array
// }

hello.prototype.abc = 'abc';   // to add property
hello.prototype.xyz = 'xyz';
console.log(hello.prototype);

hello.prototype.sing = function(){  // to add function
    return 'prototype function song'
}
console.log(hello.prototype.sing());

