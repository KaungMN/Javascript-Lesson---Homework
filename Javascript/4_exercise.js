const cars = ["BMW", "Mercedes", "Toyoto"];
const pets = ["dog", "cat", "parrot", "bear", "cow"];
const fruits = ["apple", "orange", "mango", "banana"];
const combined = cars.concat("KIA");
// console.log(combined);
// console.log(pets.slice(1,3));
// console.log(fruits.sort());
// console.log(fruits.reverse());
// console.log(
//   number.sort(function (a, b) {
//     return a - b; // Question
//   })
// );
// console.log(
//   number.sort(function (a, b) {
//     return b - a;                    // Question
//   })
// );
// console.log(number[0]);
// console.log(number[number.length - 1]);
// const model = [
//   { type: "BMW", year: 2005 },
//   { type: "Mercedes", year: 2023 },
//   { type: "KIA", year: 2015 },
// ];
// console.log(
//   model.sort(function (a, b) {
//     return b.year - a.year;
//   })
// );
// console.log(model[0]);
// console.log(model[model.length - 1]);

// // let text = "";
// // number.forEach(city);
// // document.getElementById("number").innerHTML = text;
// // function city(value, index, array) {
// //   text += value + "<br>";
// // }
// let txt = "";
// number.forEach(city);
// document.getElementById("number").innerHTML = txt;

// function city(value, index, array) {
//   txt += value + "<br>";
// }
const number = [30, 22, 10, 50, 5, 60, 12];
// function getPet(value, index,array) {
//   console.log(array[index]);
// }
// number.forEach(getPet);

// number.forEach(function (element, index, array) {
//   console.log(number[index]);
// });
number.sort(function (a, b) {
  return a - b;
});
function getNumber(value, index, array) {
  console.log(array[index]);
}
// console.log(number.forEach(getNumber));
console.log(number.map(getNumber));