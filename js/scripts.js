//JavaScript

//Topping object:
function Topping(toppingName, price) {
  this.toppingName = toppingName;
}

//PizzaOrder object:
function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

Pizza.prototype.addTopping = function() {
  var topping = new Topping;
  this.toppings.push(topping);
}
