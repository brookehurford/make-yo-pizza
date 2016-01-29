describe('Topping', function() {
  it("creates a topping with the given properties", function() {
    var testTopping = new Topping("olives");
    expect(testTopping.toppingName).to.equal("olives");
  });
});

describe('PizzaOrder', function() {
  it("will create an order for a pizza with no toppings", function() {
    var testPizzaOrder = new PizzaOrder("small");
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings).to.eql([""]);
  });

  it("will create an order for a pizza with one topping", function() {
    var testPizzaOrder = new PizzaOrder("small");
    var testTopping = new Topping("olives",1);
    testPizzaOrder.addTopping(testTopping);
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings.length).to.equal(2);
  });

  it("will create an order for a pizza with multiple toppings", function() {
    var testPizzaOrder = new PizzaOrder("small");
    var testTopping = new Topping("olives",1);
    var testTopping2 = new Topping("pepperoni",2);
    testPizzaOrder.addTopping(testTopping);
    testPizzaOrder.addTopping(testTopping2);
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings.length).to.equal(3);
  });
});

describe('PizzaOrder.totalPrice', function() {
  it("outputs the price of a pizza with no toppings", function() {
    var testPizzaOrder = new PizzaOrder("small");
    expect(testPizzaOrder.totalPrice()).to.equal(8);
  });

  it("outputs the price of a pizza with one topping", function() {
    var testPizzaOrder = new PizzaOrder("small");
    var testTopping = new Topping("olives");
    testPizzaOrder.addTopping(testTopping);
    expect(testPizzaOrder.totalPrice()).to.equal(10);
  });

  it("outputs the price of a pizza with multiple toppings", function() {
    var testPizzaOrder = new PizzaOrder("medium");
    var testTopping = new Topping("olives");
    var testTopping2 = new Topping("pepperoni");
    testPizzaOrder.addTopping(testTopping);
    testPizzaOrder.addTopping(testTopping2);
    expect(testPizzaOrder.totalPrice()).to.equal(13);
  });
});
