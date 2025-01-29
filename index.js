const express = require("express");
const cors = require("cors");
const { books } = require("./src/data/data.js");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

function findBook(id) {
  return books.findIndex((book) => {
    return book.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("The Great Library API is running!");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const index = findBook(req.params.id);
  res.status(200).json(books[index]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
