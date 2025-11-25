var fs = require("fs");
var buf = new Buffer.alloc(1024);
fs.open("data.txt","r+",function(err,fd){
    if(err){
        return console.error(err);
    }

console.log("File Opened Successfully");
console.log("Reading file data");
fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err){
        console.log(err);
    }
    console.log(bytes + 'bytes read');
    if(bytes > 0){
        console.log(buf.slice(0,bytes).toString());
    }
});
});