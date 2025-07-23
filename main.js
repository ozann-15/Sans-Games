// main.js
import {
  initThisOrThat,
  initThisOrThat2,
  initThisOrThat3,
  initWhatIf,
  initDtpQuestion,
  initTop3,
  initDttQuestion,
} from "./logic.js";

import { initFormHandler } from "./form.js"; // ✅ tambahkan ini

window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("option1") && document.getElementById("option2")) {
    initThisOrThat();
  } else if (document.getElementById("option1tot2") && document.getElementById("option2tot2")) {
    initThisOrThat2();
  } else if (document.getElementById("option1tot3") && document.getElementById("option2tot3")) {
    initThisOrThat3();
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
