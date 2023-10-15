// let x = 13.566777;
// y = x.toString();
// z = x.toExponential(2);
// console.log(x.toExponential(2));
// console.log(x.toFixed(2), x.toFixed(5));
// function fixed(number, fixedValue) {
//   if (!fixedValue) return number;
//   return number.toFixed(fixedValue);
// }
// console.log(fixed(15.345, 6));
// // console.log(x.toFixed(3), x.toPrecision(1));

// console.log(x.valueOf());
// // console.log(Number(10.1), Number("10"), Number("undefined"), Number(true));
// console.log(parseInt(10.6667), parseInt(true), parseInt("John"));
// console.log(
//   parseFloat(true),
//   parseFloat(10),
//   parseFloat("10.5555"),
//   parseFloat("John")
// );
// console.log(Number("10 20 30"));

// g = 9999999999999999;
// k = 999999999999999;
// console.log(g);
// console.log(k);
// // homework

// l = 0.1+0.2;
// console.log(l.toFixed(2));
// console.log(l.toPrecisio

let x = 1;
switch (true) {
  case x == 4:
    console.log(x * 2);
    break;
  case x == 3:
    console.log(x * 3);
    break;
  default:
    console.log(x + 1);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const person = { firstname: "John ", lastName: "Doe ", age: 50 };
let text="Wick ";
for (let x in person) {
    console.log(text += person[x]);
}