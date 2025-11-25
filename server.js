const http = require("http")
const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('<h2> Welcome to Node - Http Server !!! </h2>');

});
const PORT =5000;
server.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}/`);
});