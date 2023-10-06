//# Level 1_2

const perosn = {
  name: "Yan",
  age: 23,
  sagNameAlter: () => {
    alert(`Hallo mein Name ist ${this.name} und ich bin ${this.age} Jahre alt`);
  },
};

// perosn.sagNameAlter();
console.log(perosn.name + " " + perosn.age);

//# Level 1_4

let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

unsereHaustiere.forEach((entry) => {
  console.log(entry.names);

  for (let keys in entry.names) {
    entry.names[keys] =
      Math.floor(Math.random() * 10) % 2 == 0 ? "Dieter" : "Hans";
  }
  console.log(entry.names);
});

//# Level 1_5

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);

//# Level 1_7

let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

myMusic.forEach((entry) => {
  if (entry.release_year > 1975) {
    document.body.innerHTML = `
        <p> ${entry.artist}</p> 
        <p> ${entry.title}</p> 
        <p> ${entry.medium.join(",")}</p>   
        `;
  }
});

//#Level 1_8

let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

const display = (object) => {
  object.forEach((entry) => {
    console.log(entry.name);
    console.log(entry.coop);
    console.log(entry.address.city);
    console.log(entry.emails.join(" , "));
  });
};

display(studentData);

//# Level 2_1 BONUS

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

const names = [];
const preise = [];
const veraenderung = [];
edelMetallPreise.forEach((elt) => names.push(elt.name));
edelMetallPreise.forEach((elt) => preise.push(elt.preiseGramEuro));
edelMetallPreise.forEach((elt) => veraenderung.push(elt.veraenderung));

let table =
  "<table> <tr> <th>Name</th><th>Preis Gram Euro</th><th>Veränderung</th> </tr>";
for (let i = 0; i < edelMetallPreise.length; i++) {
  table += `<tr> <td>${names[i]}</td>  <td>${preise[i]}</td> <td>${veraenderung[i]}</td></tr>`;
}
document.body.innerHTML += table + "</table>";

//# Level 2_2 BONUS

const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

singers.forEach((entry) => {
  console.log(entry.name);
});

console.log(
  singers.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
);
