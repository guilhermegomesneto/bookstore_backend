const books = [
  {
    id: 1,
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "History",
    desc: "A timeless military classic, this ancient text provides profound insights into strategy, leadership, and warfare. It focuses on the importance of adaptability, surprise, and careful planning, offering valuable lessons for both military commanders and anyone seeking to understand the dynamics of conflict and competition.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 19.99,
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    desc: "A quintessential critique of the American Dream during the Jazz Age, 'The Great Gatsby' explores themes of wealth, class, and love through the tragic story of Jay Gatsby. Fitzgerald’s novel highlights the moral decay and disillusionment hidden behind the glittering surface of the roaring 1920s.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 14.99,
  },
  {
    id: 3,
    title: "The Story of Art",
    author: "E.H. Gombrich",
    genre: "Arts",
    desc: "An authoritative and comprehensive introduction to the history of art, this book takes readers on a journey through the evolution of visual culture, from early cave paintings to modern masterpieces. Gombrich explores art’s historical context, the techniques used by artists, and the cultural forces that shaped their work.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 29.99,
  },
  {
    id: 4,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "History",
    desc: "The poignant and powerful diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II. Anne’s reflections offer a deeply personal perspective on the horrors of war, the loss of innocence, and the resilience of the human spirit amidst unimaginable adversity.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 12.99,
  },
  {
    id: 5,
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    genre: "Mathematics",
    desc: "A groundbreaking exploration of the deep connections between mathematics, art, and music, Hofstadter weaves together the works of logician Kurt Gödel, artist M.C. Escher, and composer Johann Sebastian Bach. This book explores self-reference, paradoxes, and the nature of human thought in an engaging and thought-provoking manner.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 24.99,
  },
  {
    id: 6,
    title: "The Republic",
    author: "Plato",
    genre: "Philosophy",
    desc: "A foundational text in Western philosophy, 'The Republic' presents Plato’s vision of an ideal society, where justice prevails and individuals are assigned roles based on their abilities. Through dialogues between Socrates and various interlocutors, Plato examines the nature of justice, politics, and the pursuit of truth.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 9.99,
  },
  {
    id: 7,
    title: "The Wright Brothers",
    author: "David McCullough",
    genre: "History",
    desc: "The incredible true story of Orville and Wilbur Wright, two bicycle mechanics who defied the odds to invent the airplane. McCullough tells their story in rich detail, exploring their persistence, ingenuity, and the personal and professional challenges they faced in their journey to change the world.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 18.99,
  },
  {
    id: 8,
    title: "The Art Spirit",
    author: "Robert Henri",
    genre: "Arts",
    desc: "A collection of reflections, advice, and philosophical musings by Robert Henri, an influential American painter. Henri discusses not only the technical aspects of creating art but also the deeper emotional and spiritual motivations behind the creative process, making this a cherished work for both artists and art lovers.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 21.99,
  },
  {
    id: 9,
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    genre: "History",
    desc: "A comprehensive and meticulously researched account of the Nazi regime, its rise to power, and its eventual downfall. Shirer’s work blends political history, military strategy, and personal accounts to provide a chilling examination of one of history’s most devastating periods.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 25.99,
  },
  {
    id: 10,
    title: "The Elements of Drawing",
    author: "John Ruskin",
    genre: "Arts",
    desc: "A practical guide to the art of drawing, written by the Victorian critic and art theorist John Ruskin. This book offers clear instructions on technique while also delving into the philosophical and emotional dimensions of art-making, making it an invaluable resource for aspiring artists.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 15.99,
  },
  {
    id: 11,
    title: "The Guns of August",
    author: "Barbara W. Tuchman",
    genre: "History",
    desc: "An in-depth narrative of the events leading up to World War I, focusing on the political and military decisions that led to the outbreak of the conflict. Tuchman’s gripping account details how miscommunication, miscalculations, and diplomacy failures ignited one of the most devastating wars in history.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 17.99,
  },
  {
    id: 12,
    title: "The Code Book",
    author: "Simon Singh",
    genre: "Mathematics",
    desc: "A fascinating exploration of the history of cryptography, 'The Code Book' delves into the secrets of encryption, from ancient times to the digital age. Singh also highlights the ongoing battle between codebreakers and spies, illustrating cryptography’s central role in shaping history and technology.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 22.99,
  },
  {
    id: 13,
    title: "The Civil War: A Narrative",
    author: "Shelby Foote",
    genre: "History",
    desc: "A sweeping and detailed narrative of the American Civil War, 'The Civil War' offers a comprehensive account of the conflict from the perspectives of both Union and Confederate forces. Foote’s masterful storytelling brings the war’s events, personalities, and political dynamics to life, making this a definitive work on the topic.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 27.99,
  },
  {
    id: 14,
    title: "The Art of Happiness",
    author: "Dalai Lama",
    genre: "Arts",
    desc: "A profound exploration of happiness, compassion, and emotional well-being by the Dalai Lama. In this book, he shares his insights into the mind’s ability to cultivate happiness and the importance of a peaceful, kind-hearted approach to life, drawing from both Buddhist philosophy and modern psychology.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 16.99,
  },
  {
    id: 15,
    title: "The History of the Ancient World",
    author: "Susan Wise Bauer",
    genre: "History",
    desc: "An expansive and accessible account of the ancient civilizations that laid the foundation for the modern world. From the early Sumerians to the rise of empires in Rome and China, Bauer’s narrative provides a captivating overview of key events and figures in ancient history.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 23.99,
  },
  {
    id: 16,
    title: "The War of Art",
    author: "Steven Pressfield",
    genre: "Arts",
    desc: "A motivational guide to overcoming creative resistance, Pressfield’s book encourages artists, writers, and creators to push through the obstacles that impede their work. Drawing on personal experiences and philosophical insights, 'The War of Art' offers practical advice for anyone seeking to realize their creative potential.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 13.99,
  },
  {
    id: 17,
    title: "The Man Who Knew Infinity",
    author: "Robert Kanigel",
    genre: "Mathematics",
    desc: "A biography of the brilliant Indian mathematician Srinivasa Ramanujan, who defied the odds to make groundbreaking contributions to number theory. Kanigel chronicles Ramanujan’s rise from a humble background to his work with British mathematicians, offering a powerful story of genius and dedication.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 19.99,
  },
  {
    id: 18,
    title: "The Lives of the Artists",
    author: "Giorgio Vasari",
    genre: "Arts",
    desc: "One of the first art historical texts, Vasari’s 'The Lives of the Artists' offers biographical sketches of the greatest Renaissance artists, including Leonardo da Vinci, Michelangelo, and Raphael. Vasari’s vivid portrayals of these iconic figures shape our understanding of Renaissance art and its cultural context.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 24.99,
  },
  {
    id: 19,
    title: "The Silk Roads: A New History of the World",
    author: "Peter Frankopan",
    genre: "History",
    desc: "A revolutionary reexamination of world history, Frankopan shifts the focus from Europe to the Silk Roads, the ancient trade routes that connected East and West. This book uncovers the often overlooked role of Central Asia in shaping global history, offering a fresh perspective on the interconnectedness of cultures and civilizations.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 26.99,
  },
  {
    id: 20,
    title: "The Letters of Vincent van Gogh",
    author: "Vincent van Gogh",
    genre: "Arts",
    desc: "A collection of deeply personal letters written by the Dutch painter Vincent van Gogh to his brother Theo. These letters provide an intimate glimpse into van Gogh’s creative process, mental struggles, and his reflections on art, love, and life.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 18.99,
  },
  {
    id: 21,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    desc: "A sweeping history of humankind, from the earliest days of Homo sapiens to the modern age. Harari explores the cognitive revolution, the agricultural revolution, and the unifying forces of human culture, offering profound insights into how we became the dominant species on Earth and where we might be headed in the future.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 21.99,
  },
  {
    id: 22,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Philosophy",
    desc: "A groundbreaking exploration of how the human mind works, Kahneman distinguishes between two modes of thinking: fast, intuitive thought and slow, deliberate reasoning. Through examples from economics, psychology, and everyday life, he reveals the biases and errors that shape our decision-making and perception of the world.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 14.99,
  },
  {
    id: 23,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    desc: "A dystopian novel set in a totalitarian society ruled by Big Brother, where individual freedoms are eradicated and truth is manipulated. Orwell’s chilling depiction of a surveillance state serves as a powerful warning about the dangers of absolute power and the loss of personal liberties.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 12.99,
  },
  {
    id: 24,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Fiction",
    desc: "In a future society dominated by technology, consumerism, and genetic engineering, individualism is suppressed, and happiness is manufactured. Huxley’s novel critiques a world where people are conditioned for obedience and pleasure, exploring themes of freedom, conformity, and the consequences of technological advancement.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 13.99,
  },
  {
    id: 25,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    desc: "Set in the racially segregated American South during the 1930s, 'To Kill a Mockingbird' explores themes of racial injustice, moral growth, and the loss of innocence through the eyes of Scout Finch, a young girl whose father defends an innocent African American man accused of rape.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 15.99,
  },
  {
    id: 26,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Fiction",
    desc: "A sea-faring epic centered around Captain Ahab’s obsessive pursuit of the white whale, Moby Dick. Melville’s novel is a profound exploration of obsession, fate, and the unknown, filled with philosophical musings on existence and humanity’s relationship with nature.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 17.99,
  },
  {
    id: 27,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    desc: "A psychological masterpiece that delves into the moral dilemmas of a young man, Raskolnikov, who commits murder and grapples with guilt, punishment, and redemption. Dostoevsky’s novel explores themes of morality, free will, and the consequences of breaking societal laws.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 16.99,
  },
  {
    id: 28,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    desc: "A timeless romance that explores themes of love, class, and social expectations in early 19th-century England. Austen’s witty and satirical novel follows Elizabeth Bennet as she navigates relationships, misunderstandings, and societal pressures, ultimately finding love on her own terms.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 14.99,
  },
  {
    id: 29,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Fiction",
    desc: "A monumental work that spans several decades, 'War and Peace' explores the lives of Russian aristocrats during the Napoleonic Wars. Tolstoy examines the impact of war, personal choices, and societal changes on individuals, creating a rich narrative that encompasses history, philosophy, and human emotion.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 19.99,
  },
  {
    id: 30,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    desc: "A rebellious coming-of-age story that follows the troubled teenage protagonist, Holden Caulfield, as he navigates the challenges of adulthood, alienation, and depression. Salinger’s novel is a poignant exploration of adolescence and the search for identity in a world full of phoniness.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 13.99,
  },
  {
    id: 31,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    desc: "A philosophical and deeply emotional exploration of faith, doubt, and morality, centered around the lives of three brothers and their troubled relationship with their father, culminating in a murder mystery.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 22.99,
  },
  {
    id: 32,
    title: "The Stranger",
    author: "Albert Camus",
    genre: "Fiction",
    desc: "A groundbreaking existential novel about Meursault, a man who is indifferent to society’s expectations and struggles with the absurdity of life and the meaning of human existence after a senseless act of violence.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 12.99,
  },
  {
    id: 33,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    genre: "Fiction",
    desc: "A poignant and simple story about an old fisherman’s epic struggle with a giant marlin, symbolizing the eternal battle between man and nature, and exploring themes of perseverance and human dignity.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 11.99,
  },
  {
    id: 34,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Fiction",
    desc: "A dark and gripping tale about Dorian Gray, a man whose portrait ages while he remains eternally youthful, exploring themes of vanity, moral corruption, and the consequences of living a hedonistic life.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 14.99,
  },
  {
    id: 35,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fiction",
    desc: "A whimsical adventure about Bilbo Baggins, an unlikely hero who embarks on a quest to reclaim a lost treasure, encountering trolls, elves, and dragons in a tale of bravery, friendship, and self-discovery.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 18.99,
  },
  {
    id: 36,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fiction",
    desc: "The first part of Tolkien's epic trilogy, following the journey of Frodo Baggins and his companions as they embark on a perilous quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 19.99,
  },
  {
    id: 37,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Fiction",
    desc: "A fast-paced thriller involving symbologist Robert Langdon, who uncovers a hidden conspiracy tied to the works of Leonardo da Vinci, unraveling secrets that could change the course of history.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 15.99,
  },
  {
    id: 38,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Fiction",
    desc: "A dystopian novel set in a future where children are forced to fight to the death in a televised competition, exploring themes of survival, resistance, and the corrupting influence of power.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 13.99,
  },
  {
    id: 39,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    desc: "A philosophical novel that follows Santiago, a shepherd on a journey to discover his personal legend and the true meaning of happiness, exploring themes of destiny, dreams, and the interconnectedness of life.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 14.99,
  },
  {
    id: 40,
    title: "The Shining",
    author: "Stephen King",
    genre: "Fiction",
    desc: "A chilling psychological horror novel about a family who moves into an isolated hotel, where the father’s descent into madness endangers them all, driven by supernatural forces and the ghosts of the past.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 16.99,
  },
  {
    id: 41,
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Fiction",
    desc: "The gothic horror classic about Count Dracula, a vampire who moves to England to spread the undead curse, exploring themes of fear, sexuality, and the clash of cultures.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 11.99,
  },
  {
    id: 42,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Fiction",
    desc: "A pioneering science fiction novel about Victor Frankenstein, whose quest to conquer death results in the creation of a monstrous being, exploring themes of ambition, isolation, and the dangers of unchecked scientific progress.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 12.99,
  },
  {
    id: 43,
    title: "The Odyssey",
    author: "Homer",
    genre: "Fiction",
    desc: "An ancient Greek epic that follows Odysseus’ arduous journey home after the Trojan War, filled with gods, monsters, and heroic feats, exploring the themes of fate, perseverance, and the desire for homecoming.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 14.99,
  },
  {
    id: 44,
    title: "The Iliad",
    author: "Homer",
    genre: "Fiction",
    desc: "An epic poem set during the Trojan War, focusing on the conflict between Achilles and Hector, and examining the complexities of war, heroism, and the human cost of conflict.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 14.99,
  },
  {
    id: 45,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Fiction",
    desc: "A monumental work of Italian literature, depicting the journey of the soul through Hell, Purgatory, and Heaven, rich with philosophical and theological exploration of sin, redemption, and divine justice.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 19.99,
  },
  {
    id: 46,
    title: "The Metamorphosis",
    author: "Franz Kafka",
    genre: "Fiction",
    desc: "A surreal story about Gregor Samsa, who wakes up one morning to find himself transformed into a giant insect, exploring themes of alienation, family dynamics, and the absurdity of modern life.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 12.99,
  },
  {
    id: 47,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    genre: "Fiction",
    desc: "A landmark work of magic realism, tracing the rise and fall of the Buendía family in the town of Macondo, exploring the intersection of history, memory, and the fantastical.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 18.99,
  },
  {
    id: 48,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    genre: "Fiction",
    desc: "A timeless classic that follows the adventures of Don Quixote, a man who believes himself to be a knight, exploring themes of idealism, reality, and the nature of human consciousness in an often absurd world.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 17.99,
  },
  {
    id: 49,
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    genre: "Fiction",
    desc: "A novel about a group of expatriates living in the post-World War I era, capturing their disillusionment, searching for meaning in a fragmented world, and exploring themes of love, loss, and identity.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 15.99,
  },
  {
    id: 50,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Fiction",
    desc: "A haunting and poetic post-apocalyptic novel about a father and son journeying through a desolate, burned-out world, examining survival, hope, and the unbreakable bond between parent and child.",
    cover:
      "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
    price: 16.99,
  },
];

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

module.exports = { books, users };
