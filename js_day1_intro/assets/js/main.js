console.log("Level1_5");

let carName = "BMW";
let x = 150;
let y = 50;
let z = x + y;

console.log("Car: " + carName, "x: " + x, "y: " + y, "x und y: " + z);

let firstName;
let lastName;
let age;

firstName = "John";
lastName = "Doe";
age = 35;

console.log(
  "firstname: " +
    firstName +
    " lastname: " +
    lastName +
    " und das alter: " +
    age
);

console.log("---------------------------------------------");

console.log("Level1_6");

console.log(
  "man erhält die Fehlermeldung, da man eine const variable nicht überschreiben kann!"
);

console.log("---------------------------------------------");

console.log("Level1_8");

let x2 = 20;
let y2 = 30;

console.log("x addiert mit y ergebnis = " + (x2 + y2));
console.log("x subtrahiert mit y ergebnis = " + (x2 - y2));
console.log("x multipliziert mit y ergebnis = " + x2 * y2);
console.log("x dividiert mit y ergebnis = " + x2 / y2);

let z2 = 10;
let resultOne = (x2 * y2) / z;
console.log(
  "x multipliziert mit y und danach durch z teilen ergebnis = " + resultOne
);

let a = 15;
let b = 9;

console.log("a modulo von b ergebnis = " + (a % b));

let c = 20;
let resultTwo = a * b * c;

console.log("a multipliziert b und danach mit c multi ergebnis = " + resultTwo);

a++;
console.log("a inkrementiert ergebnis = " + a);
b--;
console.log("b dekrementiert ergebnis = " + b);

resultThree = a - b;
console.log("b subtrahiert mit a ergebnis = " + resultThree);

console.log(
  "Modulo von resultOne durch resultTwo = " + (resultTwo % resultOne)
);

console.log("---------------------------------------------");

console.log("Level1_12");

let zahl = 1;
zahl = zahl + 1;
zahl += 1;
zahl++;
console.log("increment: " + zahl);
zahl--;
console.log("dekrement: " + zahl);

let score = 5 + 5 * 10;
console.log("Ergebnis: " + score);
let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);
let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);
score3 += 10;
console.log("Ergebnis: " + score3);

console.log("---------------------------------------------");

console.log("Level1_13");

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);
// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);
// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);
// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);
// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);

console.log("---------------------------------------------");

console.log("Level1_1 Methods");

let firstName2 = "Peter";
let lastName2 = "Müller";

console.log(
  "vorname länge: " + firstName2.length,
  "nachname länge: " + lastName2.length
);

let fullName = firstName2.length + lastName2.length;
console.log("fullname länge: " + fullName);

console.log("---------------------------------------------");

console.log("Level1_2 Methods");

const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

let letterH = txt.indexOf("h");
console.log("Index von H: " + letterH);

let wordEarth = txt.indexOf("Earth");

console.log("Index vom Wort Erde: " + wordEarth);

let wordMoon = txt.indexOf("Moon");
console.log("Index vom Wort Moon: " + wordMoon);

console.log("---------------------------------------------");
console.log("Level1_3 Methods");

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

let posiSemikolo = txt2.search(";");

console.log("position vom semikolon: " + posiSemikolo);

let posiGreen = txt2.search("green");

console.log("position vom green: " + posiGreen);

let posiBlue = txt2.search("blue");

console.log("position vom blue: " + posiBlue);

console.log("---------------------------------------------");
console.log("Level1_4 Popups");

// window.alert("Hallo Welt");
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// window.confirm("Stimmen Sie meiner Meinung zu?");

// let alter = window.prompt("Gib mir bitte dein Alter:");
// console.log(alter);
// let b2 = 5;
// let a2 = b2 * 5 - 3;
// window.alert(a2);
// let mann = "Robert Wadlow ist der größte Mann der Welt : ";
// let grosse = "2,72m";
// window.confirm(mann + grosse);

console.log("---------------------------------------------");
console.log("Level1_1 Document write");

document.write("<h1>Hello Wordl</h1><p>Have a nice day!!</p>");

let myText = "Hello again";
document.write(myText + "</br>");

let vorName = "yan";
let nachName = "keita";

document.write("vor: " + vorName + "</br>", "nach: " + nachName);
