const bcrypt = require('bcryptjs/dist/bcrypt');
const User = require('../model/users');

exports.getLoginController = (req, res) => {
    res.render('login', {
        pageTitle: 'Login'
    })
}

exports.postLoginController = (req, res) => {
    const {email, password } = req.body;
    User.findOne({email: email})
    bcrypt.compare(password, user.password)
        .then(match => {
            if(match){
                console.log("Амжилттай нэвтэрлээ!");
                res.redirect("/");
            } else{
                console.log("Нууц үг эсвэл имэйл буруу байна.");
                res.redirect("/login");
            }
        }) 
        
    
}