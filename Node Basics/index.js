const fs = require("fs");
//gives us networking capabilities
const http = require("http");
const { type } = require("os");
const url = require("url");
////////////////////
//server
const server = http.createServer((request, response) => {
  const pathname = request.url;
  if (pathname === "/home") {
    response.end("This is home page");
  } else {
    response.writeHead(404, {
      "Content-type": "text/html",
      "m-header": "my header",
    });
    response.end("<h1>Nothing found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log(
    "Server has been started and listening to the request on port 8000"
  );
});

// const readfile = fs.readFileSync("./Introanddetails.txt", "utf-8");
// console.log(readfile);

// const textWrite = `I Love Allah. Allah is so Beautiful. By the grace of Allah i start to learn:\n ${readfile}. Created ${Date.now()}`;
// fs.writeFileSync("./writtentext.txt", textWrite);

// //non blocking asynchronous
// fs.readFile("./need.txt", "utf-8", (err, data) => {
//   fs.readFile(`./${data}.txt`, "utf-8", (err, data1) => {
//     fs.writeFile(`./written.txt`, `${data}\n${data1}`, "utf-8", (err) => {
//       console.log("Soluted");
//     });
//   });
// });
// console.log("Get start to read");
