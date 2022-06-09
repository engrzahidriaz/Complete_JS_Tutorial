// Some Method
// some Method take 'call back' function as a input
// some Method work as a loop, call a function which pass a value of array/object each time
// callback function return --> true/false (boolean)
// some function return --> true/false (boolean) if all condition are satisfied

// find someone number which is even

const numbers = [3,5,6,7];
const ans = numbers.some(number => number%2 === 0);
console.log(ans)

////// EXAMPLE //////

const userCards = [
    {productId: 1, productName: 'mobile', price: 15000},
    {productId: 2, productName: 'laptop', price: 44000},
    {productId: 3, productName: 'tv', price: 38000}
];
const result = userCards.some(carditem => carditem.price > 40000);
console.log(result)
