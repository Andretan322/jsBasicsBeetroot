'use strict';

let askKeyboard = prompt("Type your button");
let message = "This is: "

let keyboard = {
    1: "!",
    2: "@",
    3: "#",
    4: "$",
    5: "%",
    6: "^",
    7: "&",
    8: "*",
    9: "(",
    0: ")",
    "-": "_",
    "=": "+",
};

function buttonIs(askKeyboard) {
    if (askKeyboard != "") {
        if (askKeyboard == 1) {
            alert(message + keyboard[1]);
        } else if (askKeyboard == 2) {
            alert(message + keyboard[2]);
        } else if (askKeyboard == 3) {
            alert(message + keyboard[3]);
        } else if (askKeyboard == 4) {
            alert(message + keyboard[4]);
        } else if (askKeyboard == 5) {
            alert(message + keyboard[5]);
        } else if (askKeyboard == 6) {
            alert(message + keyboard[6]);
        } else if (askKeyboard == 7) {
            alert(message + keyboard[7]);
        } else if (askKeyboard == 8) {
            alert(message + keyboard[8]);
        } else if (askKeyboard == 9) {
            alert(message + keyboard[9]);
        } else if (askKeyboard == 0) {
            alert(message + keyboard[0]);
        } else if (askKeyboard == "-") {
            alert(message + keyboard["-"]);
        } else if (askKeyboard == "=") {
            alert(message + keyboard["="]);
        } else {
            alert("I don't know what you want");
        }
    } else {
        alert("Please, type the button!");
    }
}

buttonIs(askKeyboard);
