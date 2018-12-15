var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'data'
});
connection.connect();

connection.query('INSERT INTO data VALUES', function(err, rows, fields)
{
  if (err) throw err;

  console.log(rows[0]);
});

connection.end();
