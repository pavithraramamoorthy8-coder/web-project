// quiz-data.js

const quizSets = {
  // 🧠 SET 1 — General Knowledge
  set1: [
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
    { question: "Who wrote the National Anthem of India?", options: ["Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru", "Bankim Chandra"], answer: "Rabindranath Tagore" },
    { question: "Taj Mahal is located in which city?", options: ["Agra", "Delhi", "Jaipur", "Mumbai"], answer: "Agra" },
    { question: "Which is the largest ocean?", options: ["Indian", "Atlantic", "Arctic", "Pacific"], answer: "Pacific" }
  ],

  // 🧠 SET 2 — General Knowledge
  set2: [
    { question: "Which is the smallest continent?", options: ["Australia", "Europe", "Antarctica", "Asia"], answer: "Australia" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "James Watt", "Isaac Newton"], answer: "Alexander Graham Bell" },
    { question: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Ganga"], answer: "Nile" },
    { question: "In which year did India gain independence?", options: ["1947", "1950", "1945", "1948"], answer: "1947" },
    { question: "Which animal is known as the 'Ship of the Desert'?", options: ["Horse", "Camel", "Elephant", "Donkey"], answer: "Camel" }
  ],

  // 💻 SET 3 — Programming Basics
  set3: [
    { question: "Which language is known as the mother of all languages?", options: ["C", "Java", "Python", "Assembly"], answer: "C" },
    { question: "Which symbol is used for comments in Python?", options: ["//", "#", "/* */", "<!-- -->"], answer: "#" },
    { question: "Which keyword is used to define a function in Python?", options: ["func", "def", "define", "lambda"], answer: "def" },
    { question: "HTML stands for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Tabular Markup Language", "None"], answer: "HyperText Markup Language" },
    { question: "Which operator is used to compare two values in JavaScript?", options: ["=", "==", "===", "!="], answer: "===" }
  ],

  // 💻 SET 4 — Programming Intermediate
  set4: [
    { question: "What is the output of 2 ** 3 in Python?", options: ["5", "6", "8", "9"], answer: "8" },
    { question: "Which HTML tag is used for a line break?", options: ["<lb>", "<break>", "<br>", "<hr>"], answer: "<br>" },
    { question: "Which CSS property changes text color?", options: ["font-style", "color", "background", "text"], answer: "color" },
    { question: "Which data structure uses FIFO order?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue" },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Logic", "Sequence Query List", "System Query Language"], answer: "Structured Query Language" }
  ],

  // 💻 SET 5 — Programming Advanced
  set5: [
    { question: "Which keyword is used to inherit a class in Python?", options: ["extend", "inherits", "super", "class"], answer: "class" },
    { question: "Which JavaScript method converts JSON to an object?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convertJSON()"], answer: "JSON.parse()" },
    { question: "Which is not an OOP concept?", options: ["Encapsulation", "Abstraction", "Polymorphism", "Compilation"], answer: "Compilation" },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Internet", "Automatic Process Interface", "None"], answer: "Application Programming Interface" },
    { question: "Which Python module is used for regular expressions?", options: ["re", "regex", "exp", "pattern"], answer: "re" }
  ],

  // 🗣 SET 6 — English Grammar
  set6: [
    { question: "Choose the correct spelling:", options: ["Enviroment", "Environment", "Environmant", "Enviornment"], answer: "Environment" },
    { question: "Which is a noun?", options: ["Run", "Play", "Book", "Quickly"], answer: "Book" },
    { question: "He ___ playing football.", options: ["is", "are", "am", "be"], answer: "is" },
    { question: "The plural of 'child' is ___", options: ["childs", "childes", "children", "childrens"], answer: "children" },
    { question: "‘Happy’ is opposite of ___", options: ["Sad", "Glad", "Cheerful", "Joyful"], answer: "Sad" }
  ],

  // 🗣 SET 7 — English Vocabulary
  set7: [
    { question: "Meaning of ‘Brave’ is ___", options: ["Coward", "Fearless", "Lazy", "Weak"], answer: "Fearless" },
    { question: "Synonym of ‘Big’ is ___", options: ["Tiny", "Large", "Small", "Little"], answer: "Large" },
    { question: "Antonym of ‘Light’ is ___", options: ["Dark", "Bright", "Dim", "Glow"], answer: "Dark" },
    { question: "Choose the correct word: ‘He ___ a book yesterday.’", options: ["reads", "read", "reading", "reads"], answer: "read" },
    { question: "‘They are ___ friends.’", options: ["good", "better", "best", "well"], answer: "good" }
  ],

  // 💰 SET 8 — Financial Basics
  set8: [
    { question: "What is saving?", options: ["Spending money", "Keeping money aside", "Borrowing money", "Lending money"], answer: "Keeping money aside" },
    { question: "Which is a good habit?", options: ["Spending all income", "Tracking expenses", "Avoiding saving", "Ignoring bills"], answer: "Tracking expenses" },
    { question: "What is a budget?", options: ["A spending plan", "A loan", "A bank account", "A credit card"], answer: "A spending plan" },
    { question: "Which is an example of a fixed expense?", options: ["Electric bill", "Movie ticket", "Rent", "Grocery"], answer: "Rent" },
    { question: "Emergency funds are used for?", options: ["Shopping", "Unexpected events", "Vacations", "Luxury items"], answer: "Unexpected events" }
  ],

  // 💰 SET 9 — Financial Advanced
  set9: [
    { question: "What is interest?", options: ["Tax", "Extra money paid on loans", "Savings", "Investment"], answer: "Extra money paid on loans" },
    { question: "What does EMI stand for?", options: ["Easy Monthly Installment", "Every Month Interest", "Equal Monthly Installment", "Equal Money Income"], answer: "Equal Monthly Installment" },
    { question: "What is credit score?", options: ["Your income", "Your savings", "Your loan repayment record", "Your budget"], answer: "Your loan repayment record" },
    { question: "Which is a type of investment?", options: ["Shopping", "Stock market", "Loan", "Credit card"], answer: "Stock market" },
    { question: "Insurance helps to ___", options: ["Increase tax", "Reduce risk", "Increase expenses", "Avoid savings"], answer: "Reduce risk" }
  ],

  // 💰 SET 10 — Money Management
  set10: [
    { question: "Best way to grow savings is ___", options: ["Keep cash at home", "Invest smartly", "Spend more", "Borrow money"], answer: "Invest smartly" },
    { question: "What is inflation?", options: ["Rise in prices", "Decrease in prices", "Increase in salary", "Bank policy"], answer: "Rise in prices" },
    { question: "What is a debit card?", options: ["Borrowed money", "Linked to bank account", "Loan card", "Credit card"], answer: "Linked to bank account" },
    { question: "A goal to buy a bike next year is a ___ goal.", options: ["Short-term", "Long-term", "No goal", "Dream"], answer: "Short-term" },
    { question: "Best way to avoid debt?", options: ["Borrow often", "Spend less than income", "Ignore bills", "Avoid savings"], answer: "Spend less than income" }
  ],

  // 💻 SET 11 — Mixed Programming
  set11: [
    { question: "Python is a ___ language.", options: ["Compiled", "Interpreted", "Machine", "Assembly"], answer: "Interpreted" },
    { question: "Which HTML tag displays images?", options: ["<image>", "<pic>", "<img>", "<photo>"], answer: "<img>" },
    { question: "Which CSS property makes text bold?", options: ["font-weight", "font-size", "text-style", "bold"], answer: "font-weight" },
    { question: "JavaScript runs on ___", options: ["Server", "Browser", "Compiler", "Machine code"], answer: "Browser" },
    { question: "React is a ___", options: ["Database", "Framework", "Library", "Language"], answer: "Library" }
  ],

  // 🧠 SET 12 — GK + Science Mix
  set12: [
    { question: "Which gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: "Oxygen" },
    { question: "The Earth revolves around ___", options: ["Moon", "Mars", "Sun", "Jupiter"], answer: "Sun" },
    { question: "Which vitamin is known as the sunshine vitamin?", options: ["A", "B", "C", "D"], answer: "D" },
    { question: "Water freezes at ___ °C.", options: ["0", "10", "32", "100"], answer: "0" },
    { question: "Which device measures temperature?", options: ["Thermometer", "Barometer", "Altimeter", "Compass"], answer: "Thermometer" }
  ],

  // 🗣 SET 13 — English Sentence Correction
  set13: [
    { question: "He don’t like apples. (Correct form)", options: ["He doesn’t like apples.", "He not like apples.", "He didn’t like apples.", "He no like apples."], answer: "He doesn’t like apples." },
    { question: "She ___ finished her work.", options: ["has", "have", "had", "having"], answer: "has" },
    { question: "Choose correct: ‘It is ___ interesting story.’", options: ["a", "an", "the", "no article"], answer: "an" },
    { question: "The sun ___ in the east.", options: ["rise", "rises", "rising", "rose"], answer: "rises" },
    { question: "They ___ watching a movie.", options: ["is", "are", "was", "be"], answer: "are" }
  ],

  // 💰 SET 14 — Personal Finance Situations
  set14: [
    { question: "If you earn ₹5000 and spend ₹4000, you should ___", options: ["Save ₹1000", "Borrow ₹1000", "Spend ₹6000", "Ignore budget"], answer: "Save ₹1000" },
    { question: "A credit card is ___", options: ["Your money", "Borrowed money", "Free money", "Gift card"], answer: "Borrowed money" },
    { question: "Which document tracks income and expenses?", options: ["Budget", "Invoice", "Bill", "Cheque"], answer: "Budget" },
    { question: "Emergency fund helps in ___", options: ["Unexpected costs", "Luxury items", "Shopping", "Vacations"], answer: "Unexpected costs" },
    { question: "Which is a long-term investment?", options: ["Stocks", "Groceries", "Movies", "Bills"], answer: "Stocks" }
  ],

  // 💻 SET 15 — Tech + Finance Mix
  set15: [
    { question: "UPI stands for ___", options: ["Unified Payments Interface", "Universal Payment Idea", "Unique Pay Integration", "Union Pay India"], answer: "Unified Payments Interface" },
    { question: "Which app is not a digital payment app?", options: ["PhonePe", "Paytm", "WhatsApp", "Excel"], answer: "Excel" },
    { question: "Which of these is an open-source OS?", options: ["Windows", "macOS", "Linux", "iOS"], answer: "Linux" },
    { question: "Net banking requires ___", options: ["Internet", "Cash", "Card only", "Cheque"], answer: "Internet" },
    { question: "What is phishing?", options: ["A cyber fraud", "A saving plan", "A tax", "An investment"], answer: "A cyber fraud" }
  ]
};
