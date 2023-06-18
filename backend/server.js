const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
-app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"],
  }))
  ;

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = 5000;
mongoose
  .connect("mongodb+srv://giri_biswadeep21:RWqPeBn2qpW1RTrD@cluster0.bgr8nn4.mongodb.net/task_manager_2?retryWrites=true&w=majority")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
