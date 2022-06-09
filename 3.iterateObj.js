//  how to iterate Objects
// two methods 1.for in loop, 2.Object.key

const person = {
    name: 'zahid',
    age: 32,
    "person hobby": ['reading','sleeping','listening']
}

// for in loop method //

// for(let key in person){
//     console.log(key);
// }

// for(let key in person){
//     console.log(person[key]);
// }

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key, ":" ,person[key]);
// }

// Object.key method //

console.log(Object.keys(person))

for(let key of Object.keys(person)){
    console.log(person[key])
}