import React from "react";
import "./styles.css";

const number = 15;
const roman = "XV";

function convert(number) {
  console.log("number " + number);
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    roman = "",
    i;
  for (i in lookup) {
    while (number >= lookup[i]) {
      roman += i;
      console.log("roman " + roman);
      number -= lookup[i];
      console.log("number " + number);
    }
  }
  return roman;
}

function convertBack(number) {
  let lookup = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
    },
    roman = 0,
    i;
  let length = number.length;
  for (i in lookup) {
    while (number[length - 1] === lookup[i]) {
      roman += Number(i);
      length--;
    }
  }
  return roman;
}

console.log(convert(number));
console.log(convertBack(roman));
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
