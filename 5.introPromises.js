// Intro to promises --> future value: resolve or reject
// Microtask Queue: it addd in '.then()'

console.log('script start');

const bucket = ['coffee','chips','vegetables','salt','rice'];

const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables')&& bucket.includes('salt')&& bucket.includes('rice')){
        resolve('Fried Rice');
    }else{
        reject('could not do it')
    }
});

// produce


// consume --> it is browser function

// friedRicePromise.then((myfriedRice)=>{      // 'then' take a function, that perform when promise resolve
//     console.log('let eat', myfriedRice);
// });


// friedRicePromise.then(            // 'then' take another function
//     // when promise resolve
//     (myfriedRice)=>{      
//     console.log('let eat', myfriedRice);
//     },
//     // when promise reject
//     (error)=>{
//     console.log('sorry', error)
//     }
// );


friedRicePromise.then(            
    // when promise resolve
    (myfriedRice)=>{      
    console.log('let eat', myfriedRice);
    })
    // when promise reject
    .catch((error)=>{
    console.log('sorry', error)
    }
);

setTimeout(()=>{          // it is also browser function
    console.log('Hello from setTimeout')
},0)

for(i=0; i<100; i++){
    console.log(Math.random(), i);
}

console.log('script start');