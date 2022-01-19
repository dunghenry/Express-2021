const User = require("../models/users.js");

let getAllUsers = async (req, res, next) => {
  User.find({}).then((user) => {
    return res.status(200).json({
      message: "ok",
      data: user,
    });
  });
};

let searchUser = async (req, res, next) => {
  User.findById({ _id: req.params.id }).then((user) => {
    return res.status(200).json({
      message: "ok",
      data: user,
    });
  });
};

let deleteUser = async (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
  .then(() =>res.json({message: 'successfully!!'}))
  .catch(next);
    
};

let createUser = async (req, res, next) => {
  res.render("users/create.ejs");
};

let store = async (req, res, next) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.json({ data: user }))
    .catch(next);
};

let update = async (req, res, next) => {
  User.findById({ _id: req.params.id }).then((user) => {
    res.render('users/edit.ejs', {user: user});
  });

  
   
}

let updateUser = async (req, res, next) => {
  
  User.updateOne({ _id: req.params.id }, req.body)
  .then(() =>res.json({message: 'successfully!!'}))
  .catch(next);

  // res.json({message: 'Oke'})
}

module.exports = {
  getAllUsers,
  searchUser,
  createUser,
  deleteUser,
  store,
  updateUser,
  update
};
