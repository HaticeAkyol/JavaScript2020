/*
require: plays role of import statement in java

*/
//var logIn =  require("/Users/hatice akyol/Desktop/JavaScript2020/JS_Day02/Pages/LoginPage.js");
var logIn = require("./Pages/LoginPage.js") 

console.log( logIn.username);
console.log(logIn.password);