//# Level 1_2

let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const Datum = new Date();
console.log(Datum);
console.log(Datum.getFullYear());
console.log(Datum.getMonth() + " Monat");
console.log(Datum.getDate() + " Tag");
console.log(Datum.getHours() + " Stunde");
console.log(Datum.getMinutes() + " Minute");
console.log(Datum.toLocaleString("default", { weekday: "long" }));
console.log(Datum.toLocaleString("default", { month: "long" }));

console.log("----------------------------");

//# LEvel 1_3

let Datum2 = new Date();
Datum2.setDate(30);
Datum2.setFullYear(2222);
console.log(Datum2);

let Datum3 = new Date();
Datum3.setDate(24);
Datum3.setMonth(1);
Datum3.setFullYear(2123);
console.log(Datum3);

let Datum4 = new Date();
Datum4.setDate(Datum4.getDate() + 30);
console.log(Datum4);

console.log("----------------------------");

//# LEvel 1_6

const date1 = new Date(1999, 10, 5, 15); //PM
const date2 = new Date();
const date3 = new Date(2019, 12, 3, 12); //PM
const date4 = new Date(2000, 1, 1, 11); //AM

const checkDate = (date) => {
  date.getHours() > 0 && date.getHours() < 12
    ? console.log("AM")
    : console.log("PM");
};

checkDate(date1);
checkDate(date4);

console.log("----------------------------");

//# LEvel 1_7

const checkWorkday = (date) => {
  return date.getDay() < 6 ? "Arbeitstag" : "Weekend";
};

console.log(checkWorkday(date2));

console.log("----------------------------");

//# LEvel 2_1

const aktDatum = new Date();

document.querySelector("#dateToday").innerHTML = `${aktDatum.getDate()}/${
  aktDatum.getMonth() + 1
}/${aktDatum.getFullYear()}`;
