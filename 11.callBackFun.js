// Callback Function

// function callfun(a){
//     console.log(a);
//     console.log('hello word');
// }

// NOTE:
// 'a' may b any type: number, string, array, object and function as well
// call all one by one

// callfun(2);
// callfun("zahid");
// callfun([2,3,4]);
// callfun({name:'zahid', age:33});
// callfun("zahid");


// function myfunc(){
//     console.log('inside the func')
// }
// function callfun(a){
//     console.log(a);
// }
// callfun(myfunc);


// callback function example below
// function myfunc(){
//     console.log('inside the func')
// }
// function callfun(callback){   // write 'callback according to convension'
//     callback();
// }
// callfun(myfunc);


function myfunc(name){
    console.log('inside the func');
    console.log(`my name is ${name}`)
}
function callfun(callback){ 
    console.log('hello inside callfun and do....') 
    callback('zahid');
}
callfun(myfunc);