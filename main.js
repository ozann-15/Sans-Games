// main.js
import { initThisOrThat, initWhatIf, initDtpQuestion, initTop3, initDttQuestion } from "./logic.js";

import { initFormHandler } from "./form.js"; // ✅ tambahkan ini

window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("option1") && document.getElementById("option2")) {
    initThisOrThat();
  } else if (document.getElementById("question")) {
    initWhatIf();
  } else if (document.getElementById("title")) {
    initTop3();
  } else if (document.getElementById("dtpQuestion")) {
    initDtpQuestion();
  } else if (document.getElementById("dttQuestion")) {
    initDttQuestion();
  }
  // ✅ Panggil handler form jika form ditemukan
  if (document.getElementById("saranForm")) {
    initFormHandler();
  }
});
