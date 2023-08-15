const baseURL = 'http://data.fixer.io/api/latest?';
const key = '0b2af726a870f850cb22a7f2f75519d3'

calculate.onclick = function () {
    const fromCurrancy = from.value.trim().toUpperCase();
    const toCurrancy = to.value.trim().toUpperCase();
    const sumValue = +sum.value;
    // console.log(fromCurrancy);
    fetch(`${baseURL}access_key=${key}`)
        .then((responce) => responce.json())
        .then(({ rates }) => {
            console.log(rates);
            const result = (rates[toCurrancy] / rates[fromCurrancy]) * sumValue;
            // console.log(result);
            const resElem = document.createElement('h1');
            const resText = document.createTextNode(`Result: ${result.toFixed(3)}`);
            resElem.append(resText);
            res.append(resElem);
        });
};
