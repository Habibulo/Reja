console.log('web serverni boshlash')
const ejs = require('ejs');
const express = require('express');
const app = express();
const fs = require('fs');
const { ObjectId } = require('mongodb');  // Import ObjectId from mongodb

let user 
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR", err)
    } else {
        user = JSON.parse(data)
    }
})

// 1.MongoDB Connect
const db = require("./server").db();

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
    console.log("user entered /create-item");
    const new_plan = req.body.plan;
    db.collection("reja").insertOne({ plan: new_plan }, (err, data) => {
      if (err) {
        console.log("error on create-item request: ", err.message);
        res.end("(app.post/create-item) something went wrong!");
      } else {
        res.end("(app.post/create-item) added successfully!");
      }
    });
});

app.get("/", function (req, res) {
	console.log("user entered /")
	db.collection("reja")
		.find()
		.toArray((err, data) => {
			if (err) {
				console.log("Collection Error: ", err.message);
				res.end("(app.get/) something went wrong");
			} else {
				console.log("Collection Data: ", data);
				res.render("reja", { items: data });
			}
		});
});

app.delete("/delete-item", function (req, res){
    console.log("user deleted /")
    const itemId = req.body.id;
    db.collection("reja").deleteOne({ _id: new ObjectId(itemId) }, (err, result) => {
        if (err) {
            console.log("error on delete-item request: ", err.message);
            res.end("(app.delete/delete-item) something went wrong!");
        } else {
            res.end("(app.delete/delete-item) deleted successfully!");
        }
    });
});

app.get('/author', (req, res) => {
    res.render("author", { user: user });
})

module.exports = app;
