const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const checkRoute = require("./routes/check");
const userRoute = require("./routes/users");
const moviesRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
dotenv.config();

mongoose
  .connect(env.MONGO_URL)
  .then(() => console.log("DB connection is successful"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors());
app.use("/api/check", checkRoute)
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/lists", listRoute);
app.listen(8800, () => {
  console.log("Backend server is running");
});
