// Reduce Method

// forEach Method take 'call back' function as a input
// forEach Method work as a loop, call a function which pass value and next value of array/object each time

// sum of all numbers in array
const numbers = [1,3,6,4,9];

const sum = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
});
console.log(sum);

// accumulator    currentValue    return
//    1              3             4
//    4              6             10
//    10             4             14
//    14             9             23

////// EXAMPLE //////

const userCards = [
    {productId: 1, productName: 'mobile', price: 15000},
    {productId: 2, productName: 'laptop', price: 44000},
    {productId: 3, productName: 'tv', price: 38000}
];
const totalAmount = userCards.reduce((totalPrice, cuurentPrice)=>{
    return totalPrice + cuurentPrice.price;
}, 0);              // 0 is used as initial value, it may be 1, 2, or other   
console.log(totalAmount);

// totalPrice   cuurentPrice   return 
//    0              {}          15000
//   15000         44000         59000
//   59000         38000         97000


