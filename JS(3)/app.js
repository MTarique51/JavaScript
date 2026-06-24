// ARITHMETIC OPERATORS
console.log("ARITHMETIC  OPERATORS");
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// UNARY OPERATORS
console.log("UNARY OPERATORS");
console.log(a++);     //10  (Post increment)
console.log(++a);     //12  (Pre increment)

// ASSIGNMENT OPERATOR
console.log("ASSIGNMENT OPERATOR");
let c = 100;
let d = 25;
d = c;
console.log(d)  // 100

// COMPARISON OPERATOR
console.log( "COMPARISON OPERATOR");
let age = 18;
console.log("for number");
console.log(age>18);   // false
console.log(age>=18);  // true
console.log(age<=18);  // true
console.log(age<18);   // false 
console.log(age==18);  // true
console.log(age!=18);  // false

console.log("check for == & ===");
console.log('1234' == 1234);     // true (this will check only the value)
console.log('1234' === 1234);    // false (this wiill check value and type)

console.log("for non number:");
console.log('A'>'a');  //false
console.log('A'<'a');  //true
console.log('B'>'b');  //false