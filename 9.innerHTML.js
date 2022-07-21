// Inner HTML
// in index.html file, all are written in 'header' portion eg div, nav, ul, li, h2 are innerHTML

const headline = document.querySelector('.headline');
// console.log(headline);
// console.log(headline.innerHTML);

// we can change innerHTML
headline.innerHTML = '<h1>Inner HTML changed</h1>';
headline.innerHTML += '<button class= \'btn\'> Learn More </button>';  // add button with above statement
console.log(headline.innerHTML);
