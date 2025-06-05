async function getWord(category) {
  try {
    const response = await fetch(`${category}.json`);
    const words = await response.json();
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];

    const jpSpan = document.getElementById('jp');
    const pronSpan = document.getElementById('pron');
    const krSpan = document.getElementById('kr');

    // 기존 애니메이션 클래스 제거 (혹시 이전 애니메이션이 끝나지 않았을 경우 대비)
    jpSpan.classList.remove('word-animation');
    pronSpan.classList.remove('word-animation');
    krSpan.classList.remove('word-animation');

    // 단어 내용 업데이트 전에 잠시 내용을 비워서 깜빡이는 효과를 줄 수 있음 (선택 사항)
    // jpSpan.textContent = '';
    // pronSpan.textContent = '';
    // krSpan.textContent = '';

    // DOM 업데이트를 브라우저가 처리할 시간을 줍니다 (애니메이션 재시작을 위해 중요).
    // setTimeout을 사용하여 클래스 추가를 다음 이벤트 루프 틱으로 미룹니다.
    setTimeout(() => {
      jpSpan.textContent = word.jp_word;
      pronSpan.textContent = word.jp_pronunciation;
      krSpan.textContent = word.ko_meaning;

      // 애니메이션 클래스 추가
      jpSpan.classList.add('word-animation');
      pronSpan.classList.add('word-animation');
      krSpan.classList.add('word-animation');

      // 애니메이션이 끝난 후 클래스 제거 (다음 애니메이션을 위해 초기 상태로)
      jpSpan.addEventListener('animationend', () => {
        jpSpan.classList.remove('word-animation');
      }, { once: true }); // 한 번만 실행되도록
      pronSpan.addEventListener('animationend', () => {
        pronSpan.classList.remove('word-animation');
      }, { once: true });
      krSpan.addEventListener('animationend', () => {
        krSpan.classList.remove('word-animation');
      }, { once: true });

    }, 50); // 50ms 정도의 딜레이를 주어 DOM 변경이 확실히 반영되도록 합니다.
            // 이 딜레이는 애니메이션 재시작 트릭을 위해 필요합니다.

  } catch (error) {
    console.error("단어 불러오기 실패:", error);
  }
}
