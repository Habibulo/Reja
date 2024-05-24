// 18 - 19 - 20 - 21 Darslar
console.log('web serverni boshlash')
const { render } = require('ejs');
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');

let user 
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR", err)
    } else {
        user = JSON.parse(data)
    }
})
// 1 Kirish uchun Codes
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))  // html form dan birorbir narsani post qilsak qabul qilib oladi [traditional formatda]

// 2 Session Codes


// 3 Views Codes
app.set('views', 'views')
app.set('view engine', 'ejs')


// 4 Route Codes
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: 'success' });
}); //malumotni databasada mutatsiyaga uchratadi: {create, update, delete}
app.get('/', (req, res) => {
    res.render("reja",)
})

app.get('/author', (req, res) => {
    res.render("author", {user: user})
})

const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, function() {
    console.log(`The server is successfully is working on port: ${PORT} http://localhost:${PORT}`)
    console.log(`Portfolio is working on port: ${PORT} http://localhost:${PORT}/author`)
})