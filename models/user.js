const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:String,
  mobile:String,
  country_code:String,
  password:String,
  email:{
    type:String,
    require:true
  },
  is_verify:{
    type:Number,
    require:true
  }
});
module.exports = mongoose.model('user', userSchema);
