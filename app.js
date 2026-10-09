const verses = {
  beginning: [
    {
      eyebrow: "FOR WHAT COMES AFTER",
      english: "Beside the sunken boat, a thousand sails pass; before the ailing tree, ten thousand others bloom in spring.",
      chinese: "沉舟侧畔千帆过，病树前头万木春。",
      author: "Liu Yuxi", work: "A Reply to Bai Juyi at Yangzhou", period: "Tang dynasty",
      context: "Liu Yuxi wrote this in reply to his friend Bai Juyi after years of political exile. The damaged boat and ailing tree evoke loss, while the moving sails and spring growth keep time moving around them.",
      fit: "A beginning can arrive without erasing what came before. This line makes room for both.",
      source: "https://zh.wikisource.org/zh-hant/%E9%85%AC%E6%A8%82%E5%A4%A9%E6%8F%9A%E5%B7%9E%E5%88%9D%E9%80%A2%E5%B8%AD%E4%B8%8A%E8%A6%8B%E8%B4%88"
    },
    {
      eyebrow: "FOR THE FIRST SMALL SIGN",
      english: "The good rain knows its season; when spring comes, life begins to stir.",
      chinese: "好雨知时节，当春乃发生。",
      author: "Du Fu", work: "A Delightful Rain on a Spring Night", period: "Tang dynasty",
      context: "Du Fu's poem welcomes spring rain that arrives gently at night and nourishes the world. Its joy is in timing and quiet renewal.",
      fit: "For a beginning that feels less like a grand announcement and more like the first rain.",
      source: "https://zh.wikisource.org/zh-hant/%E6%98%A5%E5%A4%9C%E5%96%9C%E9%9B%A8"
    }
  ],
  missing: [
    {
      eyebrow: "FOR THE DISTANCE BETWEEN US",
      english: "May we both live long, and share this moon even a thousand miles apart.",
      chinese: "但愿人长久，千里共婵娟。",
      author: "Su Shi", work: "Shui Diao Ge Tou", period: "1076",
      context: "Su Shi wrote this lyric at Mid-Autumn while thinking of his younger brother Su Zhe, from whom he was separated. The moon becomes something they can both look toward despite the distance.",
      fit: "A way to tell someone far away: I hope you are well, and we still share this sky.",
      source: "https://zh.wikisource.org/zh-hans/%E6%B0%B4%E8%AA%BF%E6%AD%8C%E9%A0%AD_%28%E6%98%8E%E6%9C%88%E5%B9%BE%E6%99%82%E6%9C%89%29"
    },
    {
      eyebrow: "FOR A LOVE THAT ENDURES",
      english: "If two hearts remain true for a long time, must they be together every morning and night?",
      chinese: "两情若是久长时，又岂在朝朝暮暮。",
      author: "Qin Guan", work: "Que Qiao Xian", period: "Northern Song dynasty",
      context: "This lyric retells the Qixi story: two lovers divided by the Milky Way meet only once a year. Its closing question values lasting feeling over constant closeness.",
      fit: "For someone you love and cannot see often, when distance is real but so is the bond.",
      source: "https://zh.wikisource.org/zh/%E9%B5%B2%E6%A9%8B%E4%BB%99_%28%E7%A7%A6%E8%A7%80%29"
    }
  ],
  season: [
    {
      eyebrow: "FOR THE AIR AFTER RAIN",
      english: "New rain has passed through the empty mountains; by evening, autumn is in the air.",
      chinese: "空山新雨后，天气晚来秋。",
      author: "Wang Wei", work: "Autumn Evening in the Mountains", period: "Tang dynasty",
      context: "Wang Wei's poem observes a mountain dwelling after rain: moonlight, pines, clear water, people returning home. The season is felt through the whole scene.",
      fit: "For the moment you notice that the light, air, or rhythm of the day has changed.",
      source: "https://zh.wikisource.org/zh/%E5%B1%B1%E5%B1%85%E7%A7%8B%E6%9A%9D"
    },
    {
      eyebrow: "FOR THE RETURN OF SPRING",
      english: "The grasses and trees are spreading; the spring mountains are ready to be seen.",
      chinese: "草木蔓发，春山可望。",
      author: "Wang Wei", work: "Letter to Pei Di from the Mountains", period: "Tang dynasty",
      context: "This is from a letter, not a poem. Wang Wei imagines the coming spring in the mountains and invites his friend Pei Di to visit when the landscape wakes.",
      fit: "For the first signs of a new season and the wish to share them with someone.",
      source: "https://zh.wikisource.org/wiki/%E5%B1%B1%E4%B8%AD%E8%88%87%E8%A3%B4%E8%BF%AA%E7%A7%80%E6%89%8D%E6%9B%B8"
    }
  ],
  courage: [
    {
      eyebrow: "FOR TAKING THE NEXT STEP",
      english: "A time will come to ride the long wind and break the waves, setting my cloudlike sail across the sea.",
      chinese: "长风破浪会有时，直挂云帆济沧海。",
      author: "Li Bai", work: "Hard Is the Road", period: "Tang dynasty",
      context: "In a poem full of frustration and blocked roads, Li Bai ends by imagining a future crossing. The hope comes after doubt, not before it.",
      fit: "For a brave step taken while the path is still uncertain.",
      source: "https://zh.wikisource.org/wiki/%E8%A1%8C%E8%B7%AF%E9%9B%A3_%28%E6%9D%8E%E7%99%BD%29"
    },
    {
      eyebrow: "FOR WALKING THROUGH THE RAIN",
      english: "Do not mind the rain striking through the trees. Why not sing softly and keep walking?",
      chinese: "莫听穿林打叶声，何妨吟啸且徐行。",
      author: "Su Shi", work: "Ding Feng Bo", period: "Northern Song dynasty",
      context: "After being caught in rain on a walk, Su Shi turns the small experience into a lyric about meeting difficulty with composure. The rain is real; the response is his choice.",
      fit: "For courage that is quiet, steady, and possible today.",
      source: "https://zh.wikisource.org/wiki/%E5%AE%9A%E9%A2%A8%E6%B3%A2_%28%E8%98%87%E8%BB%BE%29"
    }
  ],
  lettinggo: [
    {
      eyebrow: "FOR WHAT HAS PASSED",
      english: "Looking back at the road once swept by rain, I go home: neither storm nor clear sky holds me.",
      chinese: "回首向来萧瑟处，归去，也无风雨也无晴。",
      author: "Su Shi", work: "Ding Feng Bo", period: "Northern Song dynasty",
      context: "The lyric begins with a sudden rainstorm and ends with a changed view of the weather behind him. It suggests an inner steadiness after the storm.",
      fit: "For the moment when you can look back without needing the past to be different.",
      source: "https://zh.wikisource.org/wiki/%E5%AE%9A%E9%A2%A8%E6%B3%A2_%28%E8%98%87%E8%BB%BE%29"
    },
    {
      eyebrow: "FOR THE PATH THAT OPENS",
      english: "I walk to where the water ends, then sit and watch the clouds rise.",
      chinese: "行到水穷处，坐看云起时。",
      author: "Wang Wei", work: "My Retreat at Zhongnan", period: "Tang dynasty",
      context: "Wang Wei describes wandering alone through his mountain retreat. When the stream seems to end, he simply sits and watches clouds gather.",
      fit: "For loosening your grip on a route and allowing another view to appear.",
      source: "https://zh.wikisource.org/zh/%E5%85%A8%E5%94%90%E8%A9%A9/%E5%8D%B7126"
    }
  ]
};

const moodNames = { beginning: "A quiet beginning", missing: "Missing someone", season: "A change of season", courage: "A moment of courage", lettinggo: "Letting go" };
const form = document.querySelector("#verse-form");
const imageElement = document.querySelector("#verse-image");
const photoInput = document.querySelector("#photo-input");
const uploadZone = document.querySelector("#upload-zone");
const uploadText = document.querySelector("#upload-text");
const uploadHint = document.querySelector("#upload-hint");
const removePhotoButton = document.querySelector("#remove-photo");
const dialog = document.querySelector("#context-dialog");
const aboutDialog = document.querySelector("#about-dialog");
let currentMood = "missing";
let currentIndex = 0;
let selectedPhotoUrl = null;
let selectedPhotoName = "";
let toastTimer;

function currentVerse() { return verses[currentMood][currentIndex]; }
function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2900);
}
function updateVerse() {
  const verse = currentVerse();
  document.querySelector("#verse-eyebrow").textContent = verse.eyebrow;
  document.querySelector("#english-verse").textContent = `“${verse.english}”`;
  document.querySelector("#chinese-verse").textContent = verse.chinese;
  document.querySelector("#verse-attribution").innerHTML = "";
  const attribution = document.querySelector("#verse-attribution");
  attribution.append(document.createTextNode(verse.author), separator(), document.createElement("cite"), separator(), document.createTextNode(verse.period));
  attribution.querySelector("cite").textContent = verse.work;
  document.querySelector("#art-caption").textContent = moodNames[currentMood].toUpperCase();
}
function separator() { const span = document.createElement("span"); span.textContent = "·"; return span; }
function openContext() {
  const verse = currentVerse();
  document.querySelector("#dialog-title").textContent = `${verse.author} · ${verse.work}`;
  document.querySelector("#dialog-original").textContent = verse.chinese;
  document.querySelector("#dialog-rendering").textContent = `“${verse.english}”`;
  document.querySelector("#dialog-context").textContent = verse.context;
  document.querySelector("#dialog-fit").textContent = verse.fit;
  document.querySelector("#dialog-source").href = verse.source;
  dialog.showModal();
}
function usePhoto(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) { showToast("Please choose an image file."); return; }
  if (file.size > 20 * 1024 * 1024) { showToast("Please choose a photo under 20 MB."); photoInput.value = ""; return; }
  if (selectedPhotoUrl) URL.revokeObjectURL(selectedPhotoUrl);
  selectedPhotoUrl = URL.createObjectURL(file);
  selectedPhotoName = file.name;
  imageElement.src = selectedPhotoUrl;
  imageElement.alt = "Your selected photo";
  uploadZone.classList.add("has-photo");
  uploadText.textContent = selectedPhotoName;
  uploadHint.textContent = "Previewed only in this browser";
  removePhotoButton.hidden = false;
  showToast("Photo added. It stays on your device.");
}
function removePhoto() {
  if (selectedPhotoUrl) URL.revokeObjectURL(selectedPhotoUrl);
  selectedPhotoUrl = null;
  selectedPhotoName = "";
  photoInput.value = "";
  imageElement.src = "./assets/river-dusk.jpg";
  imageElement.alt = "Watercolor of a quiet river at dusk, with a figure beneath a tree";
  uploadZone.classList.remove("has-photo");
  uploadText.textContent = "Choose a photo from this moment";
  uploadHint.textContent = "It stays on your device";
  removePhotoButton.hidden = true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const chosenMood = new FormData(form).get("mood");
  if (chosenMood !== currentMood) { currentMood = chosenMood; currentIndex = 0; }
  updateVerse();
  document.querySelector("#result-actions").hidden = false;
  if (window.matchMedia("(max-width: 760px)").matches) document.querySelector(".verse-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});
photoInput.addEventListener("change", () => usePhoto(photoInput.files[0]));
removePhotoButton.addEventListener("click", removePhoto);
document.querySelector("#context-button").addEventListener("click", openContext);
document.querySelector("#about-button").addEventListener("click", () => aboutDialog.showModal());
document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector("#close-about").addEventListener("click", () => aboutDialog.close());
aboutDialog.addEventListener("click", (event) => { if (event.target === aboutDialog) aboutDialog.close(); });
document.querySelector("#another-button").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % verses[currentMood].length;
  updateVerse();
});
document.querySelector("#copy-button").addEventListener("click", async () => {
  const verse = currentVerse();
  const words = `“${verse.english}”\n${verse.chinese}\n— ${verse.author}, ${verse.work}\nSource: ${verse.source}`;
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
    await Promise.race([
      navigator.clipboard.writeText(words),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Clipboard timed out")), 1500))
    ]);
    showToast("Words and source copied.");
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = words;
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.append(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    showToast(copied ? "Words and source copied." : "Copy is unavailable in this browser.");
  }
});

function drawCover(ctx, image, x, y, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const cropW = width / scale, cropH = height / scale;
  ctx.drawImage(image, (image.naturalWidth - cropW) / 2, (image.naturalHeight - cropH) / 2, cropW, cropH, x, y, width, height);
}
function wrapText(ctx, words, maxWidth) {
  const lines = []; let line = "";
  for (const word of words.split(" ")) {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width > maxWidth && line) { lines.push(line); line = word; }
    else line = candidate;
  }
  if (line) lines.push(line);
  return lines;
}
async function downloadCard() {
  const verse = currentVerse();
  const image = new Image();
  image.src = imageElement.src;
  try { await image.decode(); } catch { showToast("The photo could not be used. Try another image."); return; }
  await document.fonts.ready;
  const canvas = document.createElement("canvas"); canvas.width = 1080; canvas.height = 1440;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f8f6f1"; ctx.fillRect(0, 0, 1080, 1440);
  drawCover(ctx, image, 0, 0, 1080, 625);
  ctx.fillStyle = "#9d5141"; ctx.font = "700 22px 'DM Sans', Arial"; ctx.fillText(verse.eyebrow, 75, 705);
  let fontSize = 62, lines;
  do { ctx.font = `${fontSize}px Newsreader, Georgia, serif`; lines = wrapText(ctx, verse.english, 930); fontSize -= 2; } while (lines.length > 5 && fontSize > 42);
  ctx.fillStyle = "#252721";
  let y = 780;
  lines.forEach((line) => { ctx.fillText(line, 75, y); y += 73; });
  ctx.fillStyle = "#62675e"; ctx.font = "36px 'Noto Serif SC', 'Songti SC', serif";
  ctx.fillText(verse.chinese, 75, Math.min(1195, y + 34), 930);
  ctx.fillStyle = "#797d75"; ctx.font = "24px 'DM Sans', Arial";
  ctx.fillText(`${verse.author} · ${verse.work}`, 75, 1293, 930);
  ctx.strokeStyle = "#d5d1c7"; ctx.beginPath(); ctx.moveTo(75, 1340); ctx.lineTo(1005, 1340); ctx.stroke();
  ctx.fillStyle = "#72766d"; ctx.font = "24px Newsreader, Georgia, serif"; ctx.fillText("Still & Verse", 75, 1385);
  ctx.textAlign = "right"; ctx.font = "18px 'DM Sans', Arial"; ctx.fillText("Original text: zh.wikisource.org", 1005, 1385);
  canvas.toBlob((blob) => {
    if (!blob) { showToast("Could not create the card."); return; }
    const link = document.createElement("a"); const url = URL.createObjectURL(blob);
    link.href = url; link.download = `still-and-verse-${currentMood}.png`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Card downloaded.");
  }, "image/png");
}
document.querySelector("#download-button").addEventListener("click", downloadCard);
window.addEventListener("beforeunload", () => { if (selectedPhotoUrl) URL.revokeObjectURL(selectedPhotoUrl); });
