const books = [
  {
    id: 1,
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "História",
    desc: "Um tratado clássico sobre estratégia militar.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Ficção",
    desc: "Uma crítica ao sonho americano nos anos 1920.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 3,
    title: "The Story of Art",
    author: "E.H. Gombrich",
    genre: "Artes",
    desc: "Uma introdução abrangente à história da arte.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 4,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "História",
    desc: "O diário de Anne Frank durante a Segunda Guerra Mundial.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 5,
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    genre: "Matemática",
    desc: "Uma exploração das conexões entre matemática, arte e música.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 6,
    title: "The Republic",
    author: "Plato",
    genre: "Filosofia",
    desc: "Uma obra fundamental da filosofia ocidental sobre justiça e política.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 7,
    title: "The Wright Brothers",
    author: "David McCullough",
    genre: "História",
    desc: "A história dos irmãos Wright e a invenção do avião.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 8,
    title: "The Art Spirit",
    author: "Robert Henri",
    genre: "Artes",
    desc: "Reflexões sobre a arte e a vida de um pintor americano.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 9,
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    genre: "História",
    desc: "Uma história detalhada da ascensão e queda do Terceiro Reich.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 10,
    title: "The Elements of Drawing",
    author: "John Ruskin",
    genre: "Artes",
    desc: "Um manual sobre as técnicas de desenho.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 11,
    title: "The Guns of August",
    author: "Barbara W. Tuchman",
    genre: "História",
    desc: "Uma narrativa do início da Primeira Guerra Mundial.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 12,
    title: "The Code Book",
    author: "Simon Singh",
    genre: "Matemática",
    desc: "A história da criptografia e sua importância na matemática.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 13,
    title: "The Civil War: A Narrative",
    author: "Shelby Foote",
    genre: "História",
    desc: "Uma narrativa abrangente da Guerra Civil Americana.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 14,
    title: "The Art of Happiness",
    author: "Dalai Lama",
    genre: "Artes",
    desc: "Reflexões sobre a busca pela felicidade.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 15,
    title: "The History of the Ancient World",
    author: "Susan Wise Bauer",
    genre: "História",
    desc: "Uma narrativa da história antiga desde o início da civilização.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 16,
    title: "The War of Art",
    author: "Steven Pressfield",
    genre: "Artes",
    desc: "Um guia sobre como superar bloqueios criativos.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 17,
    title: "The Man Who Knew Infinity",
    author: "Robert Kanigel",
    genre: "Matemática",
    desc: "A biografia do matemático indiano Srinivasa Ramanujan.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 18,
    title: "The Lives of the Artists",
    author: "Giorgio Vasari",
    genre: "Artes",
    desc: "Biografias dos grandes artistas do Renascimento.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 19,
    title: "The Silk Roads: A New History of the World",
    author: "Peter Frankopan",
    genre: "História",
    desc: "Uma nova perspectiva sobre a história mundial através das rotas da seda.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 20,
    title: "The Letters of Vincent van Gogh",
    author: "Vincent van Gogh",
    genre: "Artes",
    desc: "Cartas pessoais do famoso pintor holandês.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 21,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "História",
    desc: "Uma narrativa da história da humanidade desde a Idade da Pedra até a era moderna.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 22,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Filosofia",
    desc: "Uma exploração das duas formas de pensamento humano: rápida e lenta.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 23,
    title: "1984",
    author: "George Orwell",
    genre: "Ficção",
    desc: "Uma distopia sobre um futuro totalitário.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 24,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Ficção",
    desc: "Uma distopia sobre uma sociedade futurista controlada por tecnologia e condicionamento.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 25,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Ficção",
    desc: "Uma história sobre racismo e injustiça no sul dos Estados Unidos.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 26,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Ficção",
    desc: "A saga do capitão Ahab e sua obsessão pela baleia branca.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 27,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Ficção",
    desc: "A história de um jovem que comete um assassinato e enfrenta as consequências morais.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 28,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Ficção",
    desc: "Um romance sobre as complexidades do amor e da sociedade.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 29,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Ficção",
    desc: "Uma narrativa épica sobre a vida na Rússia durante as guerras napoleônicas.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 30,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Ficção",
    desc: "A história de um adolescente rebelde em Nova York.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 31,
    title: "The Code Book",
    author: "Simon Singh",
    genre: "Matemática",
    desc: "A história da criptografia e sua importância na matemática.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 32,
    title: "The Civil War: A Narrative",
    author: "Shelby Foote",
    genre: "História",
    desc: "Uma narrativa abrangente da Guerra Civil Americana.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 33,
    title: "The Art of Happiness",
    author: "Dalai Lama",
    genre: "Artes",
    desc: "Reflexões sobre a busca pela felicidade.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 34,
    title: "The History of the Ancient World",
    author: "Susan Wise Bauer",
    genre: "História",
    desc: "Uma narrativa da história antiga desde o início da civilização.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 35,
    title: "The War of Art",
    author: "Steven Pressfield",
    genre: "Artes",
    desc: "Um guia sobre como superar bloqueios criativos.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 36,
    title: "The Man Who Knew Infinity",
    author: "Robert Kanigel",
    genre: "Matemática",
    desc: "A biografia do matemático indiano Srinivasa Ramanujan.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
];

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

module.exports = { books, users };
