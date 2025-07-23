// logic.js
import { totQuestions, dtpQuestions, whatIfQuestions, top3Questions } from "./questions.js";

function getRandomIndex(length, lastIndexRef) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (newIndex === lastIndexRef.value && length > 1);
  lastIndexRef.value = newIndex;
  return newIndex;
}

export function initThisOrThat() {
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(totQuestions.length, lastIndex);
    const [first, second] = totQuestions[index].split(" atau ");
    option1.textContent = first || "";
    option2.textContent = (second || "").replace("?", "");
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}

export function initWhatIf() {
  const question = document.getElementById("question");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(whatIfQuestions.length, lastIndex);
    question.textContent = whatIfQuestions[index];
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}

export function initDtpQuestion() {
  const question = document.getElementById("dtpQuestion");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(dtpQuestions.length, lastIndex);
    question.textContent = dtpQuestions[index];
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}

export function initTop3() {
  const question = document.getElementById("option1");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(top3Questions.length, lastIndex);
    question.textContent = top3Questions[index];
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}
