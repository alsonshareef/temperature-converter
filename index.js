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
let chooseConversion = ['Celcius', 'Farenhiet'];
let index = readlineSync.keyInSelect(chooseConversion, 'Hi there, what type of conversion are you looking to do?');

if (index === 'Celcius') {
    
} else {
    
}

// Take an input of the degree
// Run the calculation to convert
// Output the result and redirect to menu