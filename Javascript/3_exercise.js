// let age = 18;
// if (age < 18) {
//   console.log("Sorry, you cannot vote!!!");
// } else {
//   console.log("You can vote. Please continue to the next page.");
// }

function vote(age) {
  if (age > 0 && age < 18) {
    console.log("Sorry, you cannot vote!!!");
  } else if (age >= 18 && age <= 150) {
    console.log("You can vote. Please continue to the next page.");
  } else {
    console.log("Sorry, Your age is unreal.");
  }
}
console.log(vote(150));

let hour = 13;
if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 15) {
  console.log("Good afternoon");
} else if (hour >= 15 && hour < 20) {
  console.log("Good evening");
} else if (hour >= 20 && hour < 24) {
  console.log("Good night");
} else {
  console.log(" ");
}

let leg = 4;
switch (leg) {
  case 2:
    console.log("chicken");
    break;
  case 4:
    console.log("pig");
    break;
  case 8:
    console.log("spider");
    break;
  default:
    console.log("undefined");
}

for (let i = 0; i < 10; i++) console.log(`I am No. ${i}.`);

const car = { modelNumber: "Mercedes", type: "SUV", engine: "Turbo" };
let text = " ";
for (let x in car) {
  console.log(text + car[x]);
}
