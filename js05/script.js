let panel = document.querySelectorAll(".panel");
let div = document.createElement("div");
div.classList.contains;
function handleClick() {
  this.classList.add("open");
}

function mouseleave() {
  this.classList.remove("open");
}

panel.forEach((el) => {
  el.addEventListener("click", handleClick);
  el.addEventListener("mouseleave", mouseleave);
});
