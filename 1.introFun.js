// Function Declaration
// it work as a servent --> asign a work and when you call it will work


function happyBirthdaySong(){
    console.log('happy birthday to you....');
}
happyBirthdaySong();


function sumTwoNum(){
    console.log(2+4);
}
sumTwoNum();


function sumTwoNum1(){
    return 2+5;
}
console.log(sumTwoNum1());

function sumTwoNum2(){
    return 2+7;
}
const result = sumTwoNum2();
console.log(result);


function sumTwoNum3(num1, num2){
    return num1 + num2;
}
sumTwoNum3(2+4);


function isEven(num){
    if(num%2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(5));


function isEven1(num){
    return num%2 === 0;
}
console.log(isEven1(6));

function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar('zahid'));


function findTarget(array, target){
    for(let i=0; i<=array.length; i++){
        if(target === array[i]){
            return i;
        }
    } return -1
}
array = [2, 4, 7, 9, 13, 45];
const ans = findTarget(array, 9);
console.log(ans);