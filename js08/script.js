let canv = document.querySelector("#canv");
let ctx = canv.getContext("2d");
let drawing = false;
canv.width = window.innerWidth;
canv.height = window.innerHeight;

// ctx.strokeStyle = "#badaaa";
let hsl = 0;
let lwidth = 0;
let direction = false;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 0;
console.log(canv.width, canv.height);
let lastX = 0,
  lastY = 0;

function draw(e) {
  if (!drawing) return;
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  [lastX, lastY] = [e.clientX, e.clientY];
  if (hsl > 360) {
    hsl = 0;
  }
  hsl++;

  if (lwidth > 100 || lwidth < 1) {
    direction = !direction;
  }

  if (direction) lwidth++;
  else lwidth--;

  ctx.lineWidth = lwidth;
  console.log(lwidth);

  ctx.strokeStyle = `hsl(${hsl}, 100%, 50%)`;
}

canv.addEventListener("mousemove", draw);
canv.addEventListener("mousedown", (e) => {
  drawing = true;
  [lastX, lastY] = [e.clientX, e.clientY];
});
canv.addEventListener("mouseup", () => (drawing = false));
canv.addEventListener("mouseleave", () => (drawing = false));
