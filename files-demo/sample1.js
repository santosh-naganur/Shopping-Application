var fs = require("fs");
//Asynchronous read
console.log(1);
fs.readFile('input.txt', function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read:" + data.toString());
})
console.log(3);