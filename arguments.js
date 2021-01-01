// Multiple arguments
let add = function (x,y,z) {
    return x + y + z
};

let result = add(1,3, 4);
console.log(result);

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    // console.log(name)
    // console.log(score)
    return 'Name: ' + name + ' | Score: ' + score
}
let scoreTest = getScoreText(undefined, 40)
console.log(scoreTest)

// Exercise
// create a function that takes in 2 parameters and one of these parameters has a default value (e.g. total and tipPercent = .2)

let tipcalculator = function(total, tipPercent = .2) {
    return total + total * tipPercent
}

let totalBill = tipcalculator(100);
console.log(totalBill);