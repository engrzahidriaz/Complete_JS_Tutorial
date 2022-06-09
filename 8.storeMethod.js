// Factory functions & discuss some memory related problems

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old` 
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     };
//     return user
// }
// const user1 = createUser('zahid','Riaz','zahidriaz@gmail.com','32','my address');
// const user3 = createUser('shahid','Riaz','shahidriaz@gmail.com','36','my address');
// const user4 = createUser('fasih','zahid','fasihzahid@gmail.com','12','my address');

// If we create thousands of user, each time we create Methods (about and is18)
// So lot of memory use for it.

// First solution to that problem
// store Method in different object

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old` 
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // to store reference of methods
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user
}
const user1 = createUser('zahid','Riaz','zahidriaz@gmail.com','32','my address');
const user2 = createUser('shahid','Riaz','shahidriaz@gmail.com','36','my address');
const user3 = createUser('fasih','zahid','fasihzahid@gmail.com','12','my address');

console.log(user2.about());
console.log(user3.about());


