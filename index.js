const inputOfmoney = document.querySelector('.amount-of-money');
const btn = document.querySelector('.btn');
const selectedEur = document.querySelector('.option-eur');
const selectedUsd = document.querySelector('.option-usd');
const selectedChf = document.querySelector('.option-chf');
const outOfmoney = document.querySelector('.result-pln');
// const urlEur = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/';
// const urlUsd = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/';
// const urlChf = 'http://api.nbp.pl/api/exchangerates/rates/a/chf/';
const url = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
const formSelectList = document.querySelectorAll('.form-select option-rates');
const availablecurrencies = ['EUR', 'USD', 'CHF'];
let newArr;

btn.addEventListener('click', () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => newArr = data[0].rates.filter(element => availablecurrencies.includes(element.code)))
    .then(() => u co Bartek mi mowil)
    .catch((err) => console.log('err', err));
    console.log(newArr);
})




// .then((response) => availablecurrencies.map(element => response.data[0].rates.includes(element)))

// data['rates']

// getRates(data['rates'].mid));

// for(let i = 0; i < formSelectList.length; i++)

// function getRates(rates) {
//     for (const rate in rates)
//     {

//     }
// };


// let countryCode

