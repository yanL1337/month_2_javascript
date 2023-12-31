function double() {
  const num = Number(document.querySelector("#zahl").value);

  document.querySelector("#result1").innerHTML = num * 2;
}

// - Aufgabe1_2

function getBirth() {
  const datum = new Date(document.querySelector("#datum").value);
  let aktDatum = Date.now();

  const diff = Math.abs(aktDatum - datum);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  document.querySelector("#result2").innerHTML = "Du bist: " + age;
}
// - Aufgabe1_3

function getAgeDiff() {
  const age1 = Number(document.querySelector("#alter1").value);
  const age2 = Number(document.querySelector("#alter2").value);
  console.log(age1 - age2);
  document.querySelector("#result3").innerHTML =
    "Die differzen lautet: " + (age1 - age2);
}

// - Aufgabe1_4

function addOne() {
  let count = Number(document.querySelector("#zahlen").innerHTML);

  document.querySelector("#zahlen").innerHTML = count + 1;
}

function minusOne() {
  let count = Number(document.querySelector("#zahlen").innerHTML);

  document.querySelector("#zahlen").innerHTML = count - 1;
}
function plusTen() {
  let count = Number(document.querySelector("#zahlen").innerHTML);

  document.querySelector("#zahlen").innerHTML = count + 10;
}

function minusTen() {
  let count = Number(document.querySelector("#zahlen").innerHTML);

  document.querySelector("#zahlen").innerHTML = count - 10;
}

function plusHun() {
  let count = Number(document.querySelector("#zahlen").innerHTML);

  document.querySelector("#zahlen").innerHTML = count + 100;
}

function minusHun() {
  let count = Number(document.querySelector("#zahlen").innerHTML);

  document.querySelector("#zahlen").innerHTML = count - 100;
}

function reset() {
  document.querySelector("#zahlen").innerHTML = 0;
}
function malTwo() {
  let count = Number(document.querySelector("#zahlen").innerHTML);

  document.querySelector("#zahlen").innerHTML = count * 2;
}

// - Aufgabe1_5

function changeColor() {
  const wunsch = document.querySelector("#farbe").value;

  document.body.style.backgroundColor = wunsch;
}

// - Aufgabe2_1

function changeHead() {
  const hzwei = document.querySelector("#heading");
  hzwei.classList.add("red");
}
function resetHead() {
  const hzwei = document.querySelector("#heading");
  hzwei.classList.remove("red");
}

// - Aufgabe3_3

function valueToHex(c) {
  var hex = c.toString(16);

  return hex;
}

function rgbToHex(r, g, b) {
  return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
}

function changeBackground() {
  const green = Number(document.querySelector("#green").value);
  const red = Number(document.querySelector("#red").value);
  const blue = Number(document.querySelector("#blue").value);

  document.body.style.backgroundColor = rgbToHex(red, green, blue);
}

// ! ZUSATZ STOFF NICHT BEACHTEN

function show() {
  document.querySelector(".wyld").classList.toggle("zeig");
}

function activate() {
  document.querySelector("h3").classList.toggle("anime");
  document.querySelector("img").classList.toggle("anime2");
  document.querySelector("img:nth-of-type(2)").classList.toggle("anime2");
  document.querySelector("body").classList.toggle("bodyMaker");
}
