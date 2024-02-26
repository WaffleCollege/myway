// React から useState フックをインポート
import { useState } from 'react';

export const Txt = () => {
  // 初期値: 空文字列 ''
  const [text, setText] = useState('検索');

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          // text ステートが持っている入力中テキストの値を value として表示
          value={text}
          // onChange イベント（＝入力テキストの変化）を text ステートに反映する
          onChange={(e) => setText(e.target.value)}
        />
        {/* <input type="submit" />   */}
      </form>

      {/* ↓ DOM のリアクティブな反応を見るためのサンプル */}
      <p>{text}</p>
      {/* ↑ あとで削除 */}
    </div>
  );
};

export default Txt