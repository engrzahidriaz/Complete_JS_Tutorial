// Spread Operator in Array and Object

// Spread Operator in Array //

const arr = [..."zahid"];  // spread the elements of arr
console.log(arr);

const arr1 = [1, 2, 3];
const arr2 = [6, 7, 8];

const newArr1 = [...arr1];  // colon value arr1 in newArr1, copy elements of arr1
console.log(newArr1);

const newArr2 = [...arr1, ...arr2];  
console.log(newArr2);

const newArr3 = [...arr1, ...arr2, 55, 88];  
console.log(newArr3);

// Spread Operator in Object //

const obj = {..."zahid"};  // spread the elements of obj
console.log(obj);
const obj0 = {..."abcdefghijklmnopqrstvuwxyz"};  
console.log(obj0);
const objArr = {...['item1','item2']};  
console.log(objArr);

const obj1 = {
    key1 : 'value1',
    key2 : 'value2'
};
const obj2 = {
    key3 : 'value3',
    key4 : 'value4'
};
const newObj = {...obj1, ...obj2, key:'value'}
console.log(newObj)







