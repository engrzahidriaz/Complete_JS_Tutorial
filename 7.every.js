// Every Method
// every Method take 'call back' function as a input
// every Method work as a loop, call a function which pass a value of array/object each time
// callback function return --> true/false (boolean)
// every function return --> true/false (boolean) if all condition are satisfied

const numbers = [2,4,6,8];

const ans = numbers.every(number => number%2 === 0);
console.log(ans);

////// EXAMPLE //////

const userCards = [
    {productId: 1, productName: 'mobile', price: 15000},
    {productId: 2, productName: 'laptop', price: 44000},
    {productId: 3, productName: 'tv', price: 38000}
];

// check product of price less then 40000

const result = userCards.every(carditem => carditem.price < 40000);
console.log(result);  // false because all prices are not less then 40000
