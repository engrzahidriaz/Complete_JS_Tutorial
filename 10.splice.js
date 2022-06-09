// Splice Method
// start,   delete,   insert  

// splice Method call a function which pass a start, delete and insert arguments in array/object each time

const myArray = ['item1','item2','item3','item4','item5']

// Delete
// myArray.splice(2,2)
// console.log(myArray);
// const deleteditem = myArray.splice(2,2) // to show deleted item
// console.log('deleted Item:', deleteditem);

// Insert
// myArray.splice(2,0, 'inserteditem')
// console.log(myArray);

// delete and insert
myArray.splice(2,2, 'inserteditem')
console.log(myArray);





