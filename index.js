const inputOfmoney = document.querySelector('.amount-of-money');
const btn = document.querySelector('.btn');
const selectedEur = document.querySelector('.option-eur');
const selectedUsd = document.querySelector('.option-usd');
const selectedChf = document.querySelector('.option-chf');
const outOfmoney = document.querySelector('.result-pln');
// const urlEur = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/';
// const urlUsd = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/';
// const urlChf = 'http://api.nbp.pl/api/exchangerates/rates/a/chf/';
const url = 'http://api.nbp.pl/api/exchangerates/rates/a/';
const formSelectList = document.querySelectorAll('.form-select option-rates');
const availablecurrencies = ['EUR', 'USD', 'CHF'];

btn.addEventListener('click', () => {
    fetch(url)
    .then((response) => response.json())
    .then((response) => availablecurrencies.map(element => response.data[0].rates.includes(element)))
    .then((data) => console.log(data))
    .catch((err) => console.log('err', err));
})


// data['rates']

// getRates(data['rates'].mid));

// for(let i = 0; i < formSelectList.length; i++)

// function getRates(rates) {
//     for (const rate in rates)
//     {

//     }
// };


// let countryCode

