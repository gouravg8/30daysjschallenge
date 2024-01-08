import domtoimage from "dom-to-image-more";

const inp = document.querySelectorAll(".form input");
const img = document.querySelector(".heroimg");
let outputImage = document.querySelector("#outputImageDiv");

console.log("hi from scriptjs");

function handleChange() {
  const suff = this.dataset.size || "";
  img.style.setProperty(`--${this.name}`, this.value + suff);
  //   console.log(this.value, this.name, this.dataset.size);
}

inp.forEach((inp) => {
  inp.addEventListener("change", handleChange);
  inp.addEventListener("mousemove", handleChange);
});
// console.log(inp);

// adding final image
function addImage(img) {
  img.style.objectFit = "cover";
  outputImage.innerHTML = "";
  outputImage.appendChild(img);
}
// conver to png
function convertToPng() {
  let node = document.getElementById("heroImg");
  node.classList.add("outimgage");
  // let imgStyle = {
  //   width: node.offsetWidth,
  //   height: node.offsetHeight,
  // };
  domtoimage
    .toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      img.width = 500;
      img.height = 500;
      addImage(img);
      // console.log(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}
//   To Download as PNG:

function downloadAsPng() {
  let node = document.getElementById("heroImg");
  domtoimage.toPng(node).then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = "my-image-name.png";
    link.href = dataUrl;
    link.click();
  });
}
// using fn's to convert and download images
const topng = document
  .querySelector("#topng")
  .addEventListener("click", convertToPng);
const saveaspng = document
  .querySelector("#saveaspng")
  .addEventListener("click", downloadAsPng);