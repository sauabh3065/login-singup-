const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/Practice', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{console.log('Connected to db');})
.catch(()=>console.log('connection failed'));
module.exports = mongoose;
