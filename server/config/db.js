const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("inside", process.env.MONGO_URI);
  console.log("connect");
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
