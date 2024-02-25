
import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  // ユーザー名とプロフィール画像の状態
  const [userName, setUserName] = useState('登録されたユーザー名');
  const [profileImage, setProfileImage] = useState(null);
  // いいねされた投稿の状態（ここではサンプルとして空の配列を使用）
  const [likedPosts, setLikedPosts] = useState([]);

  // プロフィール画像のアップロードハンドラ
  const handleProfileImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        {/* プロフィール画像を表示 */}
        <div className="profile-image">
          {profileImage ? <img src={profileImage} alt="Profile" /> : <p>画像なし</p>}
          <input type="file" onChange={handleProfileImageUpload} accept="image/*" />
        </div>
        {/* ユーザー名を表示 */}
        <h1>{userName}</h1>
      </div>
      <div className="liked-posts">
        {/* ここにいいねされた投稿をリスト表示 */}
        {likedPosts.map((post, index) => (
          <div key={index} className="post">
            {/* 投稿の内容を表示 */}
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;