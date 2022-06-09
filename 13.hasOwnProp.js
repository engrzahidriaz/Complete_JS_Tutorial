// hasOwnProperty  --> use to see keys only in constractor function 
// Constructor function with new keyword


function CreateUser(firstName, lastName, email, age, address){ 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
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

// to see all keys
for(let key in user1){
    console.log(key);
}
// to see 'CreateUser' keys
console.log('after using hasOwnProperty')
for(let key in user1){
    if(user1.hasOwnProperty(key))
    console.log(key);
}
