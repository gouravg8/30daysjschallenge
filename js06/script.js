const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const inpSearch = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");

const makeListItems = (arr) => {
  arr.forEach((elem) => {
    let li = `<li>${elem.city} <span class="population">${elem.population}</span></li>`;
    suggestions.innerHTML += li;
  });
  console.log(arr);
};

async function getData(searchVal) {
  let data = await fetch(endpoint);
  let json = await data.json();

  let filteredArr = json.filter(
    (obj) =>
      obj.city.toLowerCase().includes(searchVal) ||
      obj.state.toLowerCase().includes(searchVal)
  );

  makeListItems(filteredArr);
}

inpSearch.addEventListener("input", (e) => {
  suggestions.innerHTML = "";
  let searchVal = e.target.value;
//   if (searchVal === "" || searchVal === null) console.log("khali");
  if (searchVal !== null || searchVal !== "") {
    getData(searchVal.toLowerCase().trim());
  } else {
    alert("Please provide atleast a character");
  }
});
