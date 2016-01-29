//JavaScript

//Topping object:
function Topping(toppingName, price) {
  this.toppingName = toppingName;
}

//PizzaOrder object:
function PizzaOrder(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

PizzaOrder.prototype.addTopping = function() {
  var topping = new Topping;
  this.toppings.push(topping);
}

//Pizza size determines base price -> add toppings -> multiply by quantity
PizzaOrder.prototype.totalPrice = function() {
  var topping = new Topping;
  var orderCost = 0;
  if(this.pizzaSize === "small") {
    orderCost += 8;
  } else if(this.pizzaSize === "medium") {
    orderCost += 10;
  } else {
    orderCost += 12;
  }

  //Toppings are $1.00 each. Use for loop so changing price per topping is easier.
  if(this.toppings.length > 0) {
    for(var i = 1; i <= this.toppings.length; i++) {
      orderCost += 1;
    }
  }

  var finalPrice = orderCost;
  return finalPrice;
}
