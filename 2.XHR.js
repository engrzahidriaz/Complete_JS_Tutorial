// XHR requests --> XML HTTP Request
// XMLHTTPRequest send to server
// create server or use builtin APIs
// backend developer makes APIs for frontend developer
// here we use 'https://jsonplaceholder.typicode.com/posts' APIs
// by using these APIs, we send rquest to server
// browser send get request itself on url (above) and give json response
// json: JS object Notation

const URL = 'https://jsonplaceholder.typicode.com/posts';   // if write wrong url, give status Code: 404
const xhr = new XMLHttpRequest();   // it is object has different methods
// console.log(xhr);

// to send request to URL
// step-1: use 'open()' method
xhr.open('GET',URL);    // convention is to write request in capital letter eg GET

// xhr.onreadystatechange = function(){      // browser call this function, when state changed
//     // console.log(xhr);
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr.response);       // response is always in type of string
//         const response = xhr.response;
//         const data = JSON.parse(response);   // convert json response in JS object
//         console.log(data);
//     }
// }

xhr.onload = function(){              // browser call this function, when state is equal to 4 
    // console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();


