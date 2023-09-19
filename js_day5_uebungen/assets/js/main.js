// - Level1_1

let firstName = "Yan";
let lastName = "Keita";

console.log(
  `Vorname ist: ${firstName.length} lang und Nachname: ${
    lastName.length
  } lang und insgesamt ${firstName.length + lastName.length}`
);

// - Level1_2

const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

// - Level1_3
let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";"), txt2.search("green"), txt2.search("blue"));

// - Level1_4

const A = "Susi is going to codingschool";

// # normale brakka
let susi = A.slice(0, 4);

//! meine brakka
let arr = A.split(" ");
for (i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}

// - Level1_7
const text2 = "Sam is good at codingschool";

document.write(text2.replace(text2, "Sam is bad at school") + "<br>");
document.write(text2.replace(text2, "Susi is good at school") + "<br>");
document.write(text2.replace(text2, "Sam is good at tennis") + "<br>");

// - Level1_8

const text3 = "Sam is going to codingschool";
const sam = text3.split(" ")[0];
const isGo = `${text3.split(" ")[1]} ${text3.split(" ")[2]} ${
  text3.split(" ")[3]
}`;
const school = text3.split(" ")[4];
document.write(`${sam.toUpperCase()} ${isGo} ${school.toUpperCase()}  <br>`);
document.write(`${sam} ${isGo.toUpperCase()} ${school} <br>`);

const test = text3.split(" ");
let newWord = "";
test.forEach((wort) => {
  newWord += wort.charAt(0).toUpperCase() + wort.slice(1) + " ";
});

document.write(newWord.concat("<br>"));

// - Level1_8

const eins = "Sam is going to codingschool";
const zwei = "Susi";
const drei = "and";

document.write(`${eins} ${drei} to the movie theater <br>`);
document.write(
  `${eins.slice(0, eins.search("to") + 2)} the movie theater <br>`
);
document.write(`${zwei} ${drei} ${eins.replace("is", "are")} <br>`);
document.write(
  `${zwei} ${drei} ${eins.replace(
    "is going to codingschool",
    "are going to gym and to the movie theater"
  )} <br>`
);

document.write(
  `${zwei} ${eins} ${drei.replace("and", "and the movie theater")}`
);

// - Level2_3

function searchWord() {
  const searchPerm = document.querySelector("#search-input").value;
  let derText = document.querySelector("article");

  console.log(searchPerm);
  console.log(derText);

  derText.innerHTML = derText.innerText.replaceAll(
    searchPerm,
    `<span class="highlight">${searchPerm}</span>`
  );
}

// ! Level1_1 CONDITIONALS

function verify() {
  document.querySelector("#age").value > 17
    ? (document.querySelector("#age").value = "Voll")
    : (document.querySelector("#age").value = "nicht voll");
}

// ! Level1_4 CONDITIONALS

function verifyPass() {
  document.querySelector("#pass").value.length > 7
    ? alert("geht klar")
    : alert("nicht klar");
}

// ! Level2_5 CONDITIONALS

function check() {
  const land = document.querySelector("#bundeslandInfo").value;

  switch (land) {
    case "Bayern":
      document.querySelector("#bundeslandInfoErgebnis").innerHTML =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;

    case "Berlin":
      document.querySelector("#bundeslandInfoErgebnis").innerHTML =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;

    case "Brandenburg":
      document.querySelector("#bundeslandInfoErgebnis").innerHTML =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;

    case "Baden-Württemberg":
      document.querySelector("#bundeslandInfoErgebnis").innerHTML =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;

    case "Bremen":
      document.querySelector("#bundeslandInfoErgebnis").innerHTML =
        "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;

    case "Hamburg":
      document.querySelector("#bundeslandInfoErgebnis").innerHTML =
        "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;

    case "Niedersachsen":
      document.querySelector("#bundeslandInfoErgebnis").innerHTML =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;

    default:
      "Ein solches Bundesland gibt es in Deutschland nicht.";
      break;
  }
}

// # Level1_1 Template Literals

let names = "yan";
let hobby = "biken";
let essen = "pizza";

console.log("ich bin " + names + " i luv " + essen + " und " + hobby);
console.log(
  `Hallo ich bin ${names} und mein hobby ist ${hobby} außerdem liebe ich ${essen}`
);

// # Level1_2 Template Literals

let refrain =
  "Is someone getting the best, the best, the best The best of you?";

let faith =
  "Has someone taken your faith? It's real, the pain you feel Your trust, you must confess Is someone getting the best, the best, the best The best of you?";

console.log(`I've got another confession to make
I'm your fool
Everyone's got their chains to break
Holding you
Were you born to resist or be abused?
${refrain}
${refrain}
Are you gone and on to someone new?
I needed somewhere to hang my head
Without your noose
You gave me something that I didn't have
But had no use
I was too weak to give in
Too strong to lose
My heart is under arrest again
But I break loose
My head is giving me life or death
But I can't choose
I swear I'll never give in
I refuse
${refrain}
${refrain}
${faith}
Oh
Oh, ho-oh
Oh, oh-oh
Oh, oh-oh
Oh
${faith}
${refrain}
I've got another confession, my friend
I'm no fool
I'm getting tired of starting again
Somewhere new
Were you born to resist or be abused?
I swear I'll never give in, I refuse
${refrain}
${refrain}
${faith}
Oh`);

// * Level1_6 Functions

function returnOne() {
  return 1;
}

let x = 1;
let y = returnOne();

if (x === y) {
  console.log("Wird das gedruckt?");
}
