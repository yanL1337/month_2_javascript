// # Array Level1_8

const liebliengsreiseziele = [
  "polen",
  "asien",
  "afrika",
  "england",
  "thailand",
];

console.log(liebliengsreiseziele.slice(2));

// # Array - Sort Level 1_1

let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

console.log(languages.sort());

// # Array - SOrt level 1_2

console.log(languages.reverse());

// # Array - Sort Level 1_3

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a, b) => a - b));

// # Array - Sorty level 2_2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

console.log(numArray2.sort((a, b) => a - b));

// # Array Iteration Level 1_1

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const myDrinks = (arr) => {
  arr.sort();

  arr.forEach((elt) => {
    console.log(elt);
    document.write(elt + "<br>");
  });
};

myDrinks(getraenke);

// # Array Iteration LEvel 1_2

const upperDrinks = getraenke.map((elt) => elt.toUpperCase());
console.log(upperDrinks);

// # Array Iteration Level 1_3

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];
// Das geht tatsächlich
array.sort((a, b) => a - b).forEach((elt) => console.log(elt * 2));

// # Array Iteration level 1_4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let Celcius = fahrenheit.map((elt) => Math.round((elt - 32) / 1.8));
console.log(Celcius);

// # Array Iteration leve 1_5

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];
console.log("---------------------------------------------------------------");
checkNumber.forEach((elt) =>
  elt % 3 === 0 ? console.log(elt + 100) : console.log(elt)
);

// # Array Iteration leve 1_6

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

let clean = album.map((elt) =>
  elt.includes(".")
    ? elt.slice(0, elt.indexOf(".")).toLowerCase()
    : (elt = "invalid")
);

console.log(clean);
