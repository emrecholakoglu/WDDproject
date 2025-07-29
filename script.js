// This is for the button on main page it directs to contact page when clicked
function goToContact() {
  window.location.href = "form.html";
}



//This js is for contact page 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stops refreshing page

    // receives the input and removes the blanks before and after of the input by trim function
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();

    // checks the inputs if they are on rule otherwise it gives error to user
    if (name === "" || name.length < 2) {
      alert("Please enter a valid name (at least 2 characters)");
      return;
    }

    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    if (number === "" || isNaN(number)) {
      alert("Please enter a valid phone number");
      return;
    }

    if (message === "" || message.length < 10) {
      alert("Please write a message with at least 10 characters");
      return;
    }

    // If correct and successfull resets the form does not reload the page and gives info to user
    alert("Thank you! Your message has been sent.");
    form.reset(); // reset form
  });
});






// game quiz page, questions and answers here
let questions = [
   {
    question: "What is the benefit of education?",
    choices: ["Money", "Able to buy car", "Better thinking skills"],
    answer: "Better thinking skills"
  },
    {
    question: "How does self awareness help you?",
    choices: ["Forgetting problems", "Understanding yourself", "Ignoring future"],
    answer: "Understanding yourself"
  },
    {
    question: "What is personel development?",
    choices: ["Improving yourself", "Selling projects", "Earning money"],
    answer: "Improving yourself"
  },
    {
    question: "What is education?",
    choices: ["Study", "Learning", "Something unneccesary"],
    answer: "Learning"
  },
    {
    question: "Who helps you to learn new things?",
    choices: ["Yourself", "Anyone", "Friends"],
    answer: "Yourself"
   }
];

// which question you are on it keeps 
let current = 0;
// prints questions and answers to screen
function showQuestion() {
  document.getElementById("question").innerHTML = questions[current].question;
  let choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
// Adds the choices as button clikable every button has onclick function and check the choice
  for (let i = 0; i < questions[current].choices.length; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = questions[current].choices[i];
    btn.onclick = function () {
      checkAnswer(questions[current].choices[i]);
    };
    choicesDiv.appendChild(btn);
  }
}
// checks answers if they are correct or wrong gives message if they either correct or not
function checkAnswer(choice) {
  if (choice === questions[current].answer) {
    document.getElementById("feedback").innerHTML = "Correct!";
  } else {
    document.getElementById("feedback").innerHTML = "Wrong!";
  }
}
// changes the question when pressed it is next button and when questions are done it gives message quiz completed
function nextQuestion() {
  current++;
  document.getElementById("feedback").innerHTML = "";
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerHTML = "Quiz Completed!";
    document.getElementById("choices").innerHTML = "";
  }
}
// when this page opens starts showing questions
shuffle(questions);
window.onload = showQuestion;

// shuffle function, it shuffles the questions on quiz page
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// self awareness show tip buttton function
function showtip() {
  document.getElementById("tipbox").innerText = "Knowing yourself is the first step for improvement.";
}

// pdev show tip button function
function showtip2() {
  document.getElementById("tipbox2").innerText = "see your potential";
}

// photo thumb gallery zooms the photos when clicked on gallery page

function togglesize(img) {
  if (img.style.width <= "200px") {
    img.style.width = "400px";
  } else {
    img.style.width = "200px";
  }
}


