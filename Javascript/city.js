x = 1;
let y = 2;
let a = "5";
z = 3;
y += z;
function city(y, z) {
  y = 3;
  z = 2;
  document.getElementById("Japan").innerHTML = "Hiroshima";
  document.getElementById("England").innerHTML = "Liverpool";
  return y + z;
}
function tokyo() {
  alert("testing");
  return 1 + 2;
}
console.log(tokyo());
// console.log (a+5);
// console.log ("Please check the internet");
// console.log (a);
// console.log (y+2);
// console.log (y-2);
// console.log (y*2);
// console.log (y/1.5);
// console.log (z%y);
// console.log (y**z);
// console.log (y == 5);
// console.log (y === a);
// console.log (y != a);
// console.log (y !== a);
// console.log (y > a);
// console.log (y < a);
// console.log (y >= a);
// console.log (y <= a);
// console.log (y);
// console.log (x < 2 && y == 5);
// console.log (x < 2 && y > 5);
// console.log (x < 2 || x == 5);
// console.log (x < 2 || y > 5 );
// console.log (x > 2 || y > 5);
// console.log ( !(x < y ))
const person = {
  firstName: "John",
  lastName: "Doe",
  age: "65",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  //full name က function name ဖြစ်သွား
};
console.log(person.firstName + " is " + person.age + " years old.");
console.log(person);
console.log(person.fullName());
console.log(this);
this.alert("Kaung");
console.log(this.person)
console.log(this.window.person)