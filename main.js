const questions = [
  "Liburan ke Pantai atau Gunung?",
  "Penampilan baik atau sifat baik?",
  "Tenar atau Pintar?",
  "Goodlooking miskin atau jelek kaya?",
  "Mie goreng atau Mie Kuah?",
  "Kegiatan indoor atau outdoor?",
  "Bisa ngilang atau bisa terbang?",
  "Kerja sesuai passion tapi penghasilan pas-pasan atau tidak sesuai passion tapi penghasilan lebih?",
  "Nasi goreng atau nasi uduk?",
  "Lagu barat atau lagu indo?",
  "Indomaret atau Alfamart?",
  "Film atau series?",
  "Jago olahraga atau jago musik?",
  "Cash atau cashless?",
  "Lagu galau atau lagu semangat?",
  "Kucing atau anjing?",
  "TikTok atau Instagram?",
  "KFC atau McD?",
  "Banyak uang sedikit waktu atau pas-pasan banyak waktu?",
  "Coca-Cola atau Sprite?",
  "Kopi atau non kopi?",
  "Coklat atau keju?",
  "Good looking tapi telmi atau biasa aja tapi pintar?",
  "Film action atau drama?",
  "Goodlooking tapi bau atau wangi tapi jelek?",
  "Pasangan introvert atau extrovert?",
  "Bau mulut atau bau badan?",
  "Liburan bareng keluarga atau teman?",
  "Kecap atau sambel?",
  "Jogging pagi atau sore?",
];

let index = 0;

function displayQuestion() {
  const [first, second] = questions[index].split(" atau ");
  document.getElementById("option1").textContent = first || "";
  document.getElementById("option2").textContent = second?.replace("?", "") || "";
}

document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % questions.length;
  displayQuestion();
});

// Tampilkan pertanyaan pertama saat halaman dibuka
displayQuestion();
