const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Dragon news is running");
});

app.listen(port, () => {
  console.log(`Dragon api is running on port : ${port}`);
});
