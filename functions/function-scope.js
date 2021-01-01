// Global scope (fahrenheitToCelcius, temp1, temp2)
let fahrenheitToCelcius = function(fahrenheit) {
    //let fahrenheit = num;
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius
}

let temp1 = fahrenheitToCelcius(32)
console.log(temp1)
let temp2 = fahrenheitToCelcius(68)
console.log(temp2)