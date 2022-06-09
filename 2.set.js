// Set --> it is iterable
// store data
// set also have its own methods
// no index-based access
// ordered is not guaranteed 
// unique items only (no duplicates allowed)

const numbers = new Set([1,2,3]);
console.log(numbers);
console.log(numbers[1]);  // no index-based access

const items = ['item1','item2','item3'];
const numbers1 = new Set();
numbers1.add(1);
numbers1.add(2);
numbers1.add(2);      // no duplicates allowed
numbers1.add(['item1','item2']);
numbers1.add(['item1','item2']);  // same Array can add, beacuse add on different location
numbers1.add(items);
numbers1.add(items);  // no duplicates allowed
console.log(numbers1);

// check element in set
// if(numbers1.has(1)){
//     console.log('1 is present');
// }else{
//     console.log('1 is not present')
// }

// set is iterable
for(let number of numbers1){
    console.log(number);
}

////// EXAMPLE //////

// set use where unique items are required
// const ids = Set() // already explain

const myArray = [1,2,4,4,5,6,5,6]
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

console.log(uniqueElements.length); // cannot use

// to find length
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);

