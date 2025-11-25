var fs  = require("fs")

console.log("Writting into a file");
fs.appendFile("data.txt",'\n Done with UI and Node File System',function(err){
if(err){
    console.log("data written successfully!!")
}
fs.readFile('data.txt',function(err,data){
    if(err)
{
    return console.error(err)
}    
console.log("Async Read:"+ data)
});
});