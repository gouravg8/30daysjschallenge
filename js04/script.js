import * as sc from "./staterCode.mjs";

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// console.log(sc.inventors);
const bornin1500 = sc.inventors.filter(
  (item) => item.year >= 1500 && item.year < 1600
);
console.log("Born in 1500s");
console.table(bornin1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstAndLastName = sc.inventors.map((item) => [item.first, item.last]);
console.log("FirstAndLastName");
console.table(firstAndLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = sc.inventors
  // .map((item) => item.year)
  .sort((a, b) => a.year - b.year);
console.log("OldestToYoungest");
console.table(oldestToYoungest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalAgeOfAll = sc.inventors
  .map((item) => item.passed - item.year)
  .reduce((a, b) => {
    return a + b;
  });
console.log("TotalAgeOfAll");
console.table(totalAgeOfAll);

// 5. Sort the inventors by years lived
const yearLived = sc.inventors
  // .map((item) => item.passed - item.year)
  .sort((a, b) => {
    a = a.passed - a.year;
    b = b.passed - b.year;
    return a - b;
  });
console.log("YearLived");
console.table(yearLived);

let arr = [1, 100, 2, 3, 1100];
console.log("sortThem");
console.table(arr.sort((a, b) => a - b));

// ====================================================

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// let cat = document.querySelector(".mw-category");
// let a = Array.from(cat.querySelectorAll("a"));
// let de = a.map(it => it.textContent).filter(it=> it.includes('de'))

// 7. sort Exercise
// Sort the people alphabetically by last name
let lastname = sc.people.sort((a, b) => {
  const [af, al] = a.split(", ");
  const [bf, bl] = b.split(", ");
  return al > bl;
});
console.table(lastname);

// 8. Reduce Exercise
// Sum up the instances of each of these
let out = sc.data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.table(out);