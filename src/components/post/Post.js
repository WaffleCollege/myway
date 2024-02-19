import React from 'react'
import "./Post.css";
import {Button} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageUpload from './ImageUpload';

function Post() {
  return (
    <div className="postBox">
      <form>
        <div className="form_title">
            <h2>タイトル</h2>
            <input placeholder="入力してください" type = "text"></input>
        </div>
        <div className="form_introduce">
            <h2>紹介文</h2>
            <input placeholder="入力してください" type = "text"></input>
        </div>
        <div className="form_tag">
            <h2>タグ</h2>
            {/*タグ追加機能実行する*/}
            <input placeholder="入力してください" type = "text"></input>
        </div>
        <div className="form_spotName">
            <h2>スポット</h2>
            <input placeholder="入力してください" type = "text"></input>
        </div>
        <div className="form_spotIntroduce">
            <h2>説明</h2>
            <input placeholder="入力してください" type = "text"></input>
        </div>
        <div className="form_image">
            <h2>画像</h2>
            {/*ボタンを押したら画像のアップロードができる*/}
            <Button className="postBox_addImage"><AddPhotoAlternateIcon/></Button>
            {/*postBox_addImageができたら以下のinputは消す*/}
            <ImageUpload/>
            <input className="imageInput" placeholder="画像"></input>
        </div>
        
      </form>
      <div className="addCourse-section">

       {/*ボタンを押したらスポットすぽっと、説明、画像が出てくる*/}
      <Button className="postBox_addCourse"><AddCircleOutlineIcon /></Button>
      <p>モデルコースを追加</p>
      </div>
      <Button variant="outlined" className="postBox_postButton" type="submit">投稿</Button>
      
      
    </div>
  );
}

export default Post
