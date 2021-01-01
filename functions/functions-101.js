// a function takes in an input(argument), perform necessary code and return the subsequent output
let greet = function () {
    console.log("Welcome!!!")
}

greet()

let square = function(num) {
    // console.log(num)
    let result = num * num
    return result
}

oneValue = square(5) // we call the function with parameter(argument) and store the result in a variable (i.e. 'oneValue')
console.log(oneValue) // we print the variable 'oneValue'
anotherValue = square(9) // we did the same thing as above 
console.log(anotherValue)

// A temperature converter function 

let fahrenheitToCelcius = function(fahrenheit) {
    //let fahrenheit = num;
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius
}

oneValue = fahrenheitToCelcius(32)
console.log(oneValue)
anotherValue = fahrenheitToCelcius(68)
console.log(anotherValue)