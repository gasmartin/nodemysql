const mysql = require('mysql');

const connectionConfig = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'library',
};

module.exports = mysql.createConnection(connectionConfig);
