require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");

// Init Middleware
cors();

// Port
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server works");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
