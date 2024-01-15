const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const inpSearch = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");

const makeListItems = (arr, searchVal) => {
  arr.forEach((elem) => {
    let regex = new RegExp(searchVal, "gi");
    let hlCity = elem.city.replace(
      regex,
      `<span class="hl">${searchVal}</span>`
    );
    let hlState = elem.state.replace(
      regex,
      `<span class="hl">${searchVal}</span>`
    );
    let li = `<li>
    <span class="name">${hlCity}, ${hlState}</span>
    <span class="population">${elem.population}</span>
    </li>`;
    suggestions.innerHTML += li;
  });
  console.log(arr, Math.random() * 10);
};

async function getData(searchVal) {
  let data = await fetch(endpoint);
  let json = await data.json();
  let regex = new RegExp(searchVal, "gi");
  let filteredArr = json.filter(
    (obj) =>
      //   obj.city.toLowerCase().includes(searchVal) ||
      //   obj.state.toLowerCase().includes(searchVal)
      obj.city.match(regex) || obj.state.match(regex)
  );

  makeListItems(filteredArr, searchVal);
}

function handleSearch() {
  suggestions.innerHTML = "";
  let searchVal = this.value.toLowerCase().trim();
  //   if (searchVal === "" || searchVal === null) console.log("khali");
  if (Boolean(searchVal) && searchVal.length > 0) {
    getData(searchVal);
  }
}

inpSearch.addEventListener("change", handleSearch);
inpSearch.addEventListener("keyup", handleSearch);
