//Business Logic

//Topping object
function Topping(toppingName, price) {
  this.toppingName = toppingName;
}

//PizzaOrder object
function PizzaOrder(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [""];
}

//Create the array of toppings
PizzaOrder.prototype.addTopping = function() {
  var toppings = new Topping;
  this.toppings.push(toppings);
}

//Create price based on size of pizza then add cost of toppings
PizzaOrder.prototype.totalPrice = function() {
  debugger;
  var toppings = new Topping;
  var orderCost = 0;
  if(this.pizzaSize === "small") {
    orderCost += 8;
  } else if(this.pizzaSize === "medium") {
    orderCost += 10;
  } else {
    orderCost += 12;
  }

  //Toppings are 1 dollar each
  if(this.toppings.length > 1) {
    for(var i = 0; i < this.toppings.length; i++) {
      orderCost += 1;
    }
  }

  var finalPrice = orderCost;
  return finalPrice;
}

//User Interface Logic

$(document).ready(function() {
	$("#startOrder").click(function() {
		$("#startOrder").hide();
		$("#pizzaForm").fadeIn(500);
	});

	$("#add-topping").click(function() {
		$("#new-toppings").append('<div class="new-toppings">' +
																'<div class="form-group">' +
																	'<select id="topping" class="form-control">' +
                                    '<option value="selectOne">- Select One-</option>' +
                                    '<option value="extraCheese">Extra Cheese | $1.00</option>' +
                                    '<option value="ricottaCheese">Ricotta Cheese | $1.00</option>' +
                                    '<option value="fetaCheese">Feta Cheese | $1.00</option>' +
																		'<option value="olives">Olives | $1.00</option>' +
                                    '<option value="greenPeppers">Green Peppers | $1.00</option>' +
                                    '<option value="artichokes">Artichokes | $1.00</option>' +
                                    '<option value="onions">Onions | $1.00</option>' +
                                    '<option value="spinach">Spinach | $1.00</option>' +
																		'<option value="mushrooms">Mushrooms | $1.00</option>' +
																		'<option value="pepperoni">Pepperoni | $1.00</option>' +
																		'<option value="sausage">Sausage | $1.00</option>' +
                                    '<option value="canadianBacon">Canadian Bacon | $1.00</option>' +
																		'<option value="doubleMeat">Double Meat | $1.00</option>' +
																	'</select>' +
																'</div>')
	});

	$("form#pizzaForm").submit(function(event) {
    debugger;
    $("#pizzaForm").hide();

		var inputtedSize = $("select#size").val();
		var newPizzaOrder = new PizzaOrder(inputtedSize);

		$("#new-toppings").each(function() {
			var inputtedName = $(this).find("select#topping").val();
			var newTopping = new Topping(inputtedName);
			return newPizzaOrder.addTopping();
		})

		var price = newPizzaOrder.totalPrice();
		$("#orderSummary").show(function() {
			$("#totalCost").text(price);
		});

		if (inputtedSize === "selectOne") {
			alert("Please select a size");
		}

		event.preventDefault();
	});
});
