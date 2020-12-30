// First Solution
function isUnique(str) {
    for(let i = 0; i < str.length; i++) {
        if(str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
  
    return true;
}
string1 = isUnique('Mary')
console.log(string1)

// 2nd Solution

function isUnique(str) {
    const characters = str.split('').sort();

    for (let i = 1; i < characters.length; i++) {
        if (characters[i] === characters[i - 1]) {
            return false;
        }
    }

    return true;
}

string2 = isUnique('Mariam')
console.log(string2)
