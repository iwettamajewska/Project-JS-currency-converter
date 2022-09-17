const btn = document.querySelector('.btn');
const url = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
const inputOfmoney = document.querySelector('.amount-of-money');
const outOfmoney = document.querySelector('.result-pln');
const selector = document.querySelector('.form-select');
const availablecurrencies = ['EUR', 'USD', 'CHF'];
let threeCurrencies;


btn.addEventListener('click', () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        threeCurrencies = data[0].rates.filter(element => availablecurrencies.includes(element.code))
        const selectValue = selector.value;
        const mid = threeCurrencies.find(element => element.code === selectValue).mid;
        outOfmoney.value = inputOfmoney.value * mid;
    })
    .catch((err) => console.log('err', err))
    })

