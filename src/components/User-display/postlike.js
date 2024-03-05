import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // グリッドシステムを使用するためのインポート
import "./entire.css";

export default function BoxSystemProps() {
  return (
    <Grid container spacing={2}> {/* グリッドコンテナを作成し、ボックス間のスペースを設定 */}
      { /* 複数のボックスをマップまたはループを使用して生成 */ }
      {[...Array(8)].map((_, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}> {/* レスポンシブなグリッドアイテム */}
          <Box className="boxes"
            height={200} // ボックスの高さ
            width={200} // ボックスの幅
            my={4} // マージンY
            display="flex" // フレックスボックスとして表示
            flexDirection="column" // 子要素を縦方向に配置
            alignItems="center" // 中央揃え
            justifyContent="center" // 中央揃え
            gap={1} // 子要素の間隔
            p={2} // パディング
            sx={{ border: '2px solid grey' }} // スタイル
          >
            {/* ここに画像を挿入 */}
            {/* ここにキャプションとハッシュタグを挿入 */}
            {/* ここにチェックマークを挿入 */}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
