const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
function changePeople() {
  document.getElementById("british").innerHTML = "John Wick";
  document.getElementById("american").innerHTML = "Weeknd";
  document.getElementById("singer").innerHTML = "Taylor";
  document.getElementById("japanese").innerHTML = "Naruto";
  // alert("Document wants to show notification!");
}
console.log(person.fullName());
let x = "John Doe is a car technician. John is very hardworking.";
let y = "1234567890";
let z = "       Hello Javascript!       ";
const a = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// console.log(y);
// console.log(y.slice(-2)); //return parameter

// // slice စမှတ်တစ်ခုတည်းကို အနှုတ်နဲ့ပေးရင် နောက်ဆုံးကစတွက် (-2 ပေးရင် နောက်ဆုံးနှစ်လုံးကိုပဲဖြတ်ပေး)
// // slice ကို စမှတ် ဆုံးမှတ်ပေးရင် ဆုံးမှတ်က slice ရပ်မယ့်နေရာ
// // slice စမှတ်ကို အနှုတ်ပေးရင် ဘာမှမပေါ် , ဆုံးမှတ်ကို အနှုတ်ပေးရင် နောက်ဆုံးကစတွက်

// console.log(y.substring(2, 2));                          //return parameter
// console.log(y.substr(2, 6));                             //return parameter
// console.log(x.replace("John", "Chris"));                 //return parameter
// console.log(x.toUpperCase(), x.toLowerCase());
// console.log(x.concat(" ", y));
// console.log(z.trim());
// console.log(y.padStart(1, 0), y.padEnd(15, 0));

// // parameter က length

// console.log(a.firstName, a.lastName, a.age, a.fullName());
// console.log(a.firstName.charAt(0), a.lastName.charCodeAt(0));      // position ကို 0 က စတွက်သည်
// console.log(a.firstName[2], a.lastName[2]);
// console.log(x.split(","), x.split(""), x.split("."), x.split());
console.log(x.indexOf("John"), x.lastIndexOf("John"));

// indexOf ကရှေ့ကနေစ၊ lastIndexOf နောက်ကနေစ


console.log(x.replace(/John/g, "John Wick"));
console.log(x.search("Doe"), x.match("Doe"),x.includes("Wick"),);
console.log(x.startsWith("Doe",5));
console.log(x.endsWith("very",42));
console.log(x + " & " + y);
let d = "John";
let b = "Doe";
let c = `${d} ${b} is 56 years old.`
console.log(c);
