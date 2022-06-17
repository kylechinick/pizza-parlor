// BUSINESS LOGIC

function Pizza() {
  this.size = '';
  this.toppings = [];
  this.orderSum = 0;
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

Pizza.prototype.orderSuminator = function () {
  switch (this.size) {
    case 'medium':
      this.orderSum += 4;
      break;
    default:
      console.log('The default clause ran, good luck debugging this');
  }
};

orderOne.orderSuminator();
console.log('orderOne after calling orderSuminator: ', orderOne);

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
// After user submitted selections are added to the Pizza object JS should:
// -- Access the order's size property
// -- -- ! NEW PROPERTY NEEDED: orderSum
// -- -- Run the size value through a switch statement that updates the orderSum property by the amount stated in the matching case clause
// -- Access the order's toppings property
// -- -- Loop through each element in the toppings value array and run each element through the price-checking switch statement, updating the the orderSum property by the amount stated in the matching case clause for each element

// 2. User must choose pizza size

// Technical MVP Requirements:
// - Make/use a constructor
// - Make/use a prototype
// - Include tests for all business logic (commit after each successful test)
// - Complete README
