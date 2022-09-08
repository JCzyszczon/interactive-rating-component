let bttn = document.getElementById('sbm');
let after = document.getElementById('after-rate');
let before = document.getElementById('rating-state');
let myRate = document.getElementById('myRateVar');
let number;

function myChoice(num)
{
    number = num;
    bttn.style.cursor = "pointer";
}

function toRates(nmbr)
{
    let rate = nmbr;
    if(rate === undefined) {
        bttn.style.cursor = "default";
    } else {
        after.style.display = "flex";
        before.style.display = "none";
        myRate.innerHTML = rate;
    }
}