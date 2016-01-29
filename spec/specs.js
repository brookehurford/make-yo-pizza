describe('Topping', function() {
  it('will create a list of toppings based on a set of properties', function(){
    var newTopping = new  Topping("pepperoni", 2.00);
    expect(newTopping.name).to.equal("pepperoni");
    expect(newTopping.price).to.equal(2.00);
  });

  it('will output a price based on a selected topping', function() {
    expect(newPizza.topping("artichokes")).to.equal(1.00);
  })
});



describe('Pizza', function() {
  it('will create a price for a pizza based on a set of properties', function() {
    var newPizza = new Pizza("large", "toppings: []");
    expect(newPizza.size).to.equal("large");
    expect(newPizza.toppings).to.eql[""];
  });
});
