import { Button } from "@mui/material";
import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ImageUpload = () => {
    const OnFileUploadToFirebase=()=>{

    };
    return (
      <div className="outerBox">
        <div className="title">
       
      </div>
        <div className="imageUplodeBox">
          <div className="imageLogoAndText">
          
            <p>ここにドラッグ＆ドロップしてね</p>
          </div>
          //インプットタグに変更があった時に画像をアップロードする
          <input className="imageUploadInput" multiple name="imageURL" type="file" onChange={OnFileUploadToFirebase} accept=".png .jpeg .jpg" />
        </div>
        <p>または</p>
        <Button className="postBox_addImage"><AddPhotoAlternateIcon/><input className="imageUploadInput" type="file" onChange={OnFileUploadToFirebase} accept=".png .jpeg .jpg" />
        </Button>
      </div>
    );
  };
  export default ImageUpload;