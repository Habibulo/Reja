//  Darslar
console.log('web serverni boshlash')
const ejs = require('ejs');
const express = require('express');
const app = express();
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

// 1.MongoDB Connect
const db = require("./server");
db();

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
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end('something went wrong')
        } else {
            res.end('successfully added');
        }
    });
});
//malumotni databasada mutatsiyaga uchratadi: {create, update, delete}
app.get('/', (req, res) => {
    db.collection
    res.render("plans").find().toArray((err, data) => {
        if(err){
            console.log("error:", err)
            res.send("something went wrong")
        }
        else {
            console.log(data)
            res.render('reja')
        }
    })
})

app.get('/author', (req, res) => {
    res.render("author", {user: user})
})



module.exports = app;