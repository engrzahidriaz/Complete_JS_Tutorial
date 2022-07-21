// Promise and settimeout

// task: resolve/reject promise after 2 second

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = true;      // use 'false' for reject
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        }, 1000);
    });
}
myPromise()
    .then(()=>{console.log('resolved')})
    .catch(()=>{console.log('rejected')})