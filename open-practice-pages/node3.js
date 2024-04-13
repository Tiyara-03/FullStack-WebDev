// Synchronous or blocking
// -line by line execution
// Asynchronous or non-blocking
// -line by line execution or guranted
// -callbacks will fire


const fs = require("fs");
 fs.readFile("readme.txt", "utf-8", (err,data)=>{
    console.log(err,data);
});
console.log("This is a message");

