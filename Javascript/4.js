// const x = { firstName: "John", lastName: "Doe", age: 56 };
// const cars = ["BMW", "Toyota", "KIA", x];
// let text = " ";
// for (const y of cars) {
//   console.log((text += y));
// }
// let e = " ";
// const a = [1, 2, 3, 4, 5, 6, 7];
// for (let k of a) {
//   console.log((e += k));
// }

// let string1 = String(123456789);
// let text1 = "";
// for (let u of string1) {
//   console.log((text1 += u));
// }

// let string2 = "JavaScript";
// let text2 = " ";
// for (let o of string2) {
//   console.log((text2 += string2));
// }

// let x = 3;
// while (x < 10 && x > 0) {
//   console.log(x--);
// }

// do {
//   console.log(x++);
// } while (x > -1 && x < 10);

// const cars = [];
// cars[1] = "KIA";
// cars[2] = "Toyota";
// cars[11] = "BMW";
// cars[1] = "Sabb";
// console.log(cars[1]);
// console.log(cars.length);
// console.log(cars[cars.length - 1]);

// const animals = [];
// console.log(animals[animals.length - 1]);
// const person = {firstName:John, }
const pets = ["Cat", "Dog", "Snake", "Mouse", "Spider"];
let flen = pets.length - 1;
text = "My pet is ";
// for (let i = 0; i < flen; i++) {
//   console.log(text + pets[i] + ".");
// }
// function getPet(value, index,array) {
//   console.log(array[index]);
// }
// pets.forEach(getPet);

// pets.forEach(function (element, index, array) {
//   console.log(pets[index]);
// });

// function getPet(value) {
//   window.alert(text + value + ".");
// }
// pets.forEach(getPet);

pets.push("Bear", "Dragon", "Tiger");
console.log(pets);
console.log(Array.isArray([]));
console.log(pets.toString());
console.log(pets.join());
pets.pop();
pets.push("Queen Hog");
pets.shift();
// pets.push();
pets.unshift("King");
pets.splice(2,0, "Monkey", "Cow")


