let name = 'Kevin';
let occupation = 'Web Developer';

console.log(`Hello, my name is ${name} and I am a ${occupation}!`);

// Challenge Area 
// A 20% tip on $50 would be $10


let billCalculator = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip} `
}

let totalBill = billCalculator(100);
console.log(totalBill);