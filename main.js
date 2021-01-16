console.log("yoyoyo");

// function thisIsTrue(arg1, arg2) {
//   if (arg1.length < 3)  {
//     console.log(`You are ${arg1}`);
//   } else if (arg2.length > 8) {
//     console.log(`You are ${arg2}`);
//   } else {
//     console.log('You are NOTHING!');
//   }
// }

// // versus the below which is not a function and will just run without having to call it
// // if(true) {
// //   console.log('true');
// // }

//  //this yields nothing because whatever happens in the arg section must be true to continue

// thisIsTrue('Ni','mickeymouse');


const canDrive = (age) => {
  if (age >= 15) {
    return true; 
  }
// is the above is true this will not be false because JS will exit the code block by then
  return false;
}

const answer = canDrive(16);
console.log(answer);
