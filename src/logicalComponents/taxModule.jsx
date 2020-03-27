export default function taxModule(array) {
  let totalTax = 0;
  let x = 0;
  array.forEach(order => {
    if (order.imported) {
      if (
        order.type === "book" ||
        order.type === "medicene" ||
        order.type === "food"
      ) {
        x = parseFloat(order.price) * 0.05;
        totalTax += x;
      } else {
        x = parseFloat(order.price) * 0.15;
        totalTax += x;
      }
    } else {
      if (
        order.type === "book" ||
        order.type === "medicene" ||
        order.type === "food"
      ) {
        x = 0;
      } else {
        x = parseFloat(order.price) * 0.1;
        totalTax += x;
      }
    }
  });

  return totalTax.toFixed(2);
}
