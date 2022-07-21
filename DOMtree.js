// DOM Tree traversing 
// explainasion of 'DOM Tree' picture


// const rootNode = document.getRootNode();
// console.log(rootNode);

// Child Relation
// console.log(rootNode.childNodes);   // list of document child node (html)

// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes);      // list of html child node (head, text, body)
// console.log(htmlElementNode.childNodes[1]);

// const headElementNode = htmlElementNode.childNodes[0];
// const textNode = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];

// Parent Relation
// console.log(htmlElementNode.parentNode);
// console.log(headElementNode.parentNode);

// Sibling Relation
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling);  // sibling to sibling traverse 

// console.log(headElementNode.nextSibling.nextElementSibling);

// console.log(headElementNode.childNodes);   // list of head child node (text, title, text, script, text, comment, text, comment, text)


// to change HTML file text

const h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.parentNode);

const div = h1.parentNode;         
div.style.color = '#efefef';           // change div text color and background color
div.style.backgroundColor = '#333';

// const div = h1.parentNode.parentNode;         
// div.style.color = '#efefef';           // change body text color and background color
// div.style.backgroundColor = '#333';

// Some More informatiom

// const body = document.body
// console.log(body);
// body.style.color = '#efefef';           // change body text color and background color
// body.style.backgroundColor = '#333';

