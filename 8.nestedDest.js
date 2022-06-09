// Nested destructuring

const users = [
    {userID : 01, firstName : 'zahid', gender : 'male'},
    {userID : 02, firstName : 'fasih', gender : 'male'},
    {userID : 03, firstName : 'Fatima', gender : 'female'}
]

// const [user1, user2, user3] = users // user1 give first whole object
// console.log(user1)   

const [{firstName}, , {gender}] = users //  give value of firstName of first object
console.log(firstName);
console.log(gender);

// change variable name
const [{firstName: newName}, , user3] = users 
console.log(newName);