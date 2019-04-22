// Require mysql
const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  host:
    "mysql://us-cdbr-iron-east-02.cleardb.net/heroku_fb1c1e129c7c715?reconnect=true",
  user: "rbf78139ac0a4d2",
  password: "d190eb72",
  database: "burgers_db"
});

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
