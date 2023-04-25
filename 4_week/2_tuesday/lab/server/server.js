const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require("./controller");
const { getHouses, createHouse, updateHouse, deleteHouse } = controller;

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.delete("/api/houses/:id", deleteHouse);
app.put("/api/houses/:id", updateHouse);

app.listen(4004, () => console.log("Listening on port 4004"));
