// Import the necessary libraries
const mysql = require('mysql2');

// Create the db connection to mysql
const db = mysql.createConnection({
  // Enter connection info -- host, user, pw, default db
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CMS'
});

// Export the mysql connection
module.exports = db;