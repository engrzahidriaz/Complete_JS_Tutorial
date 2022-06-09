// Arrow Function s

const happyBirthdaySong = () => {
    console.log('happy birthday to you....');
}
happyBirthdaySong();


const sumTwoNum = (num1, num2) => {
    return num1 + num2;
}

const isEven = (num) => {
    return num%2 === 0;
}
console.log(isEven(6));

// if function has one parameter, no need to write parenthess ()
const isEven1 = num => {   
    return num%2 === 0;
}
console.log(isEven1(7));

const firstChar = (anyString) => {
    return anyString[0];
}

// if function has one parameter, can be written as
const isEven2 = num => num%2 === 0;
console.log(isEven2(8));

const firstChar1 = (anyString) => anyString[0];


const findTarget = (array, target) => {
    for(let i=0; i<=array.length; i++){
        if(target === array[i]){
            return i;
        }
    } return -1
}
array = [2, 4, 7, 9, 13, 45];
const ans = findTarget(array, 9);
console.log(ans);