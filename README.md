# Pizza Parlor

_Author_: Kyle Chinick

## Summary

Demo website for an imaginary pizza parlor. Allows users to order items and view selection costs.

## Technologies

- HTML
- CSS
- JavaScript / jQuery

## Description

This demo provides users a pizza ordering web app. Users can view sizes and toppings, select their choices from each, add those choices to a pizza order and, finally, view the total cost of their custom-made pizza.

## Setup/Installation

1. Clone this repository to your desktop by executing `git clone https://github.com/kylechinick/programming-language-quiz.git` in your preferred terminal application.
2. Execute `git remote -v` in the terminal to view existing remotes and verify successful cloning to your local machine.
3. Navigate to the top level of the project directory.
4. Open the index.html file in your browser.

## Known bugs

None (that have been discovered so far...)

## Specs

### Describe: `Pizza()`

#### Test #1

- Test: "It should return a new instance of the Pizza object with properties for size and toppings"
- Code: \
  `const orderOne = new Pizza();`
- Expected Output:\
  `Pizza { "size": "", "toppings": [] }`

### Describe: `addSizeToOrder(selectedSize)`

#### Test #1

- Test: "It should take the argument and add it as the value for the pizza object receiver's size property"
- Code: \
  `orderOne.addSizeToOrder("medium");`
- Expected Output:\
  `Pizza { "size": "medium", "toppings": [] }`
