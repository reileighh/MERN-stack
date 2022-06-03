const router = require("express").Router();
let User = require("../models/users_model");

//gets the lists of all users. returned in json format
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ username, email, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status.apply(400).json(`Error ` + err));
});

module.exports = router;
