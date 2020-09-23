// ./ it represents the current working directory(folder) and we can access all the files in that directory
// ../ it represents the parent working directory and we can access all the folder which is at simillar position

const UserModel = require("../models/user");
var md5 = require('md5');

exports.signup = async function(req,res){
    try{
        let {name,email,mobile,password,country_code} = req.body;
        console.log(req.body);
        password= md5(password);
    
        let checkEmail = await UserModel.findOne({email});
       
        if(checkEmail) throw new Error("User already registered!");

        let data = {name,email,mobile,password,country_code};    

        let save_user = new UserModel(data);
        let newUser = await save_user.save();
        if(!newUser){
            throw new Error('Unable to add details.')
        }
      
        res.status(200).json({msg: 'user created succeefully'})
        
    }
    catch(error){
        
        res.status(403).json(error.message)

    }
}
exports.login = async function(req,res){
    try{
        let {email,password} = req.body;
        password= md5(password);
        let check = await UserModel.find({email,password});
        if(!check)
            throw new Error("Invalid user!");
        if(!check.is_varified)
        throw new Error("Please verify your account first!")    
       // res.status(200).send("login successful!")
    }
    catch(error){
        res.status(403).json(error.message)
    }
}

// exports.findAll = (req,res)=> {
    
//     UserModel.find({})
//     .then(users => {
//         //console.log(users);
//         res.send(users);
//     })
//     .catch(console.log);

// }

// exports.deleteAll = (req, res) => {
//     UserModel.deleteMany()
//     .then(dbres => {
//         //console.log(users);
//         res.send('deleted succesfully');
//     })
//     .catch(console.log);

// }