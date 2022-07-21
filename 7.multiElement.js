// Select multiple elements

// get multiple Elements using getElement by class name

const navItems = document.getElementsByClassName('nav-item');   // HTMLCollection: give array like object, mean can iterate or indexing
console.log(navItems);
console.log(navItems[1]);
console.log(typeof navItems);           // it is object
console.log(Array.isArray(navItems));   // it is not array, it is array like object


// get multiple Elements using querySelectorAll

const navItems1 = document.querySelectorAll('.nav-item');   // NodeList: give array like object, mean can iterate or indexing
console.log(navItems1);
console.log(navItems1[1]);
console.log(typeof navItems1);           // it is object
console.log(Array.isArray(navItems1));   // it is not array, it is array like object