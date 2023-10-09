//# LEvel 1_1

let person = {
  vorname: "Anton",
  nachname: "Fish",
  fullName: function () {
    return this.vorname + " " + this.nachname;
  },
};

console.log(person.fullName());

//#Level 1_2

let person2 = {
  vorname: "Anton",
  nachname: "Nüssler",
  alter: 34,
  familienstand: "ledig",
  groesse: "178cm",
  profil: function () {
    return `Name: ${this.vorname} ${this.nachname} <br>
                Alter: ${this.alter} Jahre <br>
                Körpergröße: ${this.groesse} <br>
                Famlilienstand: ${this.familienstand}`;
  },
};
document.getElementById("person").innerHTML = person2.profil();

//! Level 1_1 Classes Constructor

class Ball {
  constructor(ballType) {
    this.type = this.setType(ballType);
  }

  setType(bType) {
    bType == null ? (bType = "regular") : (bType = bType);
    return bType;
  }
}

const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.type);
console.log(ball2.type);

//! Level 1_2 Classes Constructor

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = this.setAge(age);
  }
  setAge(age) {
    if (typeof age === "number") {
      return age;
    } else {
      return "Invalid Input";
    }
  }
  printInfo() {
    console.log(
      `Dein Name lautet: ${this.name} und du bist ${this.age} Jahre alt`
    );
  }
}

const Yan = new Person("Yan", 23);
Yan.printInfo();
