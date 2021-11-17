const clock = document.querySelector("#clock h2");
const today = document.querySelector("#clock h3");

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function padTwoZero(item) {
  return String(item).padStart(2, "0");
}

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear()).padStart(4, "0");
  const months = padTwoZero(date.getMonth() + 1);
  const dates = padTwoZero(date.getDate());
  const days = date.getDay();
  const hours = padTwoZero(date.getHours());
  const minutes = padTwoZero(date.getMinutes());
  const seconds = padTwoZero(date.getSeconds());
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  today.innerText = `${years}-${months}-${dates}, ${DAYS[days]}`;
}

getClock();
setInterval(getClock, 1000);
