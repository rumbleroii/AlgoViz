require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./middleware/dbconnect");

const cors = require("cors");
const bodyParser = require("body-parser");

// Init Middleware
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// Connect Database
connectDB();

// Port
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server works");
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/request", require("./routes/request"));
app.use("/api/posts",require("./routes/posts"));

// Undefined Routes
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
