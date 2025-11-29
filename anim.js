// Şarkı ile yazıları senkronize etme
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Her satırın yazısı ve kaçıncı saniyede çıkacağı
var lyricsData = [
  { 
    text: "Gözlerine bakınca ne dert kalır ne keder Sen bile bilmezsin gülüşün bende kaç bahar eder..", 
    time: 1 
  },
  // { text: "Kuşların fısıltısında bile senin adın saklıydı", time: 18 },
];

// Yazı animasyonu (ekrandan gitmez)
function updateLyrics() {
  var time = Math.floor(audio.currentTime);

  // Şu an gösterilecek satırı bul
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  // Eğer gösterilecek bir satır varsa
  if (currentLine) {
    var fadeInDuration = 0.1; // Yavaşça görünme süresi
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  }

  // DİKKAT: Artık yazıyı sıfırlayan "else" yok,
  // yani yazı çıktıktan sonra gitmez!
}

// Her saniye kontrol et
setInterval(updateLyrics, 1000);


// BAŞLIK FONKSİYONU
// Belirli süre sonra başlığı gizler
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Kaybolma animasyonu

  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // 3 saniye sonra tamamen gizle
}

// 216 saniye sonra gizle (216000 ms)
setTimeout(ocultarTitulo, 216000);
