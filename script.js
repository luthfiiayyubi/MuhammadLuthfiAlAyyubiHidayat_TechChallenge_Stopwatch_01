// variabel waktu
let ms = 0; // mili detik
let sec = 0; // detik
let min = 0; // menit

// variabel untuk menyimpan interval timer, biar bisa di stop saat pause ataupun reset
let timer = null;

// fungsi update display
function updateDisplay() {
  let m = min.toString().padStart(2, "0");
  let s = sec.toString().padStart(2, "0");
  let milli = ms.toString().padStart(2, "0");

  // menampilkan html
  $("#display").text(`${m}:${s}:${milli}`);
}

// fungsi stopwatch jalan
function runTimer() {
  ms++;
  if (ms == 100) {
    ms = 0;
    sec++;
  }

  if (sec == 60) {
    sec = 0;
    min++;
  }
  // update tampilan
  updateDisplay();
}

// START
$("#start").click(function () {
  // jika timer udah jalan, tidak buat yang baru
  if (timer !== null) return;

  timer = setInterval(runTimer, 10);
});

// PAUSE
$("#pause").click(function () {
  // menghentikan interval
  clearInterval(timer);
  // set ke null agar bisa start lagi
  timer = null;
});

// RESET
$("#reset").click(function () {
  // hentikan timer
  clearInterval(timer);
  timer = null;
  // reset semua waktu
  ms = 0;
  sec = 0;
  min = 0;

  updateDisplay();
});
