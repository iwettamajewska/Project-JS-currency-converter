const inputOfmoney = document.querySelector('.amount-of-money');
const btn = document.querySelector('.btn');
const selector = document.querySelector('.form-select');
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
    

    // .then(() => console.log(threeCurrencies[0]))   
    // .then(() => outOfmoney.value = inputOfmoney.value *  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  )
    .catch((err) => console.log('err', err));
    // console.log(threeCurrencies);
})


// tutaj (w .then) 
// mam dostęp do threeCurrencies który jest uzupełniony danymi z BE. 
// Tutaj muszę wywołać jakąś funckję, do której przekaże tego threeCurrencies 
// ALBO po prostu wywołać funckję, która co teraz zrobi? Będzie musiała stworzyć 3 optiony, które będą miały jakieś value równe wartości tej waluty.


// .then((data) => {
//     const entries = Object.entries(data);
//     for(i=0; i <entries.length; i++){
//         select[0].innerHTML = `<option value="${entries[i][0]}">${entries[i][0]}`
//     }
// }



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

