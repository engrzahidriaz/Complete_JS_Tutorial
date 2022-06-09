let winningNum = 20;
let guessNum = +prompt("Guess Number is:") // store data in string (+ sign use to change into number datatype)

if(winningNum == guessNum){
    console.log('Numer is Wright')
}else{
    if(winningNum < guessNum){
        console.log('High')
    }else{
        console.log('low')
    }
}