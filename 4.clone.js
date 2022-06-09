// Clone using Object.assign

// Obj and Obj1 add in memory as heap
// const Obj = {
//     key1: 'value1',
//     key2: 'value2'
// }
// const Obj1 = Obj;
// Obj.key3 = 'value3'

// console.log(Obj);
// console.log(Obj1);


// If you want to clone, use spread operator

const Obj = {
    key1: 'value1',
    key2: 'value2'
}
// const Obj1 = {...Obj};
const Obj1 = Object.assign({}, Obj);
Obj.key3 = 'value3'

console.log(Obj);
console.log(Obj1);