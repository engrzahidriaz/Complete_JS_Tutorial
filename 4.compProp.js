// Computed propeties

const key1 = 'myKey1';
const key2 = 'myKey2';

const value1 = 'myValue1';
const value2 = 'myValue2';

const obj1 = {
    key1 : value1,
    key2 : value2
};
 console.log(obj1);

const obj2 = {
    [key1] : value1,   // computed properties
    [key2] : value2
};
console.log(obj2);

const obj3 = {};
obj3[key1] = value1;
obj3[key2] = value2;
console.log(obj3);