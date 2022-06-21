function Pizza() {
  this.size = '';
  this.toppings = [];
  this.orderSum = 0;
}

const orderOne = new Pizza();

Pizza.prototype.addSizeToOrder = function (selectedSize) {
  return (this.size = selectedSize);
};

Pizza.prototype.addToppingsToOrder = function (...selectedToppings) {
  return (this.toppings = selectedToppings);
};

Pizza.prototype.orderSuminator = function () {
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
    }
  });
};

$(document).ready(function () {
  $('#submit-order-button').click(function (event) {
    event.preventDefault();

    const sizeSelection = $('input:radio[name=size]:checked').val();
    if (!sizeSelection) {
      alert('Please select a pizza size in order to complete your order');
    } else {
      orderOne.addSizeToOrder(sizeSelection);
    }

    let selectedTopping;
    let selectedToppingsArray = [];
    $('input:checkbox[name=topping]:checked').each(function () {
      selectedTopping = $(this).val();
      orderOne.toppings.push(selectedTopping);
    });

    orderOne.orderSuminator();

    $('#size-confirmation-showcase').text(orderOne.size);
    $('#toppings-confirmation-showcase').text(
      orderOne.toppings.toString().replace(/,/g, ', ')
    );
    $('#order-sum-showcase').text(orderOne.orderSum);

    $('input[name=size]').prop('checked', false);
    $('input[name=topping]').prop('checked', false);
    orderOne.size = '';
    orderOne.toppings = [];
    orderOne.orderSum = 0;
  });
});
