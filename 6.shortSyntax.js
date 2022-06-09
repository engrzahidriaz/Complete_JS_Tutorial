
// const person1 = {
//     firstName: 'zahid',
//     age: 31,
//     about: function(){   
//         console.log(this.firstName, this.age)
//     }
// }


// Short syntax for methods

const person1 = {
    firstName: 'zahid',
    age: 31,
    about(){   
        console.log(this.firstName, this.age)
    }
}
person1.about();