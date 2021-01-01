// This function will have 2 parameters such as 1. students score and 2. total possible score
// if the student get 15/20, it will print the messase that 'You got a C (75%)
// A 90-100, B 89-89, C 70-79, D 60-69, F 0-59

let calculator = function (studentsScore, TotalPossibleScore)  {
    let percent = ((studentsScore / TotalPossibleScore) * 100)
    let Grade = ''
    
    if (percent >= 90) {
        //return   `You have earned yourself an A (${percent}%)! `
        Grade = 'A'
    } else if (percent >= 80) {
        //return   `You have earned yourself a B (${percent}%)! `
        Grade = 'B'
    } else if (percent >= 70) {
        //return   `You have earned yourself a C (${percent}%)! `
        Grade = 'C'
    } else if (percent >= 60) {
        //return   `You have earned yourself a D (${percent}%)! `
        Grade = 'D'
    } else {
        //return   `You have earned yourself an F (${percent}%)!`
        Grade = 'F'
    }

    return ` You have earned yourself a/an ${Grade} (${percent}%)! `

}

let result = calculator(13, 20)
console.log(result)