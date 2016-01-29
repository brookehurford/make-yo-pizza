describe('Topping', function() {

  it("creates a topping with a name", function() {
    var testTopping = new Topping("olives");
    expect(testTopping.toppingName).to.equal("olives");
  });
});

describe('Pizza', function() {

  it("creates a new order with the given properties", function() {
    var testPizzaOrder = new Pizza("small");
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings).to.eql([]);
  });

  it("creates an order for a single pizza with one topping", function() {
    var testPizzaOrder = new Pizza("small");
    var testTopping = new Topping("olives", 1);
    testPizzaOrder.addTopping(testTopping);
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings.length).to.equal(1);
  });
});
