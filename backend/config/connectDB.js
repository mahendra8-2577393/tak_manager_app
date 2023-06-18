const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`mongodb+srv://giri_biswadeep21:RWqPeBn2qpW1RTrD@cluster0.bgr8nn4.mongodb.net/task_manager?retryWrites=true&w=majority`);

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;


