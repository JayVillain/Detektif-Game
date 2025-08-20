const story = [
    // Chapter 1: Hilangnya Laptop
    {
        id: 'start',
        text: 'Hari itu, kampus Universitas Arkanos mendadak kacau. Di antara hiruk-pikuk mahasiswa, beredar kabar mengejutkan: laptop Profesor Nix hilang dari laboratorium fisika.',
        background: 'bg_lab.jpg',
        character: 'nix.png',
        choices: [
            { text: 'Dekati Profesor Nix', next: 'nix_dialogue' }
        ]
    },
    {
        id: 'nix_dialogue',
        text: '"Laptopku… hilang. Data itu terlalu penting, kamu harus membantuku menemukannya. Jika jatuh ke tangan yang salah… dunia bisa hancur."',
        background: 'bg_lab.jpg',
        character: 'nix.png',
        choices: [
            { text: 'Tanya tentang isi laptop', next: 'ask_laptop' },
            { text: 'Periksa ruangan', next: 'inspect_lab' }
        ]
    },
    // Tambahkan adegan-adegan lain di sini
    {
        id: 'inspect_lab',
        text: 'Kamu menatap sekeliling. Pintu lab tidak rusak, tapi kunci elektroniknya seolah dibuka dengan kode yang tepat. Kamu melihat serpihan kecil di lantai.',
        background: 'bg_lab.jpg',
        character: null, // Tidak ada karakter di adegan ini
        choices: [
            { text: 'Ambil serpihan itu', next: 'find_clue' },
            { text: 'Tanyakan lagi ke Nix', next: 'nix_dialogue' }
        ]
    },
    {
        id: 'find_clue',
        text: 'Serpihan itu adalah bagian dari sebuah flash drive. Ada goresan samar di lantai yang mengarah ke sebuah buku di rak. Buku itu adalah jurnal tentang sejarah kuno.',
        background: 'bg_lab.jpg',
        character: null,
        choices: [
            { text: 'Periksa jurnal tersebut', next: 'chapter2_start' }
        ]
    }
];

// Kita akan tambahkan data cerita lainnya nanti, seperti chapter 2, 3, dst.