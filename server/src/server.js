const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "Home route" });
});

app.get("/health", (req, res) => {
  res.status(200).send({
    status: "OK",
    message: "Service is running smoothly",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
