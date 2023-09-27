// # Meeting übung
// const nums = [10, 20, 30];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i] * 2);
// }

// for (const zahl of nums) {
//   console.log(zahl * 2);
// }

// nums.forEach((elt) => console.log(elt * 2));

// const newerarray = nums.map((a) => console.log(a * 2));
// console.log(newerarray);

// # Loops lvl1_1

for (let i = 1; i <= 10; i++) {
  console.log(`Hello World ${i}`);
}

// # Loops lvl1_2

let numArray = [];

for (let i = 0; i <= 10; i++) {
  numArray.push(i);
}
console.log(numArray);

// # Loops lvl1_4

let names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

// names.forEach((element) => {
//   console.log(element);
// });

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// # Loops lvl2_1

const imageArray = (count) => {
  let returnArray = [];
  for (let i = 1; i <= count; i++) {
    if (i > 99) {
      returnArray.push(`image_${i}.jpg`);
    } else if (i > 9) {
      returnArray.push(`image_0${i}.jpg`);
    } else {
      returnArray.push(`image_00${i}.jpg`);
    }
  }
  return returnArray;
};

console.log(imageArray(100));

// # Loops lvl2_2

const generate = () => {
  let arrey = ["L"];
  const os = Number(document.querySelector("#oInput").value);

  for (let i = 0; i < os; i++) {
    arrey.push("o");
  }
  arrey.push("p");
  document.querySelector("#result").innerHTML = arrey.join("");
};

// # loops lvl3_2

let numArr = [5, 22, 15, 100, 55];
let resultArr = [];
numArr.forEach((elt) => {
  let divNum;
  for (let i = 2; i < 50; i++) {
    divNum = elt / i;
    if (divNum - Math.floor(divNum) === 0 && elt != i) {
      resultArr.push(`${elt} is devidable by ${i}. The result is: ${divNum}`);
    }
  }
});

resultArr.forEach((elt) => document.write(elt + "<br>"));

// # loops lvl3_3

const generate2 = () => {
  let arrey = ["L"];
  const os = Number(document.querySelector("#oInput2").value);

  for (let i = 0; i < os; i++) {
    if (os % 2 === 0 && os != 2) {
      arrey.push("o");
    } else {
      i % 2 === 0 ? arrey.push("o") : arrey.push("0");
    }
  }
  arrey.push("p");
  document.querySelector("#result2").innerHTML = arrey.join("");
};
