const http = require('http');

let options = {
    host:'www.reqres.in',
    path:'/api/users?page=2',
    method:'GET'
}
http.request(options, (response) =>{
    console.log(`STATUS: ${response.statusCode}`);
}).end();