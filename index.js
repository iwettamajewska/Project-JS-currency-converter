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
        outOfmoney.value = Number.parseFloat(inputOfmoney.value * mid).toFixed(2)
        // Druga mozliwosc (zostaw sobie, ale bez wysyłania do sprawdzenia):
        // let result = inputOfmoney.value * mid;
        // result = Number.parseFloat(result).toFixed(2);
    })
    .catch((err) => console.log('err', err))
    })

    
    
    const currencyConverterBtn = document.querySelector('.currency-converter-btn');

    const urlEffectiveDate = 'http://api.nbp.pl/api/exchangerates/tables/A/';

    
    // const showEffectiveDate = () => {
    //     fetch(urlEffectiveDate)
    //      .then((response) => response.json())
    //        .then((data) => {
    //          let effectiveDate = document.querySelector('.effective-date');
    //          effectiveDate.innerHTML = data[0].effectiveDate;
    //         // document.effectiveDate.insertAdjacentHTML(`<span>${data.value}</span>`);
    //  })
    //        .catch((err) => console.error('err', err));
    //        }



     currencyConverterBtn.addEventListener('click', () => {
        fetch(urlEffectiveDate)
         .then((response) => response.json())
           .then((data) => {
            let showEffectiveDate = document.querySelector('.effective-date');
            showEffectiveDate.innerHTML = data[0].effectiveDate;
             
            //  showEffectiveDate.value = data[0].effectiveDate;
            //  const rowEffectiveDate = document.querySelector('.row-effective-date');
            //  rowEffectiveDate.appendChild(showEffectiveDate);
     })
           .catch((err) => console.error('err', err));
          })



        //   document.effectiveDate.insertAdjacentHTML("beforeend", `<p>${data.value}</p>`);

    //  fetch(urlthree)
    //  .then((response) => response.json())
    //  .then((data) => {(data[0].effectiveDate));
    //  document.effectiveDate.insertAdjacentHTML("beforeend", `<p>${data.value}</p>`)
    // .catch((err) => console.error('err', err));
