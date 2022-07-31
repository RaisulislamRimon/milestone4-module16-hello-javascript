/*
var price = 100;
console.log(typeof price);
/* @RaisulislamRimon ➜ /workspaces/milestone4-module16-hello-javascript/module16-9 (main ✗) $ node 9\ types.js 
number
 */
/*
var price = "100";
console.log(typeof price);
/* @RaisulislamRimon ➜ /workspaces/milestone4-module16-hello-javascript/module16-9 (main ✗) $ node 9\ types.js
string */

/*
var isHappy = true;
console.log(typeof isHappy);
/* @RaisulislamRimon ➜ /workspaces/milestone4-module16-hello-javascript/module16-9 (main ✗) $ node 9\ types.js 
boolean */

/*
var romantic;
console.log(typeof romantic);
/* @RaisulislamRimon ➜ /workspaces/milestone4-module16-hello-javascript/module16-9 (main ✗) $ node 9\ types.js 
undefined */

/*
// advanced

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
/* @RaisulislamRimon ➜ /workspaces/milestone4-module16-hello-javascript/module16-9 (main ✗) $ node 9\ types.js 
0.30000000000000004 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2); // makes the result a string
/* @RaisulislamRimon ➜ /workspaces/milestone4-module16-hello-javascript/module16-9 (main ✗) $ node 9\ types.js 
0.30 */
sum = parseFloat(sum); // makes the result a number
/* @RaisulislamRimon ➜ /workspaces/milestone4-module16-hello-javascript/module16-9 (main ✗) $ node 9\ types.js 
0.3 */
console.log(sum);
