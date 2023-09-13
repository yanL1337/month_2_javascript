function double() {
  const num = Number(document.querySelector("#zahl").value);

  document.querySelector("#result1").innerHTML = num * 2;
}

function getBirth() {
  const datum = new Date(document.querySelector("#datum").value);
  let aktDatum = Date.now();

  const diff = Math.abs(aktDatum - datum);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  document.querySelector("#result2").innerHTML = "Du bist: " + age;
}

function getAgeDiff() {
  const age1 = Number(document.querySelector("#alter1").value);
  const age2 = Number(document.querySelector("#alter2").value);
  console.log(age1 - age2);
  document.querySelector("#result3").innerHTML =
    "Die differzen lautet: " + (age1 - age2);
}

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

function changeColor() {
  const wunsch = document.querySelector("#farbe").value;

  document.body.style.backgroundColor = wunsch;
}
