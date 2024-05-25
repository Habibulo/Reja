const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const { ObjectId } = require('mongodb');
const app = express();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data);
    }
});

// 1.MongoDB Connect
const db = require("./server").db();

if (!db) {
    console.log("Database connection failed!");
}

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Views
app.set('views', 'views');
app.set('view engine', 'ejs');

// Routes
app.post("/create-item", (req, res) => {
    const new_plan = req.body.plan;
    console.log(`user entered /${new_plan}`);
    db.collection("reja").insertOne({ plan: new_plan }, (err, data) => {
        if (err) {
            console.log("error on create-item request: ", err.message);
            res.status(500).end("(app.post/create-item) something went wrong!");
        } else {
            console.log("Item added successfully:",);
            res.status(200).end("(app.post/create-item) added successfully!");
        }
    });
});

app.get("/", (req, res) => {
    console.log("user entered /");
    db.collection("reja").find().toArray((err, data) => {
        if (err) {
            console.log("Collection Error: ", err.message);
            res.status(500).end("(app.get/) something went wrong");
        } else {
            // console.log("Collection Data: ", data);
            res.render("reja", { items: data });
        }
    });
});

app.delete("/delete-item", (req, res) => {
    console.log("user deleted /delete-item", req.body.new_plan);
    const itemId = req.body.id;
    // console.log("Item ID to delete:", itemId);
    db.collection("reja").deleteOne({ _id: new ObjectId(itemId) }, (err, result) => {
        if (err) {
            console.log("error on delete-item request: ", err.message);
            res.status(500).end("(app.delete/delete-item) something went wrong!");
        } else {
            console.log("Item deleted successfully:");
            res.status(200).end("(app.delete/delete-item) deleted successfully!");
        }
    });
});

app.delete("/delete-all-items", (req, res) => {
    console.log("user requested to delete all items");
    db.collection("reja").deleteMany({}, (err, result) => {
        if (err) {
            console.log("error on delete-all-items request: ", err.message);
            res.status(500).end("(app.delete/delete-all-items) something went wrong!");
        } else {
            console.log("All items deleted successfully:", result);
            res.status(200).end("(app.delete/delete-all-items) all items deleted successfully!");
        }
    });
});

app.get('/author', (req, res) => {
    res.render("author", { user: user });
});

module.exports = app;

/* MongodDB
// CLUSTER => DATABASE => COLLECTION => DOCUMENT => DATASET
// CLUSTER => DATABASE => COLLECTION => DOCUMENT => DATASET


// ObjectId lar ni => dataset deb ataymiz
*/