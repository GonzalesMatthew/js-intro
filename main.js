console.log("CONNECTED");

/************ *********/
//START VARIABLES
let firstName = 'Beyonce';
let lastName = 'Knowles';

// console.log(firstName + lastName);
// console.log(`First Name: ${firstName} Last Name: ${lastName}`);

firstName = 'Matthew';
lastName = 'Gonzales';

//console.log(firstName + lastName);
//console.log(`First Name: ${firstName} Last Name: ${lastName}`);

const favoriteFood = 'Tacos';

console.log(favoriteFood);

// favoriteFood = 'Gumbo';

// below yields TypeError, since we tried to reassign a constant
// console.log(favoriteFood);

// END VARIABLES
/************ *********/

//******* START DATA TYPES *********/
const dog = 'bark';
console.log(typeof dog);

const answer = 33;
const negative = -14;

console.log (typeof answer, typeof negative);

const iLoveJavascript = true;

console.log(typeof iLoveJavascript);


//******* END DATA TYPES *********/

//******* START MATH *********/
console.log(Math.pow (2,2,)); //yields 4
console.log(Math.pow (3,3,)); //yields 27
console.log(Math.pow (4,2,)); //yields 16

console.log(Math.round(6.5)); //7
console.log(Math.round(6.45)); //6

console.log(Math.floor(6.9999)); //6

console.log(Math.ceil(4.11111)); //5

const cat = 'kitty';
console.log(cat.length); //5
//******* END MATH *********/
