import * as sc from "./staterCode.mjs";

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// console.log(sc.inventors);
const bornin1500 = sc.inventors.filter(
  (item) => item.year >= 1500 && item.year < 1600
);
console.log("Born in 1500s", ...bornin1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstAndLastName = sc.inventors.map((item) => [item.first, item.last]);
console.log("FirstAndLastName", firstAndLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = sc.inventors
  .map((item) => item.year)
  .sort((a, b) => a - b);
console.log("OldestToYoungest", oldestToYoungest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalAgeOfAll = sc.inventors
  .map((item) => item.passed - item.year)
  .reduce((a, b) => a + b);
console.log("TotalAgeOfAll", totalAgeOfAll);

// 5. Sort the inventors by years lived
const yearLived = sc.inventors
  .map((item) => item.passed - item.year)
  .sort((a, b) => a - b);
console.log("YearLived", yearLived);

let arr = [1, 100, 2, 3, 1100];
console.log(arr.sort((a, b) => a - b));

// ====================================================

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
async function g() {
  let r = await fetch(
    "https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris"
  );
  let r2 = await r.json();
  console.log(r2);
}
g();
