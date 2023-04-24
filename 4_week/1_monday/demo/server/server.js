const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const inventory = [
  "greeting card",
  "table",
  "chair",
  "milk",
  "cookies",
  "cheese",
  "shampoo",
  "conditional",
  "facewash",
];

app.get("/api/inventory", (req, res) => {
  if (req.query.item) {
    const filteredInventory = inventory.filter((item) =>
      item.toLowerCase().includes(req.query.item.toLowerCase())
    );
    res.status(200).send(filteredInventory);
  } else {
    res.status(200).send(inventory);
  }
});

app.get("/api/inventory/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(inventory[id]);
});

app.get("/api/inventory/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(inventory[id]);
});

app.listen(5050, () => {
  console.log("listening on 5050");
});
