const mysql = require('mysql');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode',
  database: 'bancoDePalabras',
};

const connection = mysql.createConnection(config);

var selectPlabra = function (cb) {
  connection.query('SELECT * FROM palabras', (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
const postData = (palabra, cb) => {
  connection.query(
    'INSERT INTO palabras (palabra) VALUES (?);',
    [palabra],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(error, results);
      }
    }
  );
};

module.exports.selectPlabra = selectPlabra;
module.exports.postData = postData;
