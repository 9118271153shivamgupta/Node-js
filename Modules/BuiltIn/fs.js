// syntex to import built-in modules
// let variale-name = require("node:module-name")
//? "node:" ==> itis not mondatory, we can remove this if we want
// module-name ==> fs, https,crypto, os

let fs = require("node:fs");
// console.log(fs);

// ! fs===> it stand for file system. This modules provide us some functionality to perform CRUD of files present on our os.

// CRUD  on files using Synchronous functions.

// creating a file synchronously======

// method name===> readFileSync()
// syntex=====> fs.readFileSync("path", "./encoding")

// ex:



// console.log("start");
// console.log("Middle");

// // let data = fs.readFileSync("./index.html")
// // console.log(data);// this will return a buffer value (Array if binary numbrs). to convert buffer to string formate ue=se tostring.
// let data1 = fs.readFileSync("./index.html", "utf-8") // utf-8 it represent to string formate
// console.log(data1);

// console.log("end");


// =================================================================
// 2!===================== 2 way  to creating file synchronously
// method name ===writefileSync()
// syntex====> fs.writeFileSync("path/file-name", "data to written")
console.log("St");
console.log("middle");
fs.writeFileSync("./data.js", "console.log(`hi`)");
console.log("file created");
console.log("ed");

// if file name does not exists it will create a new file with provide data , otherwise it will simply over-write the wexisting file ..
