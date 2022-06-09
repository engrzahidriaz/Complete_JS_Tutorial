// Parameters Destructuring , use with Object
// mostly used in react

const person = {
    firstName : "zahid",
    gender : "male",
    age : 33
}

// function printdetail(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
// printdetail(person);


function printdetail({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printdetail(person);


