function Pizza(pieSize, toppings) {
	this.pieSize = pieSize;
	this.toppings = [""];
};

function Toppings(name, addedPrice) {
	this.name = name;
	this.addedPrice = addedPrice;
}

Pizza.prototype.price = function() {
	var price = 15;

	if (this.pieSize === "Large") {
	 return price;
 	}
	if (this.pieSize === "small") {
	 return price -= 5;
	}
}
