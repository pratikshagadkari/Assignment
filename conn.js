var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'dell'
});
connection.connect();

connection.query('SELECT * FROM dell.login', function(err, rows, fields)
{
  if (err) throw err;

  console.log(rows[0]);
});

connection.end();
