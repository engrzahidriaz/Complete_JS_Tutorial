// Lexical Scope 
// JS work in lexical envirement


// function myApp(){
//     const myVar = 'value1';
//     function myfunc(){
//         console.log('inside myfunc')
//     }
    
//     console.log(myVar);
//     myfunc();
// }
// myApp();


// function myApp(){
//     const myVar = 'value1';
//     function myfunc(){
//         const myVar = 'value2';
//         console.log('inside myfunc', myVar)
//     }
    
//     console.log(myVar);
//     myfunc();
// }
// myApp();


// first of all, find value in function, not found find in outer function and so on....

// function myApp(){
//     const myVar = 'value1';
//     function myfunc(){
//         console.log('inside myfunc', myVar)
//     }
    
//     console.log(myVar);
//     myfunc();
// }
// myApp();


// const myVar = 'value1';  // global scope
// function myApp(){
//     function myfunc(){
//         console.log('inside myfunc', myVar)
//     }
    
//     console.log(myVar);
//     myfunc();
// }
// myApp();


const myVar = 'value1';  
function myApp(){
    function myfunc(){
        const myfunc1 = () => {
            console.log('inside myfunc', myVar)
        }
        myfunc1();
    }
    
    console.log(myVar);
    myfunc();
}
myApp();


