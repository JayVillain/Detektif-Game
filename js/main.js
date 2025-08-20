const storyBox = document.getElementById("story");
const speakerBox = document.getElementById("speaker");
const choicesBox = document.getElementById("choices");
const charImg = document.getElementById("char-img");
const bg = document.getElementById("background");

function showScene(sceneObj, options = []) {
  speakerBox.textContent = sceneObj.speaker || "";
  storyBox.textContent = sceneObj.text || "";
  if (sceneObj.char) charImg.src = sceneObj.char;
  if (sceneObj.bg) bg.style.backgroundImage = `url('${sceneObj.bg}')`;

  choicesBox.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.className = "choice-btn";
    btn.onclick = () => {
      if (opt.next.startsWith("chapter")) {
        const [ch, sc] = opt.next.split(".");
        const nextScene = story[ch][sc];
        showScene(nextScene, choices.afterZain);
        if (opt.char) charImg.src = opt.char;
        if (opt.bg) bg.style.backgroundImage = `url('${opt.bg}')`;
      } else if (opt.next.startsWith("ending")) {
        const [_, sc] = opt.next.split(".");
        const endScene = ending[sc];
        showScene(endScene, []);
        storyBox.innerHTML = endScene.text + endScene.after;
        if (opt.bg) bg.style.backgroundImage = `url('${opt.bg}')`;
        if (opt.char) charImg.src = opt.char;
      }
    };
    choicesBox.appendChild(btn);
  });
}

// Start game
showScene(story.chapter1.intro, [
  { text: "Mulai Investigasi", next: "chapter1.scene1", char: "assets/img/nix.png", bg: "assets/img/bg_lab.png" }
]);
