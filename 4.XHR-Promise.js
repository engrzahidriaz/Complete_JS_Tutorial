// Promisifying XHR requests and chaining using then method

const URL = 'https://jsonplaceholder.typicode.com/posts'; 
function sendRequest(method, URL){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, URL);
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }else{
                reject(new Error('something went Wrong'));
            }
        }
        xhr.onerror = function(){
            reject(new Error('Something went Wrong'))
        }
        xhr.send();
    });
}

// const whatISThis = sendRequest('GET', URL);
// console.log(whatISThis);

sendRequest('GET', URL)
    .then(response =>{
        const data = JSON.parse(response);
        // console.log(data);
        return data;
    })
    .then(data =>{
        // console.log(data);
        // console.log(data[3].id);
        const Id = data[3].id;
        return Id;
    })
    .then(Id =>{
        // console.log(Id);
        const URL2 = `${URL}/${Id}`;
        // console.log(URL2);
        return sendRequest('GET', URL2)
    })
    .then(newResponse =>{
        // console.log(newResponse);
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error =>{
        console.log(error);
    })
