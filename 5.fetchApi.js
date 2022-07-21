// Fetch API
// fetch send GET request itself
// only one line use for all process (done in previous file)

const URL = 'https://jsonplaceholder.typicode.com/posts'; 

// const whatIsThis = fetch(URL);              // it return Promise
// console.log(whatIsThis);

// fetch(URL)
//     .then(response =>{
//         // console.log(response);
//         // console.log(response.json());       // it also return Promise
//         return response.json();
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error =>{                // fetch only reject when network related error occure
//         console.log(error);
//     })



// fetch(URL)
//     .then(response =>{
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('something went Wrong !!!')
//         }
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error =>{                // it works when response is 'ok'
//         console.log('inside catch')
//         console.log(error);
//     })



fetch(URL,{
    method: 'POST',                   // 'POST' use to create data
    body: JSON.stringify({            // convert object into json form
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('something went Wrong !!!')
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{                // it works when response is 'ok'
        console.log('inside catch')
        console.log(error);
    })