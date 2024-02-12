const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let items = [
  { id: 1, title: "Ala" },
  { id: 2, title: "Ola" },
  { id: 3, title: "Ela" },
];

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    title: req.body.title,
  };

  items.push(newItem);
  res.json(newItem);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
