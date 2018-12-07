let readlineSync = require('readline-sync');

const C_to_F = (C) => {
    let result = C * 1.8 + 32
    return `${result}°F`;
}

const F_to_C = (F) => {
   let result = (F - 32) * .5556
   return `${result}°C`;
}

// Select whether to convert from C => F || F => C
let chooseConversion = ['Celcius to Fahrenheit', 'Fahrenheit to Celcius'];
let index = readlineSync.keyInSelect(chooseConversion, 'Hi there, what type of conversion are you looking to do?');

if (index === 0) {
    let input = readlineSync.question('Please enter the degrees in Celcius: ')
    console.log(C_to_F(input))
} else if (index === 1) {
    let input = readlineSync.question('Please enter the degrees in Fahrenheit: ')
    console.log(F_to_C(input))
} else {
    console.log('bye')
}

// Redirect to Menu