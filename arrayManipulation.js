//Filter and show the product that will be bought when you don't have much money (the cheapest one):
const cheapestProduct = items.filter(item => item.price === Math.min(...items.map(item => item.price)));
console.log(cheapestProduct);


//Filter and show the product that is the most expensive in the array:
const mostExpensiveProduct = items.filter(item => item.price === Math.max(...items.map(item => item.price)));
console.log(mostExpensiveProduct);


//Calculate the full price of all products combined:
const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);


//Calculate the full price of all products combined and remove products that are under $10:
const totalPriceExcludingCheapProducts = items
    .filter(item => item.price >= 10)
    .reduce((acc, item) => acc + item.price, 0);
console.log(totalPriceExcludingCheapProducts);


//Filter and show the product that starts with the letter "B" at the first position:
const productsStartingWithB = items.filter(item => item.name.toLowerCase().startsWith('b'));
console.log(productsStartingWithB);
