let hh = document.querySelector(".hourhand");
let mh = document.querySelector(".minutehand");
let sh = document.querySelector(".secondhand");
let digitaltime = document.querySelector(".digitaltime");

setInterval(() => {
  let date = new Date();
  let hours =
    date.getHours() > 12 ? Math.abs(12 - date.getHours()) : date.getHours();

  hh.style.rotate = hours * 30 + "deg";
  mh.style.rotate = (date.getMinutes() / 60) * 360 + "deg";
  sh.style.rotate = (date.getSeconds() / 60) * 360 + "deg";
  console.log(hours, date.getMinutes(), date.getSeconds());

  digitaltime.textContent = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${hours}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);
