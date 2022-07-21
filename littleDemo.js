// Little Demo Project
// task: chnage Background color on clicking the button

const mainButton = document.querySelector('button');
// console.log(mainButton);
const body = document.body;

const currentColor = document.querySelector('.current-color');
// console.log(currentColor);

function ramdomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const ramdomColor = `rgb(${red},${green},${blue})`;
    return ramdomColor;
}
mainButton.addEventListener('click',()=>{
    // console.log('you clicked me !!!')
    
    // generate ramdom color 
    const randomColor = ramdomColorGenerator();
    console.log(randomColor);
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})