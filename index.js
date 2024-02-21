
let http = require("http");
let fs = require("fs");
let path = require("path");
let PORT = 8080;
let server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/home") {
      fs.readFile(
        path.join(__dirname, "public/pages/home.html"),
        "utf-8",
        (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("somthing wrong while priting");
            res.end();
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            // res.write(data)
            // res.end()
            res.end(data);
          }
        }
      );

      //from here render home page
    }
    if (req.url == "/about") {
      fs.readFile(
        path.join(__dirname, "public/pages/about.html"),
        "utf-8",
        (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("somthing wrong while priting");
            res.end();
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            // res.write(data)
            // res.end()
            res.end(data);
          }
        }
      );
    } 
    if(req.url=='/home.css')
    {
        fs.readFile(
            path.join(__dirname, "public/css/home.css"),
            "utf-8",
            (err, data) => {
              if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write("somthing wrong while priting");
                res.end();
              } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                // res.write(data)
                // res.end()
                res.end(data);
              }
            }
          );   
    }
    if(req.url=='/assets/download.jpg')
    {
        fs.readFile(
            path.join(__dirname, "public/assets/download.jpg"),
            (err, data) => {
              if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write("somthing wrong while priting");
                res.end();
              } else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                // res.write(data)
                // res.end()
                res.end(data);
              }
            }
          );   
    }
    
    else {
        fs.readFile(
            path.join(__dirname, "public/pages/404.html"),
            "utf-8",
            (err, data) => {
              if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write("somthing wrong while priting");
                res.end();
              } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                // res.write(data)
                // res.end()
                res.end(data);
              }
            }
          );
    }
  })
  .listen(8080, () => {
    console.log("connection successful");
  });