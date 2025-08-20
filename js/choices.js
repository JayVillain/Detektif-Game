// Pilihan di tiap chapter

const choices = {
  start: [
    { text: "Periksa Lab", next: "chapter2.lab", bg: "assets/img/bg_lab.jpg" },
    { text: "Kembali ke Perpustakaan", next: "chapter2.perpus", bg: "assets/img/bg_perpus.jpg" },
    { text: "Pergi ke Taman", next: "chapter2.taman", bg: "assets/img/bg_taman.jpg" },
    { text: "Tanya Satpam Lagi", next: "chapter2.satpam", bg: "assets/img/bg_satpam.jpg" }
  ],

  afterZain: [
    { text: "Konfrontasi Profesor Nix", next: "chapter3.reveal", char: "assets/img/nix.png" },
    { text: "Cari tahu tentang Zain", next: "chapter3.reveal", char: "assets/img/zain.png" }
  ],

  ending: [
    { text: "Lanjut ke Ending", next: "ending.trueEnding", bg: "assets/img/bg_final.png", char: "assets/img/gracia.png" }
  ]
};
