// variable initiazlization
var one = 1;
var two = 2;
var three = 3;

console.log("Initial values: ");
console.log(`variable one:${one}, variable two:${two}, variable three:${three}`);

var temporary = one; // storing value of variable 'one' into a temporay variable
one = three; // reaasigning the value of variable 'one' 
three = two; // reassigning the value of variable 'three'
two = temporary; // reassigning the value of variable 'two' to 'temporary' which was the initial value of variable 'one'

console.log("Updated Variables:")
console.log(`variable one:${one}, variable two:${two}, variable three:${three}`)


