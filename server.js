const http = require('http');

const mongodb= require('mongodb');  // Correctly import MongoClient from the mongodb package

let db;
const connectionString = 
    "mongodb+srv://Khalimjonov:viartmnM9184j4XS@train.7tbb2na.mongodb.net/Reja"

// const connectionString =
//   "mongodb+srv://admin:admin@cluster0.vgohadt.mongodb.net/reja?retryWrites=true&w=majority&appName=Cluster0";
mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
 }, (err, client) => {
    if(err) {
        console.log('Error on connection MongoDB:', err)
    }
    else {
        console.log("MongoDB successfully connected!")
        // console.log(client).
        module.exports = client;
        const app = require("./app")
        const server = http.createServer(app)
        let PORT = 3043
        server.listen(PORT, function() {
            console.log(`The server is successfully is working on port: ${PORT} http://localhost:${PORT}`)
            console.log(`Portfolio is working on port: ${PORT} http://localhost:${PORT}/author`)
        })
    }
})
