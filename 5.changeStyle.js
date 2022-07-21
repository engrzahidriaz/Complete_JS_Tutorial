// Change the styles of elements using js

// to change the style, select that portion by id/name
// const mainHeading = document.querySelector('div');   // give the first div 
// console.log(mainHeading);

const mainHeading = document.querySelector('div.headline h2');   // give the div has class 'headline' and h2 portion 
// console.log(mainHeading.style);        // show all style properties, style is object also

// to change the color or other style property
mainHeading.style.color = 'red';
// mainHeading.style.background-color = 'red';  // give error
mainHeading.style.backgroundColor = 'blue';   // use capital letter instant of dash '-'
mainHeading.style.border = '10px solid green'