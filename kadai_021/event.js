// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // 2000ミリ秒（2秒）後にテキストを変更するための非同期処理を設定
  setTimeout(() => {

    // textというidを持つHTML要素を取得し、定数に代入する
    const text = document.getElementById('text');

    // テキストに「ボタンをクリックしました」というテキストを設定する
    text.textContent = 'ボタンをクリックしました';

  }, 2000); // 遅延時間を2000ミリ秒（2秒）に設定
});