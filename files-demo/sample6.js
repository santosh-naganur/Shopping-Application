var fs  = require("fs")

console.log("deleting an existing file")
fs.unlink('data.txt',function(err){
    if(err)
{
    return console.error(err)
}    
console.log("File Deleted Successfully")
})