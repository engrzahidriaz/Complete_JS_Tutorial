// query Selector
// Select elements using query Selector
// from query Selector, we can select anything not only id

const mainHeading = document.querySelector('#main-heading');  // select id
console.log(mainHeading);

const Header = document.querySelector('.header');  // select class, show first one
console.log(Header);

const formGroup = document.querySelectorAll('.form-group');  // select class, show all classes
console.log(formGroup);

// NOTE: id should be unique in html file, but class should be same