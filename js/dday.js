const dDay = document.querySelector(".dday");
const dDayForm = document.querySelector(".dday-input");
const dDayDate = document.querySelector(".dday-input input:first-child");
const dDayTitle = document.querySelector(".dday-input input:nth-child(2)");
const dDayClock = document.querySelector(".dday span");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function untilDDay() {
  function Submit(event) {
    event.preventDefault();
    dDayForm.classList.add("hidden");
    localStorage.setItem("dday-title", dDayTitle.value);
    localStorage.setItem("dday-date", dDayDate.value);
  }

  const savedTitle = localStorage.getItem("dday-title");
  if (savedTitle === null) {
    dDayForm.classList.remove("hidden");
    dDayForm.addEventListener("submit", Submit);
    dDayClock.innerText = "";
  } else {
    const CURDAY = new Date();
    let DDAY = new Date(localStorage.getItem("dday-date")) - 32_400_000;
    let DIFF = DDAY - CURDAY;
    if (DIFF <= 0) {
      localStorage.removeItem("dday-title");
      localStorage.removeItem("dday-date");
    }
    const date = Math.floor(DIFF / (1000 * 60 * 60 * 24));
    DIFF -= date * 1000 * 60 * 60 * 24;
    const hours = String(Math.floor(DIFF / (1000 * 60 * 60))).padStart(2, "0");
    DIFF -= hours * 1000 * 60 * 60;
    const minutes = String(Math.floor(DIFF / (1000 * 60))).padStart(2, "0");
    DIFF -= minutes * 1000 * 60;
    const seconds = String(Math.floor(DIFF / 1000)).padStart(2, "0");

    dDayClock.innerText = `Until ${savedTitle} : ${date}d ${hours}h ${minutes}m ${seconds}s`;
    dDayClock.classList.remove("hidden");
  }
}

const num1 = Math.floor(Math.random() * colors.length);
let num2 = Math.floor(Math.random() * colors.length);
while (num1 === num2) {
  num2 = Math.floor(Math.random() * colors.length);
}
const color1 = colors[num1];
const color2 = colors[num2];

dDay.style = `background:linear-gradient(90deg,${color1}, ${color2})`;

untilDDay();
setInterval(untilDDay, 1000);