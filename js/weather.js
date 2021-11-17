const icon = document.querySelector(".weather-title img");
const weather = document.querySelector(".weather-title span:nth-child(2)");
const city = document.querySelector(".weather-title span:nth-child(3)");
const load = document.querySelector(".loading");
const detail = document.querySelector(".detail");
const weatherTitle = document.querySelector(".weather-title");
const weatherDetail = document.querySelector(".weather-detail");
const temp = document.querySelector(".weather-detail span:first-child");
const humi = document.querySelector(".weather-detail span:nth-child(2)");
const sunRise = document.querySelector(".weather-detail span:nth-child(3)");
const sunSet = document.querySelector(".weather-detail span:nth-child(4)");
const hideDetail = document.querySelector(".hide-detail");
weatherDetail.classList.add("hidden");

const API_KEY = "403ab7220f45d2c5074c471d2bfd07e2"

let DATE;
let HOURS;
let MINUTES;
let SECONDS;

function loading(text, load) {
    if (text === "") {
      load.classList.toggle("hidden");
    } else {
      load.classList.toggle("hidden");
    }
  }
  
  function padTwoZero(data) {
    return String(data).padStart(2, "0");
  }
  
  function getTime(time) {
    DATE = Math.floor(time / (60 * 60 * 24));
    time -= DATE * 60 * 60 * 24;
    HOURS = Math.floor(time / (60 * 60));
    time -= HOURS * 60 * 60;
    MINUTES = Math.floor(time / 60);
    time -= MINUTES * 60;
    SECONDS = Math.floor(time);
    return `${padTwoZero((HOURS + 9) % 24)}시 ${padTwoZero(MINUTES)}분`;
  }

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        city.innerText = data.name;
        weather.innerText = data.weather[0].description;
        temp.innerText = `온도 : ${data.main.temp}℃`;
        humi.innerText = `습도 : ${data.main.humidity}%`;
        sunRise.innerText = "일출 : " + getTime(data.sys.sunrise);
        sunSet.innerText = "일몰 : " + getTime(data.sys.sunset);
        loading(city.innerText, load);
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  function detailClicked() {
    weatherTitle.classList.add("title-connect");
    detail.classList.add("hidden");
    weatherDetail.classList.remove("hidden");
  }
  
  function DetailHide() {
    weatherTitle.classList.remove("title-connect");
    detail.classList.remove("hidden");
    weatherDetail.classList.add("hidden");
  }
  
  detail.addEventListener("click", detailClicked);
  hideDetail.addEventListener("click", DetailHide);
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  loading(city.innerText, load);