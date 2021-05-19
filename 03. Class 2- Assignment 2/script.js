//constant variables
const tax=.16

//food program
console.log("Assignment 2");
foodSelection = prompt("Choose a product name : Taco, Burrito, or Torta");
quantity = prompt(`How many ${foodSelection}s do you want?`);
price = prompt("How much do you want to pay per "+foodSelection+"?");
totalPrice=Number(quantity)*(1+tax)
console.log("Thank you, please pay us "+ totalPrice+" pesos");
