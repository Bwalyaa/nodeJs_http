import http from "http";
import fs from "fs";

const sendFile = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end("not found")
        } else {
            res.end(data)
        }
    })
}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        sendFile("./public/home.html", res);
    } else {
        sendFile(`./public${req.url}`, res)
    }
})

server.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});