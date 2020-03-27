export function sumCalculator(num1, num2, num3 = 0) {
  return parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
}

export function totalPriceCalculator(array) {
  let totalPticeOfOrder = 0;
 
  array.forEach(element => {
    totalPticeOfOrder += parseFloat(element.price);
  });
  return totalPticeOfOrder;
}
