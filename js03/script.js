import domtoimage from "dom-to-image";

const inp = document.querySelectorAll(".form input");
const img = document.querySelector(".heroimg");

function handleChange() {
  const suff = this.dataset.size || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suff
  );
  //   console.log(this.value, this.name, this.dataset.size);
}

inp.forEach((inp) => {
  inp.addEventListener("change", handleChange);
  inp.addEventListener("mousemove", handleChange);
});
console.log(inp);

// conver to png
function convertToPng() {
  let node = document.getElementById("my-node");
  domtoimage
    .toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

//   conver to jpg
function convertToJpeg() {
  let node = document.getElementById("my-node");
  domtoimage
    .toJpeg(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

//   To Download as PNG:

function downloadAsPng() {
  let node = document.getElementById("my-node");
  domtoimage.toPng(node).then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = "my-image-name.png";
    link.href = dataUrl;
    link.click();
  });
}

// To Download as JPEG:

function downloadAsJpeg() {
  let node = document.getElementById("my-node");
  domtoimage.toJpeg(node, { quality: 0.95 }).then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = "my-image-name.jpeg";
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
const tojpeg = document
  .querySelector("#tojpeg")
  .addEventListener("click", convertToJpeg);
const saveasjpeg = document
  .querySelector("#saveasjpeg")
  .addEventListener("click", downloadAsJpeg);
