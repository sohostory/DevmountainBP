const db = require("../db.json");

let id = db.length;

module.exports = {
  getAllMovies: (req, res) => {
    res.status(200).send(db);
  },
  createMovie: (req, res) => {
    id++;
    let newMovie = { ...req.body, id: id };
    db.push(newMovie);
    res.status(200).send(db);
  },
  deleteMovie: (req, res) => {
    const { id } = req.params;

    let index = db.findIndex((elem) => elem.id === Number(id));
    db.splice(index, 1);
    res.status(200).send(db);
  },
  updateMovie: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;

    let index = db.findIndex((elem) => +elem.id === +id);

    if (db[index].rating === 5 && type === "plus") {
      res.status(400).send("cannot go above 5");
    } else if (db[index].rating === 0 && type === "minus") {
      res.status(400).send("cannot go below 0");
    } else if (type === "plus") {
      db[index].rating++;
      res.status(200).send(db);
    } else if (type === "minus") {
      db[index].rating--;
      res.status(200).send(db);
    } else {
      res.sendStatus(400);
    }
  },
};
