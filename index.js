const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages(),
    software: req.get("User-Agent"),
  });
});

const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
