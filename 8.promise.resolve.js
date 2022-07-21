// Promise.resolve and more about then method


const myPromise = Promise.resolve(5);
Promise.resolve(5).then(value =>{       // 'then()' method always return Promise
    console.log(value);
})


// function newPromise(){
//     return new Promise((resolve,reject)=> {
//         resolve('foo');
//     })
// }
// newPromise()
//     .then(value => {
//         console.log(value);
//     })

// Promise Chaining

function newPromise(){
    return new Promise((resolve,reject)=> {
        resolve('foo');
    })
}
newPromise()
    .then(value => {
        console.log(value);
        value += 'bar';
        return value       // this is not return value, it return Promise mean Prpmise.resolve(value)
    })
    .then(value => {
        console.log(value);
    })