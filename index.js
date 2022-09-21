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
        outOfmoney.innerText = Number.parseFloat(inputOfmoney.value * mid).toFixed(2)
        // Druga mozliwosc (zostaw sobie, ale bez wysyłania do sprawdzenia):
        // let result = inputOfmoney.value * mid;
        // result = Number.parseFloat(result).toFixed(2);
    })
    .catch((err) => console.log('err', err))
    })


    // currencyConverterBtn.addEventListener('click', () => {           
    //         const newRow = document.createElement('div');
    //          newRow.classList.add('row');
    //          newRow.classList.add('bottom-row');
            
    //          const newElement = document.createElement('span');
    //          newElement.classList.add('live-exchange-rates');
    //          newElement.classList.add('col-6');
    //          newRow.appendChild(newElement);

    // })

    const urltwo = 'http://api.nbp.pl/api/exchangerates/rates/a/chf/';
    const currencyConverterBtn = document.querySelector('.currency-converter-btn');



    console.log(urltwo)

    currencyConverterBtn.addEventListener('click', () => {
        fetch(urltwo)
        .then((response) => response.json())
        .then((urltwo) => console.log(urltwo))
        .then((data) => {
            chf = data[0].rate.mid;
            console.log(chf);
        })
        .catch((err) => console.error('err', err));
        })




        function get_emoji(emoji) {
            let emoji_code = [...emoji].map(e => e.codePointAt(0).toString(16)).join(`-`).toUpperCase();
            new_url = `https://openmoji.org/data/color/svg/${emoji_code}.svg`
            document.write(`<img src=${new_url} style="height: 80px;">`);
        }
        get_emoji("🦴")
        get_emoji("🎭")
        get_emoji("👩‍⚕️")
