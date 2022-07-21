// Get and set attributes
// NOTE: id, class, name, type, href, placeholder, etc are attributes

const link = document.querySelector('a');   // give first 'a' reference link
// console.log(link);

// getattributes() --> it is method
console.log(link.getAttribute('href'));    // give the value of 'href' (attribute) of first 'a'
console.log(link.getAttribute('href').slice(1));    // give home instant of #home

// chnage the attribute
link.setAttribute('href', 'https://codprog.com');
console.log(link.getAttribute('href')); 

// const inputElement = document.querySelector('.form-todo input');
// console.log(inputElement);
// console.log(inputElement.getAttribute('type'));