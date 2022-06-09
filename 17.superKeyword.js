// Super Keyword 
// inherent same properties from parent/base class

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
// to add speed property, create constractor ofDogs class
class Dogs extends Animal{   
    constructor(name, age, speed){
        super(name, age);     // parent/base class also called super class
        this.speed = speed
    }
    // add a method
    run(){
        return `${this.name} is running at ${this.speed} kmph`;
    }
}

const dog1 = new Dogs('tommmy', 3, 45);
console.log(dog1);

// check Methods
console.log(dog1.speed);
console.log(dog1.eat());
console.log(dog1.run());
