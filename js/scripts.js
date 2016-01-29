//JavaScript

//Topping object:
function Topping(toppingName, price) {
  this.toppingName = toppingName;
}

//PizzaOrder object:
function PizzaOrder(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [""];
}

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

  //Toppings are $1.00 each. Use for loop so changing price per topping is easier.
  if(this.toppings.length > 0) {
    console.log(this.toppings.length);
    debugger;
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
																		'<option value="olives">Olives</option>' +
																		'<option value="mushrooms">Mushrooms</option>' +
																		'<option value="pepperoni">Pepperoni</option>' +
																		'<option value="sausage">Sausage</option>' +
																	'</select>' +
																'</div>')
	});

	$("form#pizzaForm").submit(function(event) {

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
