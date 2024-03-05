import React, { useState } from 'react';
import './User.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

// FavoriteButton を名前付きエクスポートに変更
export const FavoriteButton = () => {
  return (
    <div>
      <FavoriteIcon />
    </div>
  );
};

// ImageBox コンポーネント（変更なし）
const ImageBox = ({ imageUrl, caption, tags }) => {
  return (
    <div className="image-box">
      <img src={imageUrl} alt="Post" />
      <div className="image-caption">{caption}</div>
      <div className="image-tags">
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
      <div className="image-checkmark">✔</div>
    </div>
  );
};

// UserProfile コンポーネントをデフォルトエクスポートとして維持
const UserProfile = () => {
  // コンポーネントの実装は変更なし
};

export default UserProfile;
