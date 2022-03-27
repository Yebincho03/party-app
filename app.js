const express = require('express');
const app = express();

const connection = require("./db/connection.js");
app.set('port', 8080);

connection.on('open',()=>{

    console.log("Connected to database!");
    app.listen(process.env.PORT || 8080, ()=>console.log("listening"));
});


app.use(express.static('public'));
app.use('/',express.static('public'));
app.use('/login',express.static('public'));
app.use('/profile',express.static('public'));
app.use('/party',express.static('public'));
app.use('/detail',express.static('public'));
app.use('/hostDetail',express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const routers = require('./routes/index.js');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// app.use('/', routers);


