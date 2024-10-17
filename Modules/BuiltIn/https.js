const http = require("http");

// console.log(http);
// http methods

//! Get==> it is used to fetch resource from server.
//! Post==> it is used to send resources to the server.

//! DELETE==> it is used to delete the resources.
// PUT and PATCH ==> these are used to update the resources.

// create server () is used to create a server which accept a call back function has two parameter (request and response)

/* let server=http.createServer((req,res)=>{
    res.write("hello from server");
    res.end("Go to the other side");
})
//  to asssign a port to server we use listen() this method accepts the port number as first parameter and a call back function as second parameter .(this call back is not mandatory)
// server.listen(9000); */

// // ==================================
/* let server=http.createServer((req,res)=>{
    // res.write("hello from server");
    res.end("Go to the other side");
})
server.listen(9000, ()=>{
    console.log("Port created");
    
}); */
// ===========================================================================

// const fs=require("fs")
// let server=http.createServer((req,res)=>{
//     // res.write("<h1>hello from server</h1>");
//     // console.log(req);  
//     // res.end();
//     // ! To display the Html File
//     /* res.writeHead(200,"ok",{"content-type":"text/html"})
//     let data=fs.readFileSync("./index.html","utf-8");
//     // console.log(data);
//     res.write(data);
//     res.end() */
//     //! sending html file using  stream

//     res.writeHead(200,"ok",{"content-type":"text/html"});
//     let readStream=fs.ReadStream("./index.html","utf-8");
//     readStream.pipe(res);// pipe is internally call end
    
// })

// server.listen(9000, (err)=>{
//     //! error first callbacks
//      if (err) console.log("Port created");
//      console.log("server running at port 9000.....");
     
    
// });

// !=========================================!
// const fs=require("fs");
// let server=http.createServer((req,res)=>{

    //! sending CSS file===========
    // res.writeHead(200,"ok",{"content-type":"text/css});
    // let data=fs.createReadStream("./style.css","utf-8");
    // data.pipe(res)
    // res.end("read File....end")

    // ! sending JSON file==========
//     res.writeHead(200,"ok",{"content-type":"application/json"})
//     let data=fs.createReadStream("./data.json","utf-8");
//     data.pipe(res);
// });



// server.listen(9000,(err)=>{
// if(err)console.log(err);
// console.log("server running..........");

// })


const server = http.createServer((req, res) =>{ 
    let fs=require("fs")
    // console.log(req.url);
    // ! this is Home page urls
    if (req.url=="/") {
        // res.end("hello from the home side"); 
        res.writeHead(200, "ok",{"content-type": 'text/html'}); 
        fs.createReadStream("./public/index.html").pipe(res);  
    }
    // ! this is about  page urls
    else if(req.url=="/about"){
        // res.end("hello from about page")
        res.writeHead(200, "ok",{"content-type": 'text/html'}); 
        fs.createReadStream("./public/about.html").pipe(res);
    }
    else if(req.url=="/style"){
         res.writeHead(200, "ok",{"content-type": 'text/html'}); 
        fs.createReadStream("./public/style.css").pipe(res);

    }
    // ! this is contect page urls
    else if(req.url=="/contect"){
        // res.end("welcome to contect us")
        res.writeHead(200, "ok",{"content-type": 'text/html'}); 
        fs.createReadStream("./public/contect.html").pipe(res);
    }
    else if(req.url=="/downlode/package-mamager"){
        // res.end("welcome to downlode page ")
        res.writeHead(200, "ok",{"content-type": 'text/html'}); 
        fs.createReadStream("./public/downlode.html").pipe(res);
    }
    // ! this is erroe page urls
    else{
        res.writeHead(404, {"content-type": 'text/html'});
        res.end("<h1>404 erroe page ,this page does not exist</h1>")
    }

}); 
server.listen(9000,(err)=>{
    if(err) console.log(err);
    
    console.log(" listioning to the port no 9000..........");
    
});
