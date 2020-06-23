// modals
const modal__measurment = document.querySelector(".modal__measurment");
const modal__measurmentClose = document.querySelector(".modal__measurment-close");

const modal__callback = document.querySelector(".modal__callback");
const modal__callbackClose = document.querySelector(".modal__callback-close");

const modal__costCalc = document.querySelector(".modal__cost-calc");
const modal__costCalcClose = document.querySelector(".modal__cost-calc-close");

// buttons
const header__callMeasurer = document.querySelector(".header__call-measurer");
const header__telCallback = document.querySelector(".header__tel-callback");
const screenQuastions__btn = document.querySelector(".screen-quastions__btn");

const coldBtn1 = document.querySelector(".coldBtn1");
const warmBtn1 = document.querySelector(".warmBtn1");
const coldBtn2 = document.querySelector(".coldBtn2");
const warmBtn2 = document.querySelector(".warmBtn2");
const coldBtn3 = document.querySelector(".coldBtn3");
const warmBtn3 = document.querySelector(".warmBtn3");
const coldBtn4 = document.querySelector(".coldBtn4");
const warmBtn4 = document.querySelector(".warmBtn4");
const coldBtn5 = document.querySelector(".coldBtn5");
const warmBtn5 = document.querySelector(".warmBtn5");

// functions close
modal__measurmentClose.addEventListener("click", function (event) {
  modal__measurment.classList.remove("modal__is-open");
});

modal__callbackClose.addEventListener("click", function (event) {
  modal__callback.classList.remove("modal__is-open");
});

modal__costCalcClose.addEventListener("click", function (event) {
  modal__costCalc.classList.remove("modal__is-open");
});

// events
header__callMeasurer.addEventListener("click", function (event) {
  modal__measurment.classList.add("modal__is-open");
});

header__telCallback.addEventListener("click", function (event) {
  modal__callback.classList.add("modal__is-open");
});

screenQuastions__btn.addEventListener("click", function (event) {
  modal__callback.classList.add("modal__is-open");
});

coldBtn1.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
warmBtn1.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
coldBtn2.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
warmBtn2.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
coldBtn3.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
warmBtn3.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
coldBtn4.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
warmBtn4.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
coldBtn5.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
warmBtn5.addEventListener("click", function (event) {
  modal__costCalc.classList.add("modal__is-open");
});
