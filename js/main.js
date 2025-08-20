const storyTextElement = document.getElementById('story-text');
const choicesContainerElement = document.getElementById('choices-container');
const backgroundElement = document.getElementById('background');
const characterElement = document.getElementById('character');

// Atur ID cerita awal ke adegan perkenalan pemain
let currentStoryId = 'intro_player';

function startGame() {
    showScene(currentStoryId);
}

function showScene(sceneId) {
    // Cari adegan (scene) yang cocok dengan ID yang diberikan
    const scene = story.find(s => s.id === sceneId);
    
    if (!scene) {
        console.error(`Adegan dengan ID "${sceneId}" tidak ditemukan.`);
        return;
    }

    // Perbarui teks cerita
    storyTextElement.innerText = scene.text;

    // Perbarui latar belakang
    // Jika ada latar belakang, gunakan; jika tidak, biarkan kosong
    if (scene.background) {
        backgroundElement.style.backgroundImage = `url('assets/img/${scene.background}')`;
    } else {
        backgroundElement.style.backgroundImage = 'none';
    }

    // Perbarui karakter
    // Jika ada karakter, tampilkan; jika tidak, sembunyikan
    if (scene.character) {
        characterElement.src = `assets/img/${scene.character}`;
        characterElement.style.opacity = 1;
    } else {
        characterElement.style.opacity = 0;
    }

    // Hapus pilihan (choices) lama
    while (choicesContainerElement.firstChild) {
        choicesContainerElement.removeChild(choicesContainerElement.firstChild);
    }

    // Tambahkan pilihan (choices) baru dari adegan saat ini
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('choice-button');
        button.addEventListener('click', () => selectChoice(choice));
        choicesContainerElement.appendChild(button);
    });
}

function selectChoice(choice) {
    // Set ID cerita saat ini ke adegan berikutnya
    currentStoryId = choice.next;
    
    // Panggil fungsi untuk menampilkan adegan baru
    showScene(currentStoryId);
}

// Mulai game saat halaman dimuat
startGame();