function Toppings(name, addedPrice) {
	this.name = name;
	this.addedPrice = addedPrice;
}

function Pizza(pieSize, toppings, price) {
	this.pieSize = pieSize;
	this.toppings = [""];
	this.price = price;
};

Pizza.prototype.basePrice = function() {
	var price = 15;

	if (this.pieSize === "large") {
	 return price;
 	}
	if (this.pieSize === "small") {
	 return price -= 5;
	}
}
