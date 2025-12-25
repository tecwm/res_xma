// クリスマスツリー要素を取得（電飾演出用）
const tree = document.getElementById('tree');

// クリック演出（パーティー）ボタンを取得
const btn  = document.getElementById('partyBtn');

// 再生するクリスマス音源を取得
const audio = document.getElementById('xmasSound');

// パーティー演出がONかどうかの状態管理
let isParty = false;

// パーティーボタンがクリックされたときの処理
btn.addEventListener('click', async () => {

  // ON / OFF を切り替える
  isParty = !isParty;

  // ===== パーティー演出 ON =====
  if (isParty) {

    // ツリーに party クラスを付与（CSSで電飾を光らせる）
    tree.classList.add('party');

    // ボタンの表示テキストを変更
    btn.textContent = '🎵 演出停止';

    try {
      // 音源を最初から再生
      audio.currentTime = 0;

      // 再生（※ブラウザの自動再生制限で失敗する場合あり）
      await audio.play();

    } catch (e) {
      // 音が鳴らなくても光演出は成立するためエラーは無視
      console.warn('Audio play was blocked:', e);
    }

  // ===== パーティー演出 OFF =====
  } else {

    // party クラスを削除（電飾停止）
    tree.classList.remove('party');

    // ボタンの表示テキストを元に戻す
    btn.textContent = '✨ クリック演出';

    // 音を停止し、再生位置をリセット
    audio.pause();
    audio.currentTime = 0;
  }
});


/* ================================
   ★ 雪ボタン（クリックで雪 ON / OFF）
   ================================ */

// 雪ボタン要素を取得
const snowBtn = document.getElementById('snowBtn');

// 雪が降っているかどうかの状態管理
let isSnowing = false;

// 雪ボタンがクリックされたときの処理
snowBtn.addEventListener('click', () => {

  // ON / OFF を切り替える
  isSnowing = !isSnowing;

  // ===== 雪 ON =====
  if (isSnowing) {

    // body に snowing クラスを付与（CSSで雪を降らせる）
    document.body.classList.add('snowing');

    // ボタン表示を変更
    snowBtn.textContent = '⛄ 雪を止める';

  // ===== 雪 OFF =====
  } else {

    // snowing クラスを削除（雪を止める）
    document.body.classList.remove('snowing');

    // ボタン表示を元に戻す
    snowBtn.textContent = '❄ 雪を降らす';
  }
});