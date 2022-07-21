// How event listener works
// Event behind the scene 

console.log('Script start !!!');
const allButton = document.querySelectorAll('.my-button button');
allButton.forEach(function(button){
    button.addEventListener('click', (e) =>{
        // to delay/slow the process
        let num = 0;
        for(let i=0; i=10; i++){
            num += i;
        }
            console.log(e.currentTarget.textContent, num);
        });
});
let outerVar = 0;
for(let i=0; i=10; i++){
    outerVar += i;
}
console.log('value of outerVar', outerVar);
console.log('Script end !!!');