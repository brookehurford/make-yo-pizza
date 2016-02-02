//BUSINESS LOGIC

function Topping(toppingName) {
  this.toppingName = toppingName;
}

function PizzaOrder(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

//Create the array of toppings
PizzaOrder.prototype.addTopping = function() {
  var topping = new Topping();
  this.toppings.push(topping);
}

//Create the price based on the size of the pizza, and how many toppings are added.
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
  //Loop to add one dollar each time a topping is added
  if(this.toppings.length > 0) {
    debugger;
    for(var i = 1; i <= this.toppings.length; i++) {
      orderCost += 1;
    }
  }
  return orderCost;
}

//USER INTERFACE LOGIC

$(document).ready(function() {
	$("#startOrder").click(function() {
		$("#startOrder").hide();
		$("#pizzaForm").fadeIn(1000);
	});

	$("#add-topping").click(function() {
		$("#new-toppings").append('<div class="new-toppings">' +
																'<div class="form-group">' +
																	'<select id="added-toppings" class="form-control">' +
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
		var newPizzaOrder = new PizzaOrder(inputtedSize, 0);

    //This adds the topping to the Pizza object to be counted as an added topping
		$(".new-toppings").each(function() {
			var inputtedName = $(this).find("select#added-toppings").val();
      var newTopping = new Topping(inputtedName, 0);
			return newPizzaOrder.addTopping();
		})

		var price = newPizzaOrder.totalPrice();
		$("#orderSummary").show(function() {
			$("#totalCost").text(price);
		});

		event.preventDefault();
	});
});
