// Class Practics and Extendd ketword
// Example using class keyword

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// }

// // create Objects of class
// const animal1 = new Animal('tom', 2);
// console.log(animal1);

// // check Methods
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// class Dogs{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// }

// // create Objects/instant of class
// const dog1 = new Dogs('tommmy', 3);
// console.log(dog1);

// // check Methods
// console.log(dog1.eat());
// console.log(dog1.isSuperCute());
// console.log(dog1.isCute());


// Extends Keyword
// if both classes have same property then we use extends keyword
// sub class have same property (methods, functions, names) of parent/base class


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

class Dogs extends Animal{   // Dogs class is Sub class of Animal Class which is perent/base class

}
// object/instant of Dogs class
const dog1 = new Dogs('tommmy', 3);
console.log(dog1);

// check Methods
console.log(dog1.eat());
console.log(dog1.isSuperCute());
console.log(dog1.isCute());