function sum() {
    console.log(10 + 20);
  }
  sum();
  
  function printSum(a, b) {
    const result = a + b;
    console.log(`${a}+${b}=${result}`);
  }
  
  printSum(3, 4);
  
  hello = () => {
    return "Hello World!";
  };
  
  var x = 21;
  var girls = function () {
    console.log(x);
    var x = 20;
  };
  girls();
  
  var x = 21;
  g();
  console.log(x);
  function g() {
    console.log(x);
    var x = 20;
  }
  
  var x = 21;
  a();
  b();
  
  function a() {
    x = 20;
    console.log(x);
  }
  function b() {
    x = 40;
    console.log(x);
  }
  console.log(x);
  
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10,11));

// "Guess the output

// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

// "Guess the output

var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

// "Guess the Output
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")