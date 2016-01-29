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

//User Interface Logic

$(document).ready(function() {
	$("#startOrder").click(function() {
		$("#startOrder").hide();
		$("#pizzaForm").fadeIn(500);
	});

	$("form#pizzaForm").submit(function(event) {
		// debugger;
		var inputtedSize = $("select#size").val();
		var inputtedToppings = [];
			$.each($('input[name="topping"]:checked'), function(){
				inputtedToppings.push($(this).val());
		})

		var newPizzaOrder = new PizzaOrder(inputtedSize, inputtedToppings);
		var price = newPizzaOrder.totalPrice();

		if (inputtedSize === "selectOne") {
			alert("Please select a size");
		}

		event.preventDefault();
	});
});
//
//
//
//   $("form#order").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedQuantity = parseInt($("input#quantity").val());
//     var inputtedSize = $("select#size").val();
//
//     var newPizzaOrder = new PizzaOrder(inputtedQuantity, inputtedSize);
//
//     $(".new-topping").each(function() {
//       var inputtedDescription = $(this).find("select#topping").val();
//       var newTopping = new Topping(inputtedDescription);
//       newPizzaOrder.addTopping();
//     });
//
//     console.log(newPizzaOrder);
//     var price = newPizzaOrder.calculatePrice();
//     $("#result").show(function() {
//       $("#order-price").text(price);
//     });
//   });
// });
