const db = require("./db.json");

let id = db.length;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(db);
  },
  createHouse: (req, res) => {
    id++;
    let newHouse = { ...req.body, id: id };
    db.push(newHouse);
    res.status(200).send(db);
  },
  updateHouse: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;

    let index = db.findIndex((elem) => +elem.id === +id);
    if (type === "plus") {
      db[index].price += 10000;
    } else if (type === "minus") {
      db[index].price -= 10000;
    } else {
      res.sendStatus(400);
    }

    res.status(200).send(db);
  },
  deleteHouse: (req, res) => {
    const { id } = req.params;

    let index = db.findIndex((elem) => +elem.id === +id);
    db.splice(index, 1);

    res.status(200).send(db);
  },
};
