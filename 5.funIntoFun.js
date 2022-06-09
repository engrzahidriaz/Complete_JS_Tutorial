// function inside Function

function app(){
    const insidefunc = () => 
    console.log('call inside functions');

    const twoSum = function(num1, num2){
        return num1 + num2;
    }

    const multi = (num1, num2) => {
        return num1 * num2;
    }

    console.log('inside app');
    console.log(twoSum(3,4));
    console.log(multi(3,4));
}
app();