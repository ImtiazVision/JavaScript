const isActive = true;
const name1 = 'Imtiaz';
const name2 = ''        // empty string is a falsy value // 
if (name2) console.log('Hello')
if (name1) console.log('Imtiaz')
if (isActive) console.log('Active')

const array = [0, null, undefined, 1, 2, 3];

console.log(countTruthy(array));





function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
        return count;

}