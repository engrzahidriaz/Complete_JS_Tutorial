// OPtional Chaining

const user = {
    firstName: 'zahid',
    // address: {houseNumber: '1234'}
}

console.log(user.firstName);
console.log(user.address);
// console.log(user.address.houseNumber);   // give error
console.log(user?.address?.houseNumber);   // does not give any error






