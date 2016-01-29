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
  if(this.toppings.length > 0) {
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
                                    '<option value="extraCheese">Extra Cheese</option>' +
                                    '<option value="ricottaCheese">Ricotta Cheese</option>' +
                                    '<option value="fetaCheese">Feta Cheese</option>' +
																		'<option value="olives">Olives</option>' +
                                    '<option value="greenPeppers">Green Peppers</option>' +
                                    '<option value="artichokes">Artichokes</option>' +
                                    '<option value="onions">Onions</option>' +
                                    '<option value="spinach">Spinach</option>' +
																		'<option value="mushrooms">Mushrooms</option>' +
																		'<option value="pepperoni">Pepperoni</option>' +
																		'<option value="sausage">Sausage</option>' +
                                    '<option value="canadianBacon">Canadian Bacon</option>' +
																		'<option value="doubleMeat">Double Meat</option>' +
																	'</select>' +
																'</div>')
	});

	$("form#pizzaForm").submit(function(event) {
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
