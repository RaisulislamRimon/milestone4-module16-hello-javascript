// all subjects numbers

var math = 75.25;
var biology = 65;
var chemisty = 80;
var physics = 35.45;
var bangla = 99.5;

var totalMarks = math + biology + chemisty + physics + bangla;
/*
console.log(totalMarks);
/* 
➜ /workspaces/milestone4-module16-hello-javascript/module16-10/practice-problem-javascript (main ✗) $ node problem2.js 
355.2 */

var avgMarks = totalMarks / 5;
/*
console.log(avgMarks);
/* 
➜ /workspaces/milestone4-module16-hello-javascript/module16-10/practice-problem-javascript (main ✗) $ node problem2.js 
71.03999999999999 */

// printing the result in 2 decimal places
avgMarks = avgMarks.toFixed(2);
console.log(avgMarks);

/* 
➜ /workspaces/milestone4-module16-hello-javascript/module16-10/practice-problem-javascript (main ✗) $ node problem2.js 
71.04 */
