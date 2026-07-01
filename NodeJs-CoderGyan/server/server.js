import fs from "node:fs"
import { createServer } from "node:http";
import fsPromise from "node:fs/promises"
import { json } from "node:stream/consumers";

let count = 0;

// Server Sent Events
const server = createServer(async (req, res) => {

    // Routing..
    // console.log("req ", req)

    // if (req.url === "/") {

    //     res.writeHead(200, { "content-type": "text/html" })

    //     // const data = await fs.readFile("./index.html")

    //     const streamData = fs.createReadStream("./index.html")

    //     /*  streamData.on("data", (chunk) => {
    //          res.write(chunk)
    //      })

    //      streamData.on("end", () => {

    //          res.end()
    //      }) */

    //     streamData.pipe(res)

    // } else if (req.url === "/about") {
    //     res.writeHead(200, { "content-type": "text/html" })

    //     res.end("<h1>this is about page...</h1>")

    // } else if (req.url === "/expense") {
    //     // API

    //     // Post

    //     if (req.method === "POST") {
    //         // read data from request 
    //         let buffer = '';
    //         req.on("data", (chunk) => {
    //             console.log("Chunk ", chunk.toString())
    //             buffer += chunk;
    //         })
    //         // store it in json database.
    //         req.on("end", async () => {
    //             const data = await fsPromise.readFile("./db.json")

    //             const dbData = JSON.parse(data)
    //             dbData.push(JSON.parse(buffer))

    //             await fsPromise.writeFile('./db.json', JSON.stringify(dbData, null, 2))
    //             // console.log(dbData)

    //             res.end("ok")
    //         })

    //     } else if (req.method === "GET") {
    //         // read data from database
    //         const data = await fsPromise.readFile('./db.json')

    //         // return the data to user
    //         res.end(data)

    //     }
    // }

    if (req.url === '/') {

        const htmlPage = fs.createReadStream("./stream.html")

        htmlPage.pipe(res)

    } else if (req.url === "/stream") {
        res.writeHead(200, {
            "content-type": "text/event-stream",
            "cache-control": "no-cache",
            "connection": "keep-alive"
        })

        setInterval(() => {
            res.write(`data: The Count is - ${count++} \n\n`)
        }, 1000);

    }



})

server.listen(3000, () => {
    console.log("Server is listening...")
})

