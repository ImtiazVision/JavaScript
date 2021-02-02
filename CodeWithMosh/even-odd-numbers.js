showNum(10);

function showNum(num) {
    for (let i = 0; i <= num; i++) {
        if (i%2 === 0) console.log(i,'even number')
        else console.log(i,'odd number')
        // cleaner version //
        const msg = (i % 2 === 0) ? 'even number': 'odd number'

        console.log(msg, i)
    }
}