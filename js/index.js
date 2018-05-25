let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' Pizza topped w/ ' + topping);
};

takeOrder('Mushroom', 'Thin Crust');
takeOrder('Spinach', 'Whole Wheat');
takeOrder('Pepperoni', 'Brooklyn Style');

//calculate cost of items
const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

//calculate tax
const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
}

//calculate cost with tax
const getTotal = (itemCount) => {
  return getTax(itemCount) + getSubTotal(itemCount);
}

//print totals with and without tax
console.log(getSubTotal(orderCount)+ ' before tax');

console.log(getTotal(orderCount)+ ' after tax');
