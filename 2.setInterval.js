// SetInterval and create little project with setInterval 
// SetInterval: function perform every given specific time interval

// console.log('script start');
// setInterval(()=>{                        // function perform every interval of 1s (1000)   
//     console.log(Math.random());
// }, 1000);
// console.log('script end');


// console.log('script start');
// setInterval(()=>{ 
//     let total = 0;                 // loop use here for tome delay
//     for(let i=0; i<10000; i++){
//         total += i;
//     }  
//     console.log(total);                       
//     console.log(Math.random());
// }, 1000);
// console.log('script end');

// change body color every 1s of interval
const body = document.body;
// setInterval(() => {
//     const red = Math.floor(Math.random() * 126);
//     const green = Math.floor(Math.random() * 126);
//     const blue = Math.floor(Math.random() * 126);
//     const rgb = `rgb(${red},${green},${blue})`;
//     console.log(rgb)
//     body.style.background = rgb;
// }, 1000);

// stop when click on button
const btn = document.querySelector('button');
const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red},${green},${blue})`;
    console.log(rgb)
    body.style.background = rgb;
}, 1000);
btn.addEventListener('click',()=>{
    clearInterval(intervalId);
    btn.textContent = body.style.background;
})
console.log(intervalId);



