const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./routes'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});