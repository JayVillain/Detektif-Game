const story = [
    // --- Fase 1: Lab Fisika ---
    {
        id: 'start',
        text: 'Hari itu, kampus Universitas Arkanos mendadak kacau. Di antara hiruk-pikuk mahasiswa, beredar kabar mengejutkan: laptop Profesor Nix hilang dari laboratorium fisika. Laptop itu bukan sembarang laptop. Di dalamnya tersimpan hasil penelitian yang katanya bisa mengubah arah sejarah ilmu pengetahuan.',
        background: 'bg_lab.jpg',
        character: null,
        choices: [
            { text: 'Dekati Profesor Nix yang berdiri di dekat pintu lab.', next: 'nix_dialogue_1' }
        ]
    },
    {
        id: 'nix_dialogue_1',
        text: '"Laptopku… hilang. Data itu terlalu penting, kamu harus membantuku menemukannya. Jika jatuh ke tangan yang salah… dunia bisa hancur."',
        background: 'bg_lab.jpg',
        character: 'nix.png',
        choices: [
            { text: 'Tanya tentang isi laptop.', next: 'ask_about_content' },
            { text: 'Periksa ruangan.', next: 'inspect_lab' }
        ]
    },
    {
        id: 'ask_about_content',
        text: '"Proyek itu sangat rahasia. Aku menamainya Proyek Kronos. Ini tentang..." Profesor Nix terdiam, matanya terlihat khawatir. "Itu hanya teori. Teori tentang mesin waktu."',
        background: 'bg_lab.jpg',
        character: 'nix.png',
        choices: [
            { text: 'Periksa ruangan.', next: 'inspect_lab_2' },
            { text: 'Kembali bertanya tentang Proyek Kronos.', next: 'ask_again_project' }
        ]
    },
    {
        id: 'inspect_lab',
        text: 'Pintu laboratorium tidak rusak, tapi kunci elektroniknya seolah dibuka dengan kode yang tepat. Kamu melihat serpihan kecil di lantai dan sebuah buku kuno di rak yang sepertinya tidak cocok dengan lab fisika.',
        background: 'bg_lab.jpg',
        character: null,
        choices: [
            { text: 'Ambil serpihan itu.', next: 'get_flash_drive' },
            { text: 'Amati buku kuno.', next: 'examine_book' }
        ]
    },
    {
        id: 'inspect_lab_2',
        text: 'Kamu mulai memeriksa sekeliling. Pintu lab tidak rusak, tapi kamu menemukan jejak sidik jari yang tidak cocok dengan Nix pada panel digital. Serpihan kecil juga tergeletak di lantai.',
        background: 'bg_lab.jpg',
        character: null,
        choices: [
            { text: 'Ambil sampel sidik jari.', next: 'get_fingerprint' },
            { text: 'Ambil serpihan itu.', next: 'get_flash_drive' }
        ]
    },
    {
        id: 'get_flash_drive',
        text: 'Serpihan itu adalah bagian dari sebuah flash drive. Goresan samar di lantai mengarah ke sebuah buku kuno yang sudah berdebu. Terdapat nama di buku tersebut.',
        background: 'bg_lab.jpg',
        character: null,
        choices: [
            { text: 'Periksa jurnal tersebut.', next: 'chapter2_start' }
        ]
    },
    {
        id: 'examine_book',
        text: 'Kamu memeriksa buku kuno itu. Isinya tentang mitologi Yunani, dan di salah satu halamannya, ada sketsa aneh yang mirip dengan yang disebutkan Nix sebagai "mesin waktu". Di sudutnya, tertulis nama yang dicoret: "Zain".',
        background: 'bg_lab.jpg',
        character: null,
        choices: [
            { text: 'Tanyakan pada Nix tentang nama "Zain".', next: 'confront_nix' },
            { text: 'Pergi ke perpustakaan untuk menyelidiki lebih jauh.', next: 'chapter2_start' }
        ]
    },
    {
        id: 'confront_nix',
        text: '"Zain? Oh, itu hanya kenalan lama. Dia tidak ada hubungannya dengan Proyek Kronos. Jangan mengungkitnya lagi!" Wajah Profesor Nix berubah pucat.',
        background: 'bg_lab.jpg',
        character: 'nix.png',
        choices: [
            { text: 'Pergi ke perpustakaan untuk menyelidiki lebih jauh.', next: 'chapter2_start' }
        ]
    },

    // --- Fase 2: Perpustakaan dan Arsip Kuno ---
    {
        id: 'chapter2_start',
        text: 'Kamu pergi ke perpustakaan. Suasananya sepi dan penuh buku-buku tua. Kamu mulai mencari arsip lama tentang Profesor Nix dan proyeknya.',
        background: 'bg_perpus.jpg',
        character: null,
        choices: [
            { text: 'Cari di arsip digital.', next: 'check_digital_archive' },
            { text: 'Cari di arsip fisik.', next: 'check_physical_archive' }
        ]
    },
    {
        id: 'check_physical_archive',
        text: 'Kamu menemukan map kuno dengan label “Proyek Kronos”. Isinya membuatmu terkejut: penelitian mesin waktu bukanlah milik Nix seorang diri. Nama Zain tercantum sebagai penemu utama, sedangkan Nix hanyalah rekan yang membantu dalam tahap akhir.',
        background: 'bg_perpus.jpg',
        character: null,
        choices: [
            { text: 'Cari tahu di mana Profesor Zain sekarang.', next: 'find_zain_location' }
        ]
    },
    {
        id: 'find_zain_location',
        text: 'Setelah bertanya-tanya, kamu menemukan informasi bahwa Zain sering menghabiskan waktu di lab cadangan yang jarang dipakai di lantai bawah.',
        background: 'bg_perpus.jpg',
        character: null,
        choices: [
            { text: 'Pergi ke lab cadangan.', next: 'chapter3_start' }
        ]
    },

    // --- Fase 3: Lab Cadangan ---
    {
        id: 'chapter3_start',
        text: 'Kamu melacak Zain ke sebuah lab cadangan yang hampir tidak pernah digunakan. Lab ini gelap dan sunyi. Saat kamu masuk, kamu melihat seorang pria di depan meja kerja yang penuh dengan alat-alat. Dia adalah Profesor Zain.',
        background: 'bg_lab.jpg',
        character: 'zain.png',
        choices: [
            { text: 'Konfrontasi Profesor Zain.', next: 'zain_dialogue_1' }
        ]
    },
    {
        id: 'zain_dialogue_1',
        text: '"Aku tahu kamu akan datang. Nix mengirimmu, kan? Dia mencuri apa yang bukan miliknya."',
        background: 'bg_lab.jpg',
        character: 'zain.png',
        choices: [
            { text: 'Tanya mengapa dia mencuri laptop Nix.', next: 'zain_dialogue_2' }
        ]
    },
    {
        id: 'zain_dialogue_2',
        text: '"Aku tidak mencuri, aku hanya mengambil kembali apa yang seharusnya menjadi milikku. Proyek Kronos. Dan aku tidak melakukannya demi uang, atau kejayaan... tapi demi cinta."',
        background: 'bg_lab.jpg',
        character: 'zain.png',
        choices: [
            { text: 'Tanya tentang cinta yang ia maksud.', next: 'zain_dialogue_3' }
        ]
    },
    {
        id: 'zain_dialogue_3',
        text: '"Dia bernama Shania Gracia. Aku harus kembali ke masa lalu... hanya untuk menemuinya sekali lagi. Dan Nix menghancurkan semuanya."',
        background: 'bg_lab.jpg',
        character: 'zain.png',
        choices: [
            { text: 'Lanjutkan ke klimaks.', next: 'chapter4_climax' }
        ]
    },

    // --- Fase 4: Lab Rahasia dan Klimaks ---
    {
        id: 'chapter4_climax',
        text: 'Tiba-tiba, Profesor Nix muncul di pintu lab cadangan. Ia membawa sebuah pistol kecil. "Zain! Kembalikan dataku sekarang juga!"',
        background: 'bg_lab.jpg',
        character: 'nix.png',
        choices: [
            { text: 'Dengarkan percakapan mereka.', next: 'climax_dialogue' }
        ]
    },
    {
        id: 'climax_dialogue',
        text: '"Aku tidak akan kembali, Nix. Kita berdua dari masa depan, dan aku akan kembali untuk memperbaiki kesalahanmu! Aku akan menyelamatkan Gracia!" Teriak Zain sambil mengaktifkan mesin yang ada di sana.',
        background: 'bg_lab.jpg',
        character: 'zain.png',
        choices: [
            { text: 'Saksikan apa yang terjadi.', next: 'final_scene' }
        ]
    },

    // --- Ending ---
    {
        id: 'final_scene',
        text: 'Mesin besar itu bergetar hebat. Profesor Nix mencoba menghentikan Zain, tapi terlambat. Zain melangkah ke dalam pusaran cahaya. Sebelum tubuhnya menghilang, ia menoleh padamu, lalu perlahan menghilang. Di layar akhir, kamu melihat sosok seorang wanita. Rambut hitam panjang, senyum lembut—Gracia.',
        background: 'bg_final.jpg',
        character: 'gracia.png',
        choices: [
            { text: 'Tamat', next: 'ending_text' }
        ]
    },
    {
        id: 'ending_text',
        text: '“Cinta melampaui waktu. Demi Gracia, Zain rela berjuang, mengorbankan segalanya, hingga akhirnya kembali pada pelukan yang ia rindukan.”',
        background: 'bg_final.jpg',
        character: null,
        choices: [
            { text: 'Main lagi?', next: 'start' }
        ]
    }
];