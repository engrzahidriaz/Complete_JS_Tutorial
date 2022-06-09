// This Keyword
// 'This' --> it is global object

console.log(this);   // give window object have lot of methods
console.log(window);  // same as above

console.log(this === window);

// function myFunc(){            // myFunc is added in window object
//     console.log('hello dear');
// }
// myFunc();
// window.myFunc();   // can write this, beacuse window call myFunc function

function myFunc(){            
    console.log(this);   // print window object
}
myFunc();


// function myFunc(){     
//     'use strict'       
//     console.log(this);   // show undefined
// }
// myFunc();