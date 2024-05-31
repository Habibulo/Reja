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

// MongoDB Connect
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
    console.log("user entered /create-item");
    const new_plan = req.body.plan;
    console.log("Plan to be added:", new_plan);
    db.collection("reja").insertOne({ plan: new_plan }, (err, data) => {
        if (err) {
            console.log("error on create-item request: ", err.message);
            res.status(500).json({ message: "something went wrong!" });
        } else {
            console.log("Item added successfully:", data);
            res.status(200).json({ id: data.insertedId, plan: new_plan });
        }
    });
});

app.get("/", (req, res) => {
    console.log("user entered /");
    db.collection("reja").find().toArray((err, data) => {
        if (err) {
            console.log("Collection Error: ", err.message);
            res.status(500).end("something went wrong");
        } else {
            console.log("Collection Data: ", data);
            res.render("reja", { items: data });
        }
    });
});

app.delete("/delete-item", (req, res) => {
    console.log("user deleted /");
    const itemId = req.body.id;
    console.log("Item ID to delete:", itemId);
    db.collection("reja").deleteOne({ _id: new ObjectId(itemId) }, (err, result) => {
        if (err) {
            console.log("error on delete-item request: ", err.message);
            res.status(500).json({ message: "something went wrong!" });
        } else {
            console.log("Item deleted successfully:", itemId);
            res.status(200).json({ message: "deleted successfully!" });
        }
    });
});

app.delete("/delete-all-items", (req, res) => {
    console.log("user requested to delete all items");
    db.collection("reja").deleteMany({}, (err, result) => {
        if (err) {
            console.log("error on delete-all-items request: ", err.message);
            res.status(500).json({ message: "something went wrong!" });
        } else {
            console.log("All items deleted successfully:");
            res.status(200).json({ message: "all items deleted successfully!" });
        }
    });
});

app.put("/update-item", (req, res) => {
    console.log("user updated /");
    const itemId = req.body.id;
    const newPlan = req.body.plan;
    console.log("Item ID to update:", itemId);

    db.collection("reja").updateOne(
        { _id: new ObjectId(itemId) },
        { $set: { plan: newPlan } },
        (err, result) => {
            if (err) {
                console.log("error on update-item request: ", err.message);
                res.status(500).json({ message: "something went wrong!" });
            } else {
                console.log("Item updated successfully to:", newPlan);
                res.status(200).json({ message: "updated successfully!" });
            }
        }
    );
});

app.get('/author', (req, res) => {
    res.render("author", { user: user });
});

module.exports = app;
