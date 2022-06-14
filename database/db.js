const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'facebookusers',
    user: 'root',
    password: ''
});

conexion.connect((error)=>{
    if(error) throw error;
    console.log('MySQL database connection established');
});

module.exports = conexion;