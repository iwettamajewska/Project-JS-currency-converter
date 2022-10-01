const converterBtn = document.querySelector(".btn");
const url = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";
const urlEffectiveDate = "http://api.nbp.pl/api/exchangerates/tables/A/";
const inputOfmoney = document.querySelector(".amount-of-money");
const outOfmoney = document.querySelector(".result-pln");
const selector = document.querySelector(".form-select");
const availablecurrencies = ["EUR", "USD", "CHF"];

let threeCurrencies;

converterBtn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      threeCurrencies = data[0].rates.filter((element) =>
        availablecurrencies.includes(element.code)
      );
      const selectValue = selector.value;
      const mid = threeCurrencies.find(
        (element) => element.code === selectValue
      ).mid;
      outOfmoney.value = Number.parseFloat(inputOfmoney.value * mid).toFixed(2);
    })
    .catch((err) => console.log("err", err));
});

const showEffectiveDate = () => {
  fetch(urlEffectiveDate)
    .then((response) => response.json())
    .then((data) => {
      let effectiveDate = document.querySelector(".effective-date");
      effectiveDate.innerHTML = data[0].effectiveDate;
    })
    .catch((err) => console.error("err", err));
};

showEffectiveDate();
