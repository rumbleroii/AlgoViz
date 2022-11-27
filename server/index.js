require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./middleware/dbconnect");

const cors = require("cors");

// Init Middleware
cors();

// Connect Database
connectDB();

// Port
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server works");
});

// Routes
app.get("/api/auth", require("./routes/auth"));

app.get("*", async (req, res) => {
  try {
    console.log("Undefined Route Accessed");
    res.status(404).json({
      msg: "Route not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Server Error",
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`[INFO] Server Running on Port ${PORT}`);
});
