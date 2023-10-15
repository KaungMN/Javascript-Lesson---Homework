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
//   console.log(this);
//   this.alert("Kaung");
f = "   Hi there,   ";
g = "John Doe 'Doe' is 56 years old!";
h = g.toUpperCase();
i = g.replace(/Doe/g, "Wick");
j = g.toLowerCase();
k = new String("John Doe");
l = "1";
m = "1";
//   console.log(g);
//   console.log(g.slice(2,7));
//   console.log(g.substring(2,7));
//   console.log(g.substr(2,7));
//   console.log(g.substr(5,2));
//   console.log(g.replace(/e/g,"f"))
//   console.log(h);
//   console.log(i);
//   console.log(j);
//   console.log(f.concat(" ", g ,", ", h));
//   console.log(k);
//   console.log(l === m);
// console.log(f.trim());
// n = l.padStart(4, 0);
// console.log(n);
// console.log(g.charCodeAt(0) + g.charAt(0));
// console.log(g.charCodeAt(0), g.charAt(0));
// console.log(g.split(","));
// console.log(g.split(""));
// console.log(g.split("."));
console.log(g.indexOf("Doe"), g.lastIndexOf("Wick"), g.startsWith("Doe"), g.endsWith("Doe"), g.search("Doe"));
// console.log(g.match(/Wick/g));
console.log(g.includes("Doe"), g.includes("Wick"), g.startsWith("Doe",5), g.endsWith("s",6));
