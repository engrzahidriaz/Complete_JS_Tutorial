// Arrow Function
// 'this' will not use in arrow function
// Arrow function take 'this' from surrounding

const user1 = {
    firstName: 'zahid',
    age: 31,
    about: () => {   
        console.log(this.firstName, this.age)
    }
}
user1.about();