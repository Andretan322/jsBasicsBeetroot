'use strict';

let usd = +prompt("How much USD do you want to convert?");
let eur = 33.01;
let uan = 27.67;
let azn = 16.28;
let message = "This is your value: ";
let currency = "";

function currencyWhat() {
    return prompt("What currency do you need?")
}

function usdConverter(usd) {
    if (isFinite(usd)) {
        currency = currencyWhat();
        if (currency != "" && currency.length == 3) {
            if (currency.toLowerCase() == "eur") {
                alert(message + (usd * eur).toFixed(2));
            } else if (currency.toLowerCase() == "uan") {
                alert(message + (usd * uan).toFixed(2));
            } else if (currency.toLowerCase() == "azn") {
                alert(message + (usd * azn).toFixed(2));
            } else {
                alert("Please, type the correct currency!")
            }
        } else {
            alert("Please, type the correct currency!")
        }
    } else {
        alert("Please, type quantity");
    }
}

usdConverter(usd);