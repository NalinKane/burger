var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USERNAME,
  password: process.env.DB_LOCAL_PASSWORD,
  database: process.env.DB_DATABASE_NAME
});
// mysql://b967ab1084995b:a48310f7@eu-cdbr-west-02.cleardb.net/heroku_334660c09ff8a89?reconnect=true
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
