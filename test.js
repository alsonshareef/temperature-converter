const { C_to_F } = require('./temperature_utility');

// C = F test
function test_if_collision(){
    console.log('test for collision between degrees and fahernheight')
    for (let i = -1000; i <= 10; i++){
        if (i === C_to_F(i)) {
            console.log(`${i} C is equal to ${C_to_F(i)} F`)
        } 
    }
}

test_if_collision();