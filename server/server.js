//connection to the backend
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017/DishDB";

//DB connection
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongoose database connection established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//routers
const commentsRouter = require("./routes/comments");
const dishesRouter = require("./routes/dishes");
const usersRouter = require("./routes/users");

//models
app.use("/comments", commentsRouter);
app.use("/dishes", dishesRouter);
app.use("/users", usersRouter);

//backend routing PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
