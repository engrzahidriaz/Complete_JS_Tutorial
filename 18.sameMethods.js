// Same method in base class
// Method overriding
// modify the Method in parent/base class
// first search method in sub class then in parent/base class

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

class Dogs extends Animal{   
    constructor(name, age, speed){
        super(name, age);     
        this.speed = speed
    }
    // modify the 'eat()' in parent/base class
    eat(){
        return `Modified Eat: ${this.name} is eating`
    }
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

