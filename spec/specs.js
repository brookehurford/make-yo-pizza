describe ('PizzaOrder', function() {
  it("creates a new pizza with the given properties", function() {
    var testPizza = new Pizza("Large", [""]);
    expect(testPizza.pieSize).to.equal("Large");
    expect(testPizza.toppings).to.equal[""];
  });

  it("show $15 price for large pizza", function() {
    var testPizza = new Pizza("Large", [""]);
    expect(testPizza.price()).to.equal(15);
  });

  it("show $10 price for small pizza", function() {
    var testPizza = new Pizza("small", [""]);
    expect(testPizza.price()).to.equal(10);
  });

});

// describe ('Toppings', function() {
//   it('creates a new topping with the given properties', function() {
//     var testToppings = new Toppings("pepperoni", 1);
//     expect(testToppings.name).to.equal("pepperoni");
//     expect(testToppings.addedPrice).to.equal(1);
//   })
//
//   it('adds $1.00 if pepperoni is added to a the pizza', function() {
//     var testPizza = new Pizza("Large", [""]);
//     var testToppings = new Toppings("pepperoni", 1)
//     expect(testPizza.price("pepperoni")).to.equal(16)
//   })
// })





// describe('Pizza', function() {
//   it('will create a price with the following properties', function() {
//     var testPizza = new Pizza("large", [""]);
//     expect(testPizza.pieSize).to.equal("large");
//     expect(testPizza.toppings).to.eql[""];
//   });
//
//   it("will show a $15 price for a large pizza", function() {
//     var testPizza = new Pizza("large", [""]);
//     expect(testPizza.pieSize()).to.equal(15);
//   });
// });
