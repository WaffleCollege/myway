import { Button } from "@mui/material";
import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "./ImageUpload.css";
import {storage} from "../../firebase";
import {ref, uploadBytes} from "firebase/storage";

//const[routeImage,setRoutetImage]=useState([]); 
const ImageUpload = () => {

    /*firebaseに画像を投稿したものを保存する。firebaseの環境構築終わった後に接続*/
    const OnFileUploadToFirebase=(e)=>{
        const file=e.target.files[0];
        const storageRef=ref(storage,"image/"+file.name);
        
        uploadBytes(storageRef,file).then((snapshot)=>{
           console.log("Uploaded a blob or file!")
        });
     };

    return (
      <div className="outerBox">
        
        <label htmlFor="fileInput">
        <Button className="postBox_addImage">
          <AddPhotoAlternateIcon className="custom-icon"/>
          </Button>
          </label>
          <input 
          className="imageUploadInput" 
          type="file" 
          onChange={OnFileUploadToFirebase} 
          accept=".png, .jpeg, .jpg"
          
          />
        
       
      </div>
    );
   };
  export default ImageUpload;