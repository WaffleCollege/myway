import { Button } from "@mui/material";
import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "./ImageUpload.css";

const ImageUpload = () => {

    {/*firebaseに画像を投稿したものを保存する。firebaseの環境構築終わった後に接続*/}
    const OnFileUploadToFirebase=()=>{

    };

    return (
      <div className="outerBox">
        <Button className="postBox_addImage"><AddPhotoAlternateIcon className="custom-icon"/>
        <input 
          className="imageUploadInput" 
          type="file" 
          onChange={OnFileUploadToFirebase} 
          accept=".png .jpeg .jpg" />
        </Button>
       
      </div>
    );
  };
  export default ImageUpload;