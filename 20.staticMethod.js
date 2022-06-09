// Static methods and properties
// Static methods --> methods which are relate to class
// All methods are relate to object/instant, method can call on object

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }
    // method that can call on class
    static classInfo(){
        return 'this is person class';
    }
    // All methods (below) can call on object
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

const person1 = new Person('zahid','Riaz', 32);
console.log(person1); 
// All methods are relate to object/instant, method can call on object
console.log(person1.eat());

// static method cannot call on object
// console.log(person1.classInfo());  // give error

// static method can call on class directly
const info = Person.classInfo();
console.log(info);


