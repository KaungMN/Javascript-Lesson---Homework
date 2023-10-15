const fruits = ["Banana", "Apple", "Lemon", "Orange"];
console.log(fruits.slice(1, 2));

// const number = ["1", "12", "2", "22", "133"];
// console.log(number.sort());
// number.forEach(myValue);
// text = "";
// function myValue(value, index, array) {
//   text += value + "<br>";
// }
// console.log(number);

// number.sort();
// const greaterThan9 = number.filter(value).map(function (value) {
//   return value * 2;
// });
// function value(value, index, array) {
//   return value > 9;
// }
// console.log(greaterThan9);
// const greaterThanNine = [];
// number.forEach(function(num)){
//     if (num > 9){
//         greaterThanNine.push[num*2];
//     }
// }
// number.sort();
// const x = number.filter(kaung);
// function kaung(value, index, array) {
//   return value > 16;
// }
// function noWhere(value, index, array) {
//   return index > 2;
// }
// function forEach2(value,indes,array){

// }
// console.log(number.filter(noWhere));

// console.log(number.filter(greaterThan9).map(multiple2));
// function greaterThan9(value, index, array) {
//   return value > 9;
// }
// number.map(multiple2);
// function multiple2(value, index, array) {
//   return value * 2;
// }
function calculate() {
  const number = [45, 4, 9, 16, 25];
  let sum = number.reduce(mySum);
  function mySum(total, value, index, array) {
    return total + value;
  }
  console.log(sum);
}
