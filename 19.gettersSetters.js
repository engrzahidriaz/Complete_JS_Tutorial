// Getters and setters

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('zahid','Riaz', 32);
// console.log(person1);              // call variable
// console.log(person1.firstName);    // call property
// console.log(person1.fullName());   // call method
// console.log(person1.fullName);     // show whole finction/method


// getters //

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }
//     // to use Methos as a property 
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('zahid','Riaz', 32);
// console.log(person1);              // call variable
// console.log(person1.firstName);    // call property
// console.log(person1.fullName);     // call function as property 

// Setters //

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // to change properties (firstName or lastName) after making object
//     setName(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person('zahid','Riaz', 32);
// console.log(person1);              
// console.log(person1.firstName);    
// console.log(person1.lastName);  

// use 'setName' method to change fistName and lastName
// person1.setName('fasih','zahid');
// console.log(person1.firstName);    
// console.log(person1.lastName);   

// 2nd method as below
// person1.firstName = 'fasih';
// person1.lastName = 'zahid'
// console.log(person1.firstName);    
// console.log(person1.lastName);  


// 3rd Method (setters)
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    // schange and split the fistName and lastName
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person('zahid','Riaz', 32);
console.log(person1);              
console.log(person1.firstName);    
console.log(person1.lastName);
person1.fullName = 'fasih zahid'
console.log(person1); 
console.log(person1.firstName);    
console.log(person1.lastName);
