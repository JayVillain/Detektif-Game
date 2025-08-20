// =============================
// Pilihan interaksi per chapter
// =============================

const choices = {
  start: [
    { text: "Mulai Investigasi", next: "chapter1.scene1" }
  ],

  chapter1: [
    { text: "Periksa Lab", next: "chapter2.lab" },
    { text: "Pergi ke Perpustakaan", next: "chapter2.perpus" },
    { text: "Pergi ke Taman", next: "chapter2.taman" },
    { text: "Tanya Satpam", next: "chapter2.satpam" }
  ],

  chapter2: [
    { text: "Konfrontasi Profesor Nix", next: "chapter3.reveal" }
  ],

  chapter3: [
    { text: "Dengarkan Nix", next: "chapter4.truth" },
    { text: "Temui Zain", next: "chapter4.zain" }
  ],

  chapter4: [
    { text: "Lanjut ke Ending", next: "ending.trueEnding" }
  ]
};
