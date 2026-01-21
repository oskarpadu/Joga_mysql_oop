const mysql = require('mysql2/promise');

const db = mysql.createConnection({
    hhost: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'joga_mysql'
});

module.exports = db;