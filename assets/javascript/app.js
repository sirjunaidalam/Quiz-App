var htmlMcqs = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Text Markup Language",
        "Hyper Tool Markup Language"
      ],
      correctAnswer: 2
    },
    {
      question: "Which HTML tag is used to define the largest heading?",
      options: ["&lt;h6&gt;", "&lt;head&gt;", "&lt;h1&gt;", "&lt;heading&gt;"],
      correctAnswer: 2
    },
    {
      question: "Which attribute is used to provide an alternative text for an image?",
      options: ["alt", "src", "title", "href"],
      correctAnswer: 0
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["&lt;br&gt;", "&lt;lb&gt;", "&lt;break&gt;", "&lt;hr&gt;"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is used to create a hyperlink in HTML?",
      options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;hyperlink&gt;"],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: ["&lt;footer&gt;", "&lt;section&gt;", "&lt;bottom&gt;", "&lt;foot&gt;"],
      correctAnswer: 0
    },
    {
      question: "What is the correct way to make text bold in HTML?",
      options: ["&lt;bold&gt;", "&lt;b&gt;", "&lt;strong&gt;", "Both &lt;b&gt; and &lt;strong&gt;"],
      correctAnswer: 3
    },
    {
      question: "Which attribute is used to open a hyperlink in a new tab?",
      options: ['target="_blank"', 'target="new"', 'window="new"', 'href="newtab"'],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of the &lt;title&gt; tag in HTML?",
      options: [
        "Defines the main heading of a page",
        "Adds a title to the body content",
        "Defines the title of the document displayed in the browser tab",
        "Specifies the heading of a section"
      ],
      correctAnswer: 2
    },
    {
      question: "Which tag is used to create an unordered list in HTML?",
      options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
      correctAnswer: 0
    }
  ];

  var currentQuestion = 0;
  var score = 0;

  function loadQuestion() {
    var quizDiv = document.getElementById("quiz");
    var question = htmlMcqs[currentQuestion];

    quizDiv.innerHTML = `
      <div class="question">${currentQuestion + 1}. ${question.question}</div>
      <div class="options">
        ${question.options.map((option, index) =>
              `<button onclick="checkAnswer(${index})">${option}</button>`
          )
          .join("")
          }
      </div>
    `;
  }

  function checkAnswer(selectedIndex) {
    var question = htmlMcqs[currentQuestion];
    if (selectedIndex === question.correctAnswer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < htmlMcqs.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    var quizDiv = document.getElementById("quiz");
    var resultDiv = document.getElementById("result");

    quizDiv.innerHTML = "";
    resultDiv.innerHTML = `You scored ${score} out of ${htmlMcqs.length}!`;
  }

  // Load the first question when the page loads
  loadQuestion();