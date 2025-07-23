// form.js
export function initFormHandler() {
  const form = document.getElementById("saranForm");
  const submitBtn = document.getElementById("submitBtn");

  if (!form || !submitBtn) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = "⏳ Mengirim...";

    const kategori = form.querySelector('[name="kategori"]').value;
    const pertanyaan = form.querySelector('[name="pertanyaan"]').value;

    const data = new URLSearchParams({
      kategori: kategori,
      pertanyaan: pertanyaan,
    });

    fetch(
      "https://script.google.com/macros/s/AKfycbwtdjkB9ExJMt8FkNvYTiLmhC76EY8AEIZ5_19yUipHWFgweBHIzgGZMSaFhxDef5AH/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      }
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("Response:", result);
        alert("Pertanyaan berhasil dikirim!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Gagal mengirim pertanyaan.");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "🚀 Kirim Saran";
      });
  });
}
