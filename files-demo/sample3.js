var fs  = require("fs");

console.log("Opening file");
fs.readFileSync("input.txt", "w+" , function(err,fd){
if (err){
return console.error(err);
}
console.log("file Opened Successfully !!!");
});