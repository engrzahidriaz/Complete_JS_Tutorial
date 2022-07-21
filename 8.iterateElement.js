// Loop

// get multiple Elements using getElement by class name

// let navItems = document.getElementsByTagName('a');   // HTMLCollection
// console.log(navItems);

// to color green, background white of 'nav-items' class

// to iterate 'navItems'
// 1. simple for loop
// 2. for of loop
// 3. forEach method  (but cannot use for HTMLCollection)

// 1. simple for loop
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'red';
//     navItem.style.fontWeight = 'bold';
// }

// 2. for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'red';
//     navItem.style.fontWeight = 'bold';
// }

// 3. forEach Method
// navItems.forEach(navItem => {                     // cannot use for HTMLCollection. give error
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'red';
//     navItem.style.fontWeight = 'bold';
// });

// change in Array then use 'forEach Method', give no error
// navItems = Array.from(navItems);       // here we are changing, so use 'let' instant of 'const'
// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'red';
//     navItem.style.fontWeight = 'bold';
// });



// get multiple Elements using querySelectorAll

let navItems = document.querySelectorAll('a');   // NodeList
// console.log(navItems);

// to color green, background white of 'nav-items' class

// to iterate 'navItems'
// 1. simple for loop
// 2. for of loop
// 3. forEach method

// 1. simple for loop
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'red';
//     navItem.style.fontWeight = 'bold';
// }

// 2. for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = 'red';
//     navItem.style.fontWeight = 'bold';
// }

// 3. forEach Method (change in Array then use 'forEach Method' for NodeList)
navItems.forEach(navItem => {                     
    navItem.style.backgroundColor = '#fff';
    navItem.style.color = 'red';
    navItem.style.fontWeight = 'bold';
});



