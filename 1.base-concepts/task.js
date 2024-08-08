"use strict";
function solveEquation(a, b, c) {
  let arr = [];

  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    console.log("Корней нет");
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercent = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthPayment =
    creditBody *
    (monthPercent + monthPercent / ((1 + monthPercent) ** countMonths - 1));
  let totalPayment = monthPayment * countMonths;
  totalPayment = +totalPayment.toFixed(2);

  return totalPayment;
}
