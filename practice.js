Conditional Statements //
var weather = function(temperature){
  console.log("The temperature outside is", temperature, "degrees farenheight.");
  
  if(temperature <= 65) {
    console.log("It's getting cold outside. Better wear a jacket!");
  } else if (temperature > 65 && temperature <= 80){
    console.log("It's pleasant outside!");  
  } else {
    console.log("It's getting hot outside!");
  }
}

weather(90);

// While Loop //

var num = 0;

while(num <= 10) {
  if(num !== 10) {
   console.log("The number is", num, "- less than 10");
  } else {
   console.log("The number is", num, "- the loop is now over");
  }
  num++;
}

// for loop //

for (var i = 0; i <= 10; i++){
  console.log(i)
}

// for .. in loop | It is used to iterate over properties of an object //

const individual = {
  name: 'Imtiaz',
  age: 23
};

for (let key in individual) {
  console.log(key, individual[key])
};

const colors = ['red', 'green', 'orange'];

for (let index in colors) {
  console.log(index, colors[index])
};

// for-of loop | It is used to iterate over elements/items of a/an list/array //

const colors = ['red', 'green', 'orange'];

for (let color of colors) {
  console.log(color)
}

// Break and Continue // 

let i = 0;
while (i<= 10) {
  if (i === 5) break;
  if (i % 2 === 0){
    i++;
    continue;
  }
  console.log(i)
   i++ ;
}

// Max of 2 numbers //

let number = Max(2,3);
console.log(number);

function Max(a,b) {
  if (a > b)
    return a;
  else
    return b;
}
