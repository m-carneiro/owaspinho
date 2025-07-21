const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./rootinho.db');

database.serialize(() => {
    database.run("CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)");
    database.run("INSERT OR IGNORE INTO users (id, name) VALUES (1, 'Admin'), (2, 'Alice'), (3, 'Bob')");
});


module.exports = database;
