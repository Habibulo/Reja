const http = require('http');
const app = require("./app")
const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, function() {
    console.log(`The server is successfully is working on port: ${PORT} http://localhost:${PORT}`)
    console.log(`Portfolio is working on port: ${PORT} http://localhost:${PORT}/author`)
})
