const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<p>I'm a paragraph</p>");
});

app.post("*", (req, res) => {
  res.send("I GOT YOUR RESPONSE");
});

app.get("*", (req, res) => {
  res.send("<h2>I DON'T EXIST</h2>");
});

app.listen(4001, () => console.log("server is listening on port 4001"));
