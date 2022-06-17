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
  // const pizzaOrder = this;
  switch (orderOne.size) {
    case 'small':
      orderOne.orderSum += 3;
      break;
    case 'medium':
      orderOne.orderSum += 4;
      break;
    case 'large':
      orderOne.orderSum += 5;
      break;
    default:
      console.log('The default size clause ran, good luck debugging this');
  }
  orderOne.toppings.forEach(function (element) {
    switch (element) {
      case 'pepperoni':
        orderOne.orderSum += 2;
        break;
      case 'extra-cheese':
        orderOne.orderSum += 2;
        break;
      case 'mixed-veggies':
        orderOne.orderSum += 2;
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
    console.log('Line 68 reached');
    let selectedTopping;
    let selectedToppingsArray = [];
    $('input:checkbox[name=topping]:checked').each(function () {
      console.log('keyword "this" inside of checkbox.each(): ', this);
      selectedTopping = $(this).val();
      orderOne.toppings.push(selectedTopping);
      console.log(
        'orderOne after user selects one or more toppings: ',
        orderOne
      );
    });

    //UPDATE PIZZA INSTANCE ORDERSUM
    orderOne.orderSuminator();
    console.log('orderOne after calling orderSuminator(): ', orderOne);

    // SHOW SIZE SELECTION, TOPPINGS SELECTION(S), AND TOTAL COST
    $('#size-confirmation-showcase').text(orderOne.size);
    $('#toppings-confirmation-showcase').text(
      orderOne.toppings.toString().replace(/,/g, ', ')
    );
    $('#order-sum-showcase').text(orderOne.orderSum);

    // CLEAR INPUTS AND RESET PIZZA INSTANCE
    $('input[name=size]').prop('checked', false);
    $('input[name=topping]').prop('checked', false);
    orderOne.size = '';
    orderOne.toppings = [];
    orderOne.orderSum = 0;
  });
});
