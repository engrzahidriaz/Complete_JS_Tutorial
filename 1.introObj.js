// into to Objects
// reference type
// array are good but not sufficient for real world data
// store key : value pairs
// don't have index

// how to create objects
const person = {
    name: 'zahid',
    age: 32,
    hobby: ['reading','sleeping','listening']
}
console.log(person);
console.log(typeof person);

// how to access data from objects
console.log(person.name);
console.log(person.hobby);

// how to add key value pair in object
person.gender = 'male';
console.log(person);