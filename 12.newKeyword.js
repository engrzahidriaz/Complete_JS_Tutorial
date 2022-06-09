// New Keyword
// 1. automatically create empty object, eg this === {}
// 2. return empty object, eg return this
// 3. automatically create reference, no need to create refernce like "Object.create(createUser.prototype)"


// function createUser(fisrtName, age){
//     this.fisrtName = fisrtName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.fisrtName, this.age);
// }
// const user1 = new createUser('zahid', 31);
// console.log(user1);
// user1.about();


////// EXAMPLE //////

// Constractor Function
// start with capital letter, it is convention
function CreateUser(firstName, lastName, email, age, address){ 
    // new keyword add 'this' here automatically
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this; here automatically
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old` 
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.song = function(){
    return 'ta na na na';
};

const user1 = new CreateUser('zahid','Riaz','zahidriaz@gmail.com','32','my address');
const user2 = new CreateUser('shahid','Riaz','shahidriaz@gmail.com','36','my address');
const user3 = new CreateUser('fasih','zahid','fasihzahid@gmail.com','12','my address');
console.log(user1);
console.log(user2.about());
console.log(user3.song());
