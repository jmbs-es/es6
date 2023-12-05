var pizza = true;
pizza = false;
console.log("Value can be changed without warning");
console.log(pizza);


console.log("If we try to overwrite a const constant with other value we'll see an error on the console like the following one:");
console.log("ch0202.js:7  Uncaught TypeError: Assignment to constant variable. at ch0202.js:7:12");
const pizzaConst = true;
pizzaConst = false;
console.log(pizzaConst);