const storyTextElement = document.getElementById('story-text');
const choicesContainerElement = document.getElementById('choices-container');
const backgroundElement = document.getElementById('background');
const characterElement = document.getElementById('character');

let currentStoryId = 'start';

function startGame() {
    showScene(currentStoryId);
}

function showScene(sceneId) {
    const scene = story.find(s => s.id === sceneId);
    
    // Perbarui teks cerita
    storyTextElement.innerText = scene.text;

    // Perbarui latar belakang
    backgroundElement.style.backgroundImage = `url('assets/img/${scene.background}')`;

    // Perbarui karakter
    if (scene.character) {
        characterElement.src = `assets/img/${scene.character}`;
        characterElement.style.opacity = 1;
    } else {
        characterElement.style.opacity = 0;
    }

    // Hapus pilihan lama
    while (choicesContainerElement.firstChild) {
        choicesContainerElement.removeChild(choicesContainerElement.firstChild);
    }

    // Tambahkan pilihan baru
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('choice-button');
        button.addEventListener('click', () => selectChoice(choice));
        choicesContainerElement.appendChild(button);
    });
}

function selectChoice(choice) {
    currentStoryId = choice.next;
    showScene(currentStoryId);
}

startGame();