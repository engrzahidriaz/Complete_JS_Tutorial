// Classes
// Class Keyword
// Classes are fake in JS


// function CreateUser(firstName, lastName, email, age, address){ 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }

// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old` 
// };
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// CreateUser.prototype.song = function(){
//     return 'ta na na na';
// };


// In class, we create all function 
class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log('Class constrctor called')
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old` 
    }
    is18(){
        return this.age >= 18;
    }
    song(){
        return 'ta na na na';
    }
}
// class constractor acannot called without 'new' keyword
const user1 = new CreateUser('zahid','Riaz','zahidriaz@gmail.com','32','my address');
const user2 = new CreateUser('shahid','Riaz','shahidriaz@gmail.com','36','my address');
const user3 = new CreateUser('fasih','zahid','fasihzahid@gmail.com','12','my address');

console.log(user1.firstName);
console.log(user2.song());
console.log(user3.is18());

console.log(Object.getPrototypeOf(user1));