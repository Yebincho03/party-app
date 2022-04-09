const express = require('express');
const app = express();
// let path = require('path');

const connection = require("./db/connection.js");
app.set('port', 8080);

connection.on('open',()=>{

    console.log("Connected to database!");
    app.listen(process.env.PORT || 8080, ()=>console.log("listening"));
});

require('dotenv').config();


app.use(express.static('public'));
app.use('/',express.static('public'));
app.use('/profile',express.static('public'));
app.use('/login',express.static('public'));
app.use('/register',express.static('public'));
app.use('/party',express.static('public'));
app.use('/detail',express.static('public'));
app.use('/hostDetail',express.static('public'));

app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.json({ limit: '50mb' }));


const routers = require('./routes/index.js');

app.use('/api/v1', routers.partyRouter);
app.use('/api/v1', routers.profileRouter);
app.use('/api/v1', routers.loginRouter);





