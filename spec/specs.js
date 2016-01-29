describe ('PizzaOrder', function() {
  it("creates a new pizza order with the given properties", function() {
    var testPizza = new Pizza("large", [""], 15);
    expect(testPizza.pieSize).to.equal("large");
    expect(testPizza.toppings).to.equal[""];
    expect(testPizza.price).to.equal(15);
  });
  //
  it("adds the baseline price method to the order", function() {
    var testPizza = new Pizza("large", [""], 15);
    expect(testPizza.basePrice()).to.equal(15);
  });
});

describe ('Toppings', function() {
  it('creates a new topping with the given properties', function() {
    var testToppings = new Toppings("pepperoni", 1);
    expect(testToppings.name).to.equal("pepperoni");
    expect(testToppings.addedPrice).to.equal(1);
  })
})
