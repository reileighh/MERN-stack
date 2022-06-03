// /*This user router is on the route /add-user which will be triggered when the client clicks on signup */

// const userdb = require("../models/user");
// const express = require("express");
// const userRouter = express.Router();

// userRouter.route("/").post((req, res) => {
//   if (!req.body) {
//     res.status(400).send({ message: "Content cannot be empty!" });
//     return;
//   }
//   const user = new Userdb({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//   });

//   user
//     .save(user)
//     .then((data) => {
//       //res.send(data)
//       res.redirect("/login");
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message ||
//           "Some error occurred while creating a create operation",
//       });
//     });
// });

// module.exports = userRouter;
