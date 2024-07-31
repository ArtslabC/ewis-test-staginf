const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.error("Full error details:", error);
    process.exit(1); // Exit process with failure
  }
};
// mongoose.connection.on("disconnected", () => {
//   console.error("MongoDB connection lost. Attempting to reconnect...");
//   setTimeout(connectDB, 5000); // Attempt to reconnect after 5 seconds
// });

// mongoose.connection.on("reconnected", () => {
//   console.log("MongoDB reconnected.");
// });4

mongoose.connection.on("disconnected", () => {
  console.error("MongoDB connection lost. Attempting to reconnect...");
  // Implement reconnection logic here
  setTimeout(connectDB, 5000);
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB reconnected.");
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB error:", error);
  // Handle the error or implement recovery logic
  setTimeout(connectDB, 5000);
});

module.exports = connectDB;
