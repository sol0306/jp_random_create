async function getWord(category) {
  try {
    const response = await fetch(`${category}.json`);
    const words = await response.json();
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];

    document.getElementById('jp').textContent = word.jp_word;
    document.getElementById('pron').textContent = word.jp_pronunciation;
    document.getElementById('kr').textContent = word.ko_meaning;

    // "사전 뜻"은 생략하거나 비워두기
    //document.getElementById('dict').textContent = "";
  } catch (error) {
    console.error("단어 불러오기 실패:", error);
  }
}
