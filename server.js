const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/cars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/ToDoItems", async (req, res) => {
    const results = await db.createItem(req.body);
    res.status(201).json({ id: results[0]});
});

app.get("/ToDoItems", async (req, res) => {
    const cars = await db.getAllItems();
    res.status(200).json({ cars});
});

app.patch("/ToDoItems/:id", async (req, res) => {
    const id = await db.updateItem(req.params.id, req.body);
    res.status(200).json({ id });
});

app.delete("/ToDoItems/:id", async (req, res) => {
    await db.deleteItem(req.params.id);
    res.status(200).json({ success: true });
});

app.listen(1337, () => console.log("server is running on port 1337"));