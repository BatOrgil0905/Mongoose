const User = require('../model/users');
exports.homeController = function(req, res){
    User.find()
        .then(users => {      
            res.render('index', {
                pageTitle: "Нүүр хуудас",
                users: users
            })
        })
        .catch(err => console.log(err))
}

exports.about = function (req, res) {
  res.send("about us");
};