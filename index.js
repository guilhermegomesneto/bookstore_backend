const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { books, users } = require("./src/data/data.js");

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

app.post("/register", async (req, res) => {
  const { username, password, name, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "This user already exists" });
  }

  users.push({ username, password: hashedPassword, name, email });
  res.status(201).json({ message: "User registered successfully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: "Password incorrect" });

  const token = jwt.sign({ username: user.username }, "yourSecretKey", {
    expiresIn: "1h",
  });
  res.status(200).json({
    token,
    user: {
      name: user.name,
      email: user.email,
      username: user.username,
    },
  });
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
