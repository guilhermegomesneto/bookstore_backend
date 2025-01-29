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

app.get("/search", (req, res) => {
  const { _page = 1, _limit = 8, title } = req.query;

  const page = Number(_page);
  const limit = Number(_limit);

  let filteredBooks = books;
  if (title) {
    filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  const totalBooks = filteredBooks.length;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  res.status(200).json({
    books: paginatedBooks,
    totalBooks,
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
