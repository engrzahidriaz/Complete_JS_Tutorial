// Iterables  --> for of loop can be applied
// string and Array are iterables

const firstName = 'zahid';
for(let char of firstName){
    console.log(char);
}

const items = ['item1','item2','item3'];
for(let item of items){
    console.log(item);
}

// const users = {key1: 'value1', key2: 'value2' }
// for(let user of users){
//     console.log(user);  // give error, object is not iterable
// }

// Array like object --> which has length property,and can access with index
// string is array like object

const myName = 'zahid';
console.log(myName.length);
console.log(myName[2])

