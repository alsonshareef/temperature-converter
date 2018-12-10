const { C_to_F, F_to_C } = require('./temperature_utility');

let readlineSync = require('readline-sync');

// Select whether to convert from C => F || F => C
let running = true;
while (running){
    let chooseConversion = ['Celcius to Fahrenheit', 'Fahrenheit to Celcius'];
    let index = readlineSync.keyInSelect(chooseConversion, 'Hi there, what type of conversion are you looking to do?');

    if (index === 0) {
        let input = readlineSync.question('Please enter the degrees in Celcius: ')
        console.log(C_to_F(input))
    } else if (index === 1) {
        let input = readlineSync.question('Please enter the degrees in Fahrenheit: ')
        console.log(F_to_C(input))
    } else {
        running = false;
        console.log('bye')
    }
}