// 要素取得
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');

// 各カードにクリックイベントを設定
cards.forEach(card => {
  card.addEventListener('click', () => {
    // data-detail 属性から詳細コメントを取得
    const detail = card.dataset.detail;

    // モーダルに表示
    modalText.textContent = detail;
    modal.style.display = 'block';
  });
});

// モーダルの背景をクリックしたら閉じる
modal.addEventListener('click', (event) => {
  // 中身ではなく背景がクリックされた場合のみ閉じる
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
