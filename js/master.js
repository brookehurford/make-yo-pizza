var olives = {name: "Olives", price: 1.00};
var green peppers = {name: "Green Peppers", price: 1.00};
var onions = {name: "Onions", price: 1.00};
var pepperoni = {name: "Pepperoni", price: 2.00};
var canadianBacon = {name: "Canadion Bacon", price: 2.00};
var sausage = {name: "Sausage", price: 2.00};



function Topping(name, price) {
	this.name = name;
	this.price = price;
};

function Pizza(size,toppings) {
	this.size = size;
	this.toppings = [""];
}
