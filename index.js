const inputOfmoney = document.querySelector('.amount-of-money');
const btn = document.querySelector('.btn');
const selectedEur = document.querySelector('option-eur');
const selectedUsd = document.querySelector('option-usd');
const selectedChf = document.querySelector('option-chf');
const outOfmoney = document.querySelector('.result-pln');

btn.addEventListener('click', () => {
    fetch('http://api.nbp.pl/api/exchangerates/rates/a/chf/')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('err', err));
})

