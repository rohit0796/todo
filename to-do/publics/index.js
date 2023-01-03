const express = require('express')
const mongoose = require('mongoose')
const path = require("path")
const app = express();
var favicon = require('serve-favicon');

mongoose.connect('mongodb://localhost/todo_express');
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))
app.set('view engine',"ejs")
app.use(favicon(path.join(__dirname,'public','favicon.png')));
app.use(require('./routes/router'))
app.use(require('./routes/todos'))


app.listen(3000,()=>{
    console.log('istening on port 3000')
})