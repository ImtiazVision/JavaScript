// Conditional Statements //
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