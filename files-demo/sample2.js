var fs  = require("fs");
//Synchronous read
console.log("Opening file");
var data = fs.readFileSync("input.txt");
console.log("synchronous read:" + data.toString());
console.log(3)