// get the client
// const mysql = require("mysql2");
const mysql = require("mysql2/promise");

// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejsbasic'
// });

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0
});

// simple query
// connection.query(
//   'SELECT * FROM `users` ',
//   function(err, results, fields) {
//console.log("----check mySQL----");
//console.log(results); // results contains rows returned by server
//   }
// );
// module.exports = connection;
module.exports = pool;
