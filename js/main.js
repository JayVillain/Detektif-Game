function showScene(path, nextChoices = []) {
  let scene;
  if (path.startsWith("chapter")) {
    const [ch, sc] = path.split(".");
    scene = story[ch][sc];
  } else if (path.startsWith("ending")) {
    const [_, sc] = path.split(".");
    scene = ending[sc];
  }

  // tampilkan teks
  speakerBox.textContent = scene.speaker || "";
  storyBox.textContent = scene.text || "";

  // update gambar karakter & background
  if (scene.char) charImg.src = scene.char;
  if (scene.bg) bg.style.backgroundImage = `url('${scene.bg}')`;

  // reset choices
  choicesBox.innerHTML = "";

  // kalau ada nextChoices manual (misalnya intro)
  let availableChoices = nextChoices;

  // kalau kosong, ambil sesuai chapter
  if (availableChoices.length === 0) {
    if (path === "chapter1.scene1") availableChoices = choices.chapter1;
    else if (path.startsWith("chapter2")) availableChoices = choices.chapter2;
    else if (path.startsWith("chapter3")) availableChoices = choices.chapter3;
    else if (path.startsWith("chapter4")) availableChoices = choices.chapter4;
    else availableChoices = [];
  }

  availableChoices.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.className = "choice-btn";
    btn.onclick = () => showScene(opt.next);
    choicesBox.appendChild(btn);
  });

  // ending khusus
  if (path.startsWith("ending")) {
    storyBox.innerHTML = scene.text + (scene.after || "");
  }
}

// mulai game → intro + tombol
showScene("chapter1.intro", choices.start);
