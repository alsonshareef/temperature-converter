import C_to_F from './temperature_utility'
import F_to_C from './temperature_utility'

// C = F test
for (let i = -1000; i <= 10; i++){
    console.log(i)
    if (i === C_to_F(i)) {
        console.log('C AND F ARE EQUAL!')
        console.log(i)
    } 
}

console.log(C_to_F())
