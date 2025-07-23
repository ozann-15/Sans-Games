// =================== THIS OR THAT ===================
const totQuestions = [
  "Liburan ke Pantai atau Gunung?",
  "Penampilan baik atau sifat baik?",
  "Tenar atau Pintar?",
  "Goodlooking miskin atau jelek kaya?",
  "Mie goreng atau Mie Kuah?",
  "Kegiatan indoor atau outdoor?",
  "Bisa ngilang atau bisa terbang?",
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

const whatIfQuestions = [
  "Apa yang akan kamu lakukan jika kamu bisa menghentikan waktu?",
  "Bagaimana jika kamu bisa membaca pikiran orang lain?",
  "Kalau kamu jadi presiden sehari, apa yang kamu lakukan?",
  "Bagaimana jika kamu bisa terbang?",
  "Jika kamu bisa menghapus satu dosa di dunia, dosa apa yang kamu pilih?",
  "Jika kamu mendapat uang 100 juta dalam semalam, apa yang ingin kamu lakukan?",
  "Bagaimana jika kamu mempergoki pacarmu selingkuh dengan sahabat dekatmu?",
  "Jika kamu kebal terhadap satu penyakit, penyakit apa yang kamu pilih?",
  "Jika kamu dilahirkan kembali sebagai bukan manusia, kamu mau jadi apa?",
  "Jika kamu bisa mengambil alih satu perusahaan, perusahaan apa yang kamu pilih?",
  "Jika kamu bisa masuk ke dunia kartun, kartun apa yang kamu pilih dan kenapa?",
  "Jika kamu bisa memainkan alat musik, alat apa yang kamu pilih?",
  "Jika diberi satu permintaan, kamu ingin meminta apa?",
  "Jika kamu hebat dalam satu olahraga, olahraga apa yang kamu pilih?",
  "Jika kamu hanya bisa makan satu jenis makanan seumur hidup, apa yang kamu pilih?",
  "Jika diberi liburan gratis ke mana pun, kamu mau ke mana?",
  "Jika kamu bisa punya kekuatan superhero, apa dan kenapa?",
  "Jika kamu bisa mengendalikan satu elemen, elemen apa yang kamu pilih?",
  "Jika kamu bisa tinggal di mana saja di dunia, di mana kamu ingin tinggal?",
  "Jika kamu bisa memelihara hewan buas, hewan apa yang kamu pilih?",
  "Jika kamu bisa kembali ke masa lalu dan ubah satu keputusan, apa yang kamu ubah?",
  "Jika kamu bisa memilih artis untuk jadi pasangan, siapa yang kamu pilih?",
  "Jika kamu bisa belajar satu skill dalam semalam, skill apa itu?",
  "Jika kamu bisa membelah diri, apa yang akan kamu lakukan?",
  "Jika kamu bisa ngobrol dengan dirimu usia 10 tahun, apa nasihatmu?",
  "Jika kamu berada di situasi perang, peran apa yang kamu pilih?",
  "Jika kamu bisa bicara dengan tokoh sejarah, siapa dan apa yang akan kamu tanya?",
  "Jika kamu bisa wujudkan rumah impian, rumah seperti apa yang kamu mau?",
  "Jika kamu bisa hidup di era sejarah manapun, era apa dan kenapa?",
  "Jika kamu bisa hapus satu kejahatan di dunia, kejahatan apa yang kamu hapus?",
  "Jika kamu diberi anugerah untuk membuktikan satu kebenaran, teori apa itu?",
  "Jika kamu punya 24 jam di dunia sendirian, apa yang akan kamu lakukan?",
];

// =================== TOP 3 ===================
const top3Questions = [
  "Makanan favoritmu!",
  "Makanan tradisional yang paling kamu suka!",
  "Streetfood favoritmu!",
  "Minuman minimarket favorit!",
  "Makanan minimarket favoritmu!",
  "Menu cafe favoritmu!",
  "Cafe di daerahmu!",
  "Film Indonesia favoritmu!",
  "Film Barat favoritmu!",
  "Series favoritmu!",
  "Kartun/animasi favoritmu!",
  "Game favoritmu!",
  "Penyanyi solo Indonesia favoritmu!",
  "Band Indonesia favoritmu!",
  "Penyanyi Barat favoritmu!",
  "Band Barat favoritmu!",
  "Lagu Indonesia favoritmu!",
  "Lagu Barat favoritmu!",
  "Content creator favoritmu!",
  "Komedian favoritmu!",
  "Warna favoritmu!",
  "Mainan masa kecil favoritmu!",
  "Jajanan masa kecil favoritmu!",
  "Pekerjaan idamanmu!",
  "Brand fashion favoritmu!",
  "Olahraga favoritmu!",
  "Destinasi liburan impianmu!",
  "Mata pelajaran favoritmu!",
  "Negara yang paling ingin kamu kunjungi!",
  "Acara televisi favoritmu!",
];

let index = 0;

function initThisOrThat() {
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const nextBtn = document.getElementById("nextBtn");

  function displayQuestion() {
    const [first, second] = totQuestions[index].split(" atau ");
    option1.textContent = first || "";
    option2.textContent = (second || "").replace("?", "");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totQuestions.length;
    displayQuestion();
  });

  displayQuestion();
}

function initWhatIf() {
  const question = document.getElementById("question");
  const nextBtn = document.getElementById("nextBtn");

  function displayQuestion() {
    question.textContent = whatIfQuestions[index];
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % whatIfQuestions.length;
    displayQuestion();
  });

  displayQuestion();
}

function initTop3() {
  const question = document.getElementById("option1");
  const nextBtn = document.getElementById("nextBtn");

  function displayQuestion() {
    question.textContent = top3Questions[index];
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % top3Questions.length;
    displayQuestion();
  });

  displayQuestion();
}

// =================== AUTO INIT ===================
window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("option1") && document.getElementById("option2")) {
    initThisOrThat();
  } else if (document.getElementById("question")) {
    initWhatIf();
  } else if (document.getElementById("title")) {
    initTop3();
  }
});
