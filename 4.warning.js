// use of bind Method

const person1 = {
    firstName: 'zahid',
    age: 31,
    about: function(){   
        console.log(this.firstName, this.age)
    }
}

// person1.about();

// const myFunc = person1.about();
// myFunc;

// do'nt do this mistake
// const myFunc = person1.about;  // undefined
// myFunc();

const myFunc = person1.about.bind(person1);  
myFunc();

