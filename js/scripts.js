// BUSINESS LOGIC

function Pizza() {
  this.size = '';
  this.toppings = [];
}

const orderOne = new Pizza();
console.log('orderOne upon initialization: ', orderOne);

Pizza.prototype.addSizeToOrder = function (selectedSize) {
  return (this.size = selectedSize);
};

orderOne.addSizeToOrder('medium');
console.log('orderOne after calling addSizeToOrder("medium"): ', orderOne);

Pizza.prototype.addToppingsToOrder = function (...selectedToppings) {
  return (this.toppings = selectedToppings);
};

orderOne.addToppingsToOrder('pepperoni', 'extra cheese', 'mixed veggies');
console.log(
  'orderOne after calling addToppingsToOrder("pepperoni"): ',
  orderOne
);

// ROAD MAP
// Primary function of app: user can build a pizza and see total cost

// 1. User can add 1 or more toppings to pizza
// -- Create a pizza object on page load

// -- Pizza object will contain the following properties and sub-properties:
// -- -- size: ""
// -- -- toppings: ""  * MVP *
// -- -- toppings: [] * EXT *

// -- The Pizza constructor will have the following prototypes:
// -- -- addSizeToOrder(selectedSize): takes argument and adds it as the value for the Pizza.size property
// -- -- addToppingsToOrder(): takes argument and adds it as the value for the Pizza.toppings property * MVP *
// -- -- addToppingsToOrder(): takes arguments and adds each as an individual element to the Pizza.size property * EXT *

// MVP Selections
// -- -- size: "small", "medium", and "large"
// -- -- toppings: "pepperoni"

// EXT Selections
// -- -- size: "small", "medium", and "large"
// -- -- toppings: "pepperoni", "extra cheese", and "mixed veggies"

// Ordering / Cost Logic

// 2. User must choose pizza size

// Technical MVP Requirements:
// - Make/use a constructor
// - Make/use a prototype
// - Include tests for all business logic (commit after each successful test)
// - Complete README
