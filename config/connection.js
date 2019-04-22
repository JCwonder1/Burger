// Require mysql
const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "rbf78139ac0a4d2",
  password: "7c43fd68f2eb68f",
  database: "heroku_fb1c1e129c7c715"
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
