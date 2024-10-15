let http = require("http");
// console.log(http);
// http methods

//! Get==> it is used to fetch resource from server.
//! Post==> it is used to send resources to the server.

//!DELETE==> it is used to delete the resources.
// PUT and PATCH==> these are used to update the resources.

// create server () is used to create a server which accept a call back function has two parameter (request and response)

let server=http.createServer((req,res)=>{
    res.write("hello from server");
    res.end();
})
//  to asssign a port to server we use listen() this method accepts the port number as first parameter and a call back function as second parameter .(this call back is not mandatory)
server.listen(9000);
