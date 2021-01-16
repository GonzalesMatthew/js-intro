console.log("CONNECTED");

//main difference with the first way is that you can hoist, if you're into that sort of thing

// sayHello();
// function sayHello() {
//   console.log("Hello!!!");
// }

// const sayHello = function(){
//   console.log("Hello!!!!!");
// }

// const sayHello = () =>{
//   console.log("Hello, again. ;)");
// }

// sayHello();

// ****** FUNCTIONS WITH ARGUMENTS *******
// function logsHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// logsHello('Matthew');

const sum = 55; 

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log("value inside function",sum);
  return sum;
}

console.log(sum);
console.log(addsTwoNumbers(2,1));
console.log(sum);
