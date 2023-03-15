console.log("testing");
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

let value;
var empty = '';
var something = 'Something'
console.log(isRequired(empty));
console.log(isRequired(something)+ ' '+something);
console.log(isRequired()+' '+value); // reason why this gives 'true' is because 'value' gets initialised by the function itself but is never assigned a value, which means it will print 'undefined'
console.log(isRequired(value)+' '+value);

console.log(isBetween(4.5,4,5));
