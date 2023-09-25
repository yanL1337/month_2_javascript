// # Level1_1

const friends = ["Deniz", "Sascha", "Max"];
const person = ["Cool", "Nett", "built different"];
const favFood = ["Pizza", "Auflauf", "Döner"];

console.log(friends, person, favFood);

// # Level1_2

console.log(friends[0], person[1], favFood[2]);

// # Level1_3

console.log(friends.length, person.length, favFood.length);

// # Level1_4

friends.push("Timo", "Brian");
console.log(friends);

// # Level1_5

person.pop();
console.log(person);

// # Level1_6

console.log(person.shift());

// # Level1_7

favFood.unshift("Lasange", "Currywurst");
friends.unshift("Max2", "Emmy");

console.log(favFood, friends);

// # Level1_10

const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

const punktSplit = text.split(".");
const whitespaceSplit = text.split(" ");
const charSplit = text.split("");

console.log(punktSplit);
console.log(whitespaceSplit);
console.log(charSplit);
