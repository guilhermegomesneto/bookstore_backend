const books = [
  {
    id: 1,
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "History",
    desc: "A classic treatise on military strategy.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    desc: "A critique of the American Dream in the 1920s.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 3,
    title: "The Story of Art",
    author: "E.H. Gombrich",
    genre: "Arts",
    desc: "A comprehensive introduction to the history of art.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 4,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "History",
    desc: "The diary of Anne Frank during World War II.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 5,
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    genre: "Mathematics",
    desc: "An exploration of the connections between mathematics, art, and music.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 6,
    title: "The Republic",
    author: "Plato",
    genre: "Philosophy",
    desc: "A fundamental work of Western philosophy on justice and politics.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 7,
    title: "The Wright Brothers",
    author: "David McCullough",
    genre: "History",
    desc: "The story of the Wright brothers and the invention of the airplane.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 8,
    title: "The Art Spirit",
    author: "Robert Henri",
    genre: "Arts",
    desc: "Reflections on art and life by an American painter.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 9,
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    genre: "History",
    desc: "A detailed history of the rise and fall of the Third Reich.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 10,
    title: "The Elements of Drawing",
    author: "John Ruskin",
    genre: "Arts",
    desc: "A manual on drawing techniques.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 11,
    title: "The Guns of August",
    author: "Barbara W. Tuchman",
    genre: "History",
    desc: "A narrative of the beginning of World War I.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 12,
    title: "The Code Book",
    author: "Simon Singh",
    genre: "Mathematics",
    desc: "The history of cryptography and its importance in mathematics.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 13,
    title: "The Civil War: A Narrative",
    author: "Shelby Foote",
    genre: "History",
    desc: "A comprehensive narrative of the American Civil War.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 14,
    title: "The Art of Happiness",
    author: "Dalai Lama",
    genre: "Arts",
    desc: "Reflections on the pursuit of happiness.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 15,
    title: "The History of the Ancient World",
    author: "Susan Wise Bauer",
    genre: "History",
    desc: "A narrative of ancient history from the beginning of civilization.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 16,
    title: "The War of Art",
    author: "Steven Pressfield",
    genre: "Arts",
    desc: "A guide on how to overcome creative blocks.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 17,
    title: "The Man Who Knew Infinity",
    author: "Robert Kanigel",
    genre: "Mathematics",
    desc: "The biography of Indian mathematician Srinivasa Ramanujan.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 18,
    title: "The Lives of the Artists",
    author: "Giorgio Vasari",
    genre: "Arts",
    desc: "Biographies of the great artists of the Renaissance.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 19,
    title: "The Silk Roads: A New History of the World",
    author: "Peter Frankopan",
    genre: "History",
    desc: "A new perspective on world history through the Silk Roads.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 20,
    title: "The Letters of Vincent van Gogh",
    author: "Vincent van Gogh",
    genre: "Arts",
    desc: "Personal letters from the famous Dutch painter.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 21,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    desc: "A narrative of human history from the Stone Age to the modern era.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 22,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Philosophy",
    desc: "An exploration of the two modes of human thinking: fast and slow.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 23,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    desc: "A dystopia about a totalitarian future.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 24,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Fiction",
    desc: "A dystopia about a futuristic society controlled by technology and conditioning.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 25,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    desc: "A story about racism and injustice in the southern United States.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 26,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Fiction",
    desc: "The saga of Captain Ahab and his obsession with the white whale.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 27,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    desc: "The story of a young man who commits a murder and faces the moral consequences.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 28,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    desc: "A romance about the complexities of love and society.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 29,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Fiction",
    desc: "An epic narrative about life in Russia during the Napoleonic Wars.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 30,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    desc: "The story of a rebellious teenager in New York.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 31,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    desc: "A philosophical and deeply emotional exploration of faith, doubt, and morality, centered around the lives of three brothers and their troubled relationship with their father, culminating in a murder mystery.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 32,
    title: "The Stranger",
    author: "Albert Camus",
    genre: "Fiction",
    desc: "A groundbreaking existential novel about Meursault, a man who is indifferent to society’s expectations and struggles with the absurdity of life and the meaning of human existence after a senseless act of violence.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 33,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    genre: "Fiction",
    desc: "A poignant and simple story about an old fisherman’s epic struggle with a giant marlin, symbolizing the eternal battle between man and nature, and exploring themes of perseverance and human dignity.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 34,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Fiction",
    desc: "A dark and gripping tale about Dorian Gray, a man whose portrait ages while he remains eternally youthful, exploring themes of vanity, moral corruption, and the consequences of living a hedonistic life.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 35,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fiction",
    desc: "A whimsical adventure about Bilbo Baggins, an unlikely hero who embarks on a quest to reclaim a lost treasure, encountering trolls, elves, and dragons in a tale of bravery, friendship, and self-discovery.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 36,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fiction",
    desc: "The first part of Tolkien's epic trilogy, following the journey of Frodo Baggins and his companions as they embark on a perilous quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 37,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Fiction",
    desc: "A fast-paced thriller involving symbologist Robert Langdon, who uncovers a hidden conspiracy tied to the works of Leonardo da Vinci, unraveling secrets that could change the course of history.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 38,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Fiction",
    desc: "A dystopian novel set in a future where children are forced to fight to the death in a televised competition, exploring themes of survival, resistance, and the corrupting influence of power.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 39,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    desc: "A philosophical novel that follows Santiago, a shepherd on a journey to discover his personal legend and the true meaning of happiness, exploring themes of destiny, dreams, and the interconnectedness of life.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 40,
    title: "The Shining",
    author: "Stephen King",
    genre: "Fiction",
    desc: "A chilling psychological horror novel about a family who moves into an isolated hotel, where the father’s descent into madness endangers them all, driven by supernatural forces and the ghosts of the past.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 41,
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Fiction",
    desc: "The gothic horror classic about Count Dracula, a vampire who moves to England to spread the undead curse, exploring themes of fear, sexuality, and the clash of cultures.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 42,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Fiction",
    desc: "A pioneering science fiction novel about Victor Frankenstein, whose quest to conquer death results in the creation of a monstrous being, exploring themes of ambition, isolation, and the dangers of unchecked scientific progress.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 43,
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    desc: "An ancient Greek epic that follows Odysseus’ arduous journey home after the Trojan War, filled with gods, monsters, and heroic feats, exploring the themes of fate, perseverance, and the desire for homecoming.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 44,
    title: "The Iliad",
    author: "Homer",
    genre: "Fiction",
    desc: "An epic poem set during the Trojan War, focusing on the conflict between Achilles and Hector, and examining the complexities of war, heroism, and the human cost of conflict.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 45,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Fiction",
    desc: "A monumental work of Italian literature, depicting the journey of the soul through Hell, Purgatory, and Heaven, rich with philosophical and theological exploration of sin, redemption, and divine justice.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 46,
    title: "The Metamorphosis",
    author: "Franz Kafka",
    genre: "Fiction",
    desc: "A surreal story about Gregor Samsa, who wakes up one morning to find himself transformed into a giant insect, exploring themes of alienation, family dynamics, and the absurdity of modern life.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 47,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    genre: "Fiction",
    desc: "A landmark work of magic realism, tracing the rise and fall of the Buendía family in the town of Macondo, exploring the intersection of history, memory, and the fantastical.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 48,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    genre: "Fiction",
    desc: "A timeless classic that follows the adventures of Don Quixote, a man who believes himself to be a knight, exploring themes of idealism, reality, and the nature of human consciousness in an often absurd world.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 49,
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    genre: "Fiction",
    desc: "A novel about a group of expatriates living in the post-World War I era, capturing their disillusionment, searching for meaning in a fragmented world, and exploring themes of love, loss, and identity.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
  },
  {
    id: 50,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Fiction",
    desc: "A haunting and poetic post-apocalyptic novel about a father and son journeying through a desolate, burned-out world, examining survival, hope, and the unbreakable bond between parent and child.",
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
