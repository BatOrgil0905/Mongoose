const User = require('../model/users');
const bcrypt = require('bcryptjs')

exports.userController = function(req, res){
    res.render('register', {
        pageTitle: "Register"
    })
}

exports.newUser = function (req, res){
  const { username, email, avatar, password } = req.body;
  bcrypt.hash(password, 12)
    .then(hashedPassword =>{ 
      const user = new User({
        username: username,
        email: email,
        avatar: avatar,
        password: hashedPassword,
      });
      
      user.save()
        .then((result) => {
            console.log(result);
            res.redirect("/");
        })
        .catch((err) => console.log(err));
    })
};

exports.profileController = (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => {
      res.render("user", {
        userProfile: user,
        pageTitle: user.username + "'s profile"
      });
    })
    .catch(err => console.log(err))
}

exports.getEditData = (req, res) => {
  const editUserId = req.params.id;
  User.findById(editUserId)
    .then((user)=> {
      res.render("edit", {
        editUser: user,
        pageTitle: "Засах"
      });
    })
    .catch(err => console.log(err))
}

exports.postEditData = (req, res) => {
  const editUserId = req.params.id;
  const { username, email, avatar, password } = req.body;
  
  User.findById(editUserId).then((user) => {
    user.username = username;
    user.email = email;
    user.avatar = avatar;
    user.password = password;
    user
      .save()
      .then(user => {
        res.redirect("/");
        console.log(user)
        console.log("Амжилттай шинэчлэгдлээ");
      })
      .catch((err) => console.log(err));
  });
}

exports.deleteUserProfile = (req, res) => {
  const delUserId = req.params.id;
  User.findByIdAndDelete(delUserId)
    .then(()=> {
      res.redirect('/')
      console.log('Амжилттай устгагдлаа')
    })
    .catch(err => {console.log(err)})
}