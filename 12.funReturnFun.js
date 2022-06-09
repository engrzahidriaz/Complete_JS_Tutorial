// Function Return Function

// function return anything like number, string, array, object even the another function
function myfunc1(){
    return 3;   // number
}
const ans1 = myfunc1();
console.log(ans1);


function myfunc2(){
    return 'abc';  // string
}
const ans2 = myfunc2();
console.log(ans2);


function myfunc3(){
    return [4,5,6,7];  // array
}
const ans3 = myfunc3();
console.log(ans3);


function myfunc4(){
    return {name:'zahid', age: 33};  // object
}
const ans4 = myfunc4();
console.log(ans4);


// function myfunc(){
//     function hello(){
//         console.log('inside hello fun')
//     }
//     return hello;  // function
// }
// const ans = myfunc();
// console.log(ans);
// ans();


// function myfunc(){
//     function hello(){
//         return 'inside hello fun';
//     }
//     return hello;  // function
// }
// const ans = myfunc();
// console.log(ans());


function myfunc(){
    return function hello(){
        return 'inside hello fun';
    }
}
const ans = myfunc();
console.log(ans());