// string is immutable
let myName = 'Zahid';

// Indexing
console.log(myName[3]);

// Length
console.log(myName.length);

// space also count in length

// To find last index value
console.log(myName[myName.length-1]);

// // string Methods // //

// trim use to remove spaces
let firstName = '  zahid  '
console.log(firstName.length)
firstName.trim()
console.log(firstName.length) // string is immutable, save in new variable
trimName = firstName.trim()
console.log(trimName.length)

// toupperCase() and tolowerCase()
upperName = myName.toUpperCase()
console.log(upperName)
lowerName = myName.toLowerCase()
console.log(lowerName)

// slicing
let newName = myName.slice(1,3)
console.log(newName);