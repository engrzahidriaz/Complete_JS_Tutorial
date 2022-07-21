// Understand callbacks in general

// simple calling function step by step
// function myFunc1(){
//     console.log('function is going task-1');
// }
// function myFunc2(){
//     console.log('function is going task-2');
// }
// myFunc1();
// myFunc2();

// calling callBack function
// function myFunc1(callBack){
//     console.log('function is going task-1');
//     callBack()
// }
// function myFunc2(){
//     console.log('function is going task-2');
// }
// myFunc1(myFunc2);


// Another Example callBack function
// function getTwoNum(num1, num2, callback){
//     console.log(num1, num2);
//     callback(num1, num2);
// }
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// getTwoNum(3, 6, addTwoNumbers);


// Above Example callBack function with cheacking type
// function getTwoNum(num1, num2, callback){
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         callback(num1, num2);
//     }else{
//         console.log('wrong data type !!!')
//     }
// }
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// getTwoNum('3','6', addTwoNumbers);


// Above Example with Two callBack functions
// function getTwoNum(num1, num2, onSuccess, onFailure){
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         onSuccess(num1, num2);
//     }else{
//         onFailure();
//     }
// }
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// function notAddNumbers(){
//     console.log('wrong data type !!!')
// }
// getTwoNum('3','6', addTwoNumbers, notAddNumbers);


// Above Example with Two callBack functions directly
function getTwoNum(num1, num2, onSuccess, onFailure){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        onSuccess(num1, num2);
    }else{
        onFailure();
    }
}
getTwoNum(3, 6, function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}, function notAddNumbers(){
    console.log('wrong data type !!!')
});


