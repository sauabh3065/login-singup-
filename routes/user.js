const express=require('express');
const route=express.Router();

const user_controller = require('../controllers/user');

route.post('/signup',user_controller.signup);



module.exports=route; 