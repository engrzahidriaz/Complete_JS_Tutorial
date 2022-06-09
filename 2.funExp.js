// Function Expression 

const happyBirthdaySong = function(){
    console.log('happy birthday to you....');
}
happyBirthdaySong();


const sumTwoNum = function(num1, num2){
    return num1 + num2;
}

const isEven = function(num){
    return num%2 === 0;
}

const firstChar = function(anyString){
    return anyString[0];
}

const findTarget = function(array, target){
    for(let i=0; i<=array.length; i++){
        if(target === array[i]){
            return i;
        }
    } return -1
}
array = [2, 4, 7, 9, 13, 45];
const ans = findTarget(array, 9);
console.log(ans);