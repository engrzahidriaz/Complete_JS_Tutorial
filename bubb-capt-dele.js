// Event bubbling: as called event propegation
// Event Capturing
// Event delegation

console.log('Hello World');

// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// Event bubbling: when you click on event, its parent event called

// child.addEventListener('click',()=>{
//     console.log('you clicked on Child');
// });
// parent.addEventListener('click',()=>{
//     console.log('you clicked on Parent');
// });
// grandparent.addEventListener('click',()=>{
//     console.log('you clicked on grandParent');
// });
// document.body.addEventListener('click',()=>{
//     console.log('you clicked on Body');
// });

// Capturing event: true will decide event will happen or not

// child.addEventListener('click',()=>{
//     console.log('Capture !!! Child');
// }, true);
// parent.addEventListener('click',()=>{
//     console.log('Capture !!! Parent');
// }, true);
// grandparent.addEventListener('click',()=>{
//     console.log('Capture !!! grandParent');
// }, true);
// document.body.addEventListener('click',()=>{
//     console.log('Capture !!! Body');
// }, true);


// child.addEventListener('click',()=>{
//     console.log('Bubbling !!! Child');
// });
// parent.addEventListener('click',()=>{
//     console.log('Bubbling !!! Parent');
// });
// grandparent.addEventListener('click',()=>{
//     console.log('Bubbling !!! grandParent');
// });
// document.body.addEventListener('click',()=>{
//     console.log('Bubbling !!! Body');
// });

// capturing start body to child
// bubbling start child to body

// event Delegation

// const grandparent = document.querySelector('.grandparent');
// grandparent.addEventListener('click',()=>{
//     console.log('you clicked on something');
// });

// you jusr select grandparent, but event coccure (bubbling) when click on parent and child also.

const grandparent = document.querySelector('.grandparent');
grandparent.addEventListener('click',(e)=>{
    console.log(e.target.textContent);
});
