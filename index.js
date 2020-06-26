// 1
//import default modules
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

//2
//create express app
const app = express();

//parse body
app.use(bodyParser.json())

//form handlers
app.use(bodyParser.urlencoded({extended: true}))


//set my template engine (ejs)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//create my routes and import
app.use('/api/book', require('./routes/api/book-router'))

//3
// create the port for your server listen
PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is runing on ${PORT}`)
})