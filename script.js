async function getWord(category) {
  const response = await fetch(`data/${category}.json`);
  const words = await response.json();
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];

  document.getElementById('jp').textContent = word.jp;
  document.getElementById('pron').textContent = word.pronunciation;
  document.getElementById('kr').textContent = word.kr;
  document.getElementById('dict').textContent = word.definition;
}
