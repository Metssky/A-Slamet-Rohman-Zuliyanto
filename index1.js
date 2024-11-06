//STRING
let x = "Haloo Selamat datang di warung pak Memet";

alert(x);

//BOOLEAN
let a = 5;
let b = 5;
let c = 6;

console.log(a == b);
console.log(b == c);

//NUMBERS
let x1 = 16;
let x2 = 34;
let x3 = "Selamattt ini buat kamuu belanja di warung pak Memet yaaaa!!!!!";
let x4 = "Rp.100.000";
let x5 = "Kamu mau pesan apa????";

console.log(x1 + x2);
alert(x3 + x4);
prompt(x5);

//ARRAY
let makanan = ["Nasi Goreng", "Nasi Mawut", "Mie Goreng"];
makanan[3] = "Mie Godok";
console.log(makanan);

//OBJECT
const tukangnasgor = {
  firstName: "Memet",
  lastneme: "Suremet",
  age: 53,
};

console.log(tukangnasgor);

//CONSOLE LOG
let a1 = 10;
let a2 = 20;
let a3 = 22;

console.log(a1 + a2 - a3);
console.log(a1 - a2 + a3);

//LOGICAL OPERATOR
let b1 = 10;
let b2 = 12;
let b3 = 17;

console.log(b1 < 20 && b2 > 11 && b3 > 15); //true && true && true
console.log(b1 < 9 && b2 < 13 && b3 > 12); //false && true && true
console.log(b1 < 20 || b2 > 11 || b3 > 15); //true || true || true
console.log(b1 < 9 || b2 > 13 || b3 > 15); //false || false || true
console.log(!(b1 < 19)); //!true
console.log(!(b1 < 20 && b2 > 11 && b3 > 15)); //!true && true && true

//EQUALITY COMPARISON
const c1 = 100;
const d1 = 200;

console.log(c1 == d1);
console.log(c1 === d1);
console.log(c1 != d1);
console.log(c1 !== d1);
console.log(c1 > d1);
console.log(c1 >= d1);
console.log(c1 < d1);
console.log(c1 <= d1);

//Practice Function
function printHeart() {
  console.log("<3");
}
printHeart();

function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 17));
console.log(multiply(8, 18));
console.log(multiply(23, 6));

let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();

const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));
console.log(sayHello("Slamet"));
console.log(sayHello("Rohman"));

//Practice Loops and Iteration
for (let i = 0; i < 6; i++) {
  console.log("Da ba dee da ba daa");
}
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

//Practice Exception
function myFirst() {
  myDisplayer("Good bye");
}
function mySecound(callback) {
  myDisplayer("Hallo");
}

function myDisplayer(message) {
  console.log(message);
}
mySecound(myFirst);

console.log("paragraf 1");
setTimeout(() => {
  console.log("paragraf 2");
}, 4000);
console.log("paragraf 3");

function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");

function divideNumbers(a, b) {
  try {
    if (!a || !b) {
      throw new Error("Kedua parameter harus di isi");
    }
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input harus berupa angka.");
    }
    if (b === 0) {
      throw new Error("Pembagian dengan nol tidak diizinkan.");
    }
    return a / b;
  } catch (error) {
    console.error("Terjadi kesalahan: " + error.message);
    return null;
  }
}
console.log(divideNumbers(30, 2));
console.log(divideNumbers(14, 0));
console.log(divideNumbers(15, "z"));
console.log(divideNumbers(15));
