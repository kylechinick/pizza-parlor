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

Pizza.prototype.addToppingsToOrder = function (...selectedToppings) {
  return (this.toppings = selectedToppings);
};

Pizza.prototype.orderSuminator = function () {
  const pizzaOrder = this;
  switch (this.size) {
    case 'small':
      this.orderSum += 3;
      break;
    case 'medium':
      this.orderSum += 4;
      break;
    case 'large':
      this.orderSum += 5;
      break;
    default:
      console.log('The default size clause ran, good luck debugging this');
  }
  pizzaOrder.toppings.forEach(function (element) {
    switch (element) {
      case 'pepperoni':
        pizzaOrder.orderSum += 2;
        break;
      case 'extra cheese':
        pizzaOrder.orderSum += 2;
        break;
      case 'mixed veggies':
        pizzaOrder.orderSum += 2;
        break;
      default:
        console.log(
          'The default toppings clause ran, good luck debugging this'
        );
    }
  });
};

$(document).ready(function () {
  $('#submit-order-button').click(function (event) {
    event.preventDefault();

    // OBTAIN AND UPDATE PIZZA INSTANCE SIZE
    const sizeSelection = $('input:radio[name=size]:checked').val();
    if (!sizeSelection) {
      alert('Please select a pizza size in order to complete your order');
    } else {
      orderOne.addSizeToOrder(sizeSelection);
      console.log('orderOne after user selects medium size option: ', orderOne);
    }

    // OBTAIN AND UPDATE PIZZA INSTANCE TOPPINGS
    let selectedTopping;
    let selectedToppingsArray = [];
    $('input:checkbox[name=topping]:checked').each(function () {
      selectedTopping = $(this).val();
      selectedToppingsArray.push(selectedTopping);
    });
    orderOne.addToppingsToOrder.apply(orderOne, selectedToppingsArray);
    console.log('orderOne after user selects one or more toppings: ', orderOne);

    //UPDATE PIZZA INSTANCE ORDERSUM
    orderOne.orderSuminator();
    console.log('orderOne after calling orderSuminator(): ', orderOne);
  });
});
