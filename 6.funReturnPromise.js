// Function that returns promise 


function ricePromise(){
    const bucket = ['coffee','chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes('vegetables')&& bucket.includes('salt')&& bucket.includes('rice')){
            resolve('Fried Rice');
        }else{
            reject('could not do it')
        }
    });
}

ricePromise().then(            
    // when promise resolve
    (myfriedRice)=>{                      // 'myfriedRice' is return value of Promise
    console.log('let eat', myfriedRice);
    })
    // when promise reject
    .catch((error)=>{
    console.log('sorry', error)
    }
);

