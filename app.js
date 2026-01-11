const express = require("express");

const app = express();
app.use(express.json());
app.get("/test", async (req, res) => {
  return res.send("hello there");
});

app.post("/user", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  return res.status(201).json({ username, password });
});

module.exports = app;
