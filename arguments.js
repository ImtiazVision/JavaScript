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