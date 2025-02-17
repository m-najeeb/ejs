const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = {
    title: "Hey",
    name: "John",
  };
  res.render("index", data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
