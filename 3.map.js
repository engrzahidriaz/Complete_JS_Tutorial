// Map --> it is iterable
// store data in ordered fashion
// store data in key:value pair (like object)
// unique key only (no duplicates allowed)

// Objects --> keys only have string or symbol
// for in loop can apply

const person = {
    firstName: 'zahid',
    age: 32,
    1 : 'one'   // 1 store as a string
}
console.log(person.firstName);
console.log(person['firstName']);
console.log(person[1]);

for(let key in person){
    console.log(typeof key);
}

// maps --> can use anything as key: like array, number, string
// for of loop can apply

const person1 = new Map();
person1.set('firstName', 'zahid');  // add key:value pair
person1.set('age', 32);
person1.set(1, 'one');  // // 1 store as a number
person1.set([1,2,3], 'array');
person1.set({2: 'two'}, 'object');
console.log(person1);

console.log(person1['firstName']); // cannot use
console.log(person1[1]);           // cannot use

// key value can access using get() 
console.log(person1.get('firstName'));
console.log(person1.get(1));

// to print all keys
console.log(person1.keys());

for(let key of person1.keys()){
    console.log(key, typeof key);
}

for(let key of person1){
    console.log(key);
    console.log(typeof key);
    console.log(Array.isArray(key));
}

// for(let key, value of person1){   // cannot write with coma ,
//     console.log(key, value);  
// }

for(let [key, value] of person1){   // destructuring 
    console.log(key, value);  
}

////// EXAMPLE //////

const person2 = new Map([['firstName','zahid'],['age',32]]);
console.log(person2);

const person3 = {
    id: 1,
    firstName: 'zahid'
}
const person4 = {
    id: 2,
    firstName: 'fasih'
}

const extraInfo = new Map();
extraInfo.set(person3, {age: 8, gender: 'male'});
extraInfo.set(person4, {age: 6, gender: 'female'});
console.log(person3.id);
console.log(person4.firstName);
console.log(extraInfo.get(person3).age);
console.log(extraInfo.get(person4).gender);



