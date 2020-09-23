const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose=require('./modules/db_connection')
const router=require('./routes/user')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user',router);
app.listen((3001),function(err){
    if(err)
    console.log(err)
    else
    console.log("3001 calling")
});
