// Reset Parameters

// function myFunc(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(2,3,4,5,6,7);  // 5,6,7 will not declear


// function myFunc(a,b,...c){     // rest of paramets are shown in c
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(2,3,4,5,6,7);


// function myFunc(a,b,...c){     // rest of paramets are shown in c as array
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }
// myFunc(2,3,4,5,6,7);


// add all given parameters
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = addAll(2,3,4,5,6,7);
console.log(ans);