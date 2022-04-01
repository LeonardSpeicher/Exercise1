const { del } = require("express/lib/application");
const knex = require("./knex");

function createItem(Item) {
    return knex("ToDoItems").insert(Item);
};

function getAllItems() {
    return knex("ToDoItems").select("*");
};

function deleteItem(id) {
    return knex("ToDoItems").where("id", id).del();
};

function updateItem(id, car){
    return knex("ToDoItems").where("id", id).update(Item)
};
module.exports = {
    createItem,
    getAllItems,
    deleteItem,
    updateItem
}