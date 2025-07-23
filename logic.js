// logic.js
import {
  totQuestions,
  totQuestions2,
  totQuestions3,
  dtpQuestions,
  whatIfQuestions,
  top3Questions,
  dttQuestions,
  setujuQuestions,
  hesQuestions,
  shesQuestions,
} from "./questions.js";

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

export function initThisOrThat2() {
  const option1 = document.getElementById("option1tot2");
  const option2 = document.getElementById("option2tot2");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(totQuestions2.length, lastIndex);
    const [first, second] = totQuestions2[index].split(" atau ");
    option1.textContent = first || "";
    option2.textContent = (second || "").replace("?", "");
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}

export function initThisOrThat3() {
  const option1 = document.getElementById("option1tot3");
  const option2 = document.getElementById("option2tot3");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(totQuestions3.length, lastIndex);
    const [first, second] = totQuestions3[index].split(" atau ");
    option1.textContent = first || "";
    option2.textContent = (second || "").replace("?", "");
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

export function initDttQuestion() {
  const question = document.getElementById("dttQuestion");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(dttQuestions.length, lastIndex);
    question.textContent = dttQuestions[index];
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}

export function initSetujuQuestion() {
  const question = document.getElementById("setujuQuestion");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(setujuQuestions.length, lastIndex);
    question.textContent = setujuQuestions[index];
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}

export function initHesQuestion() {
  const question = document.getElementById("hesQuestion");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(hesQuestions.length, lastIndex);
    question.textContent = hesQuestions[index];
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}

export function initShesQuestion() {
  const question = document.getElementById("shesQuestion");
  const nextBtn = document.getElementById("nextBtn");

  const lastIndex = { value: -1 };

  function displayQuestion() {
    const index = getRandomIndex(shesQuestions.length, lastIndex);
    question.textContent = shesQuestions[index];
  }

  nextBtn.addEventListener("click", displayQuestion);
  displayQuestion();
}
