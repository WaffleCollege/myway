import { Button } from "@mui/material";
import React,{useState}from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "./ImageUpload.css";
import {storage} from "../../firebase";
import {ref, uploadBytes,getDownloadURL} from "firebase/storage";

//const[routeImage,setRoutetImage]=useState([]); 
const ImageUpload = ({ setImageArray }) => {
    /*firebaseに画像を投稿したものを保存する。firebaseの環境構築終わった後に接続*/
    const OnFileUploadToFirebase = (e) => {
        const file=e.target.files[0];
        const randomDirectoryName = Math.random().toString(36).substring(2);
        const storageRef=ref(storage,randomDirectoryName+"/"+file.name);
        
        uploadBytes(storageRef,file).then((snapshot)=>{
           console.log("Uploaded a blob or file!");
           getDownloadURL(snapshot.ref)
           .then((url) => {
               console.log("File available at", url);
               // ここで取得したURLを使って、必要な処理を行う
               setImageArray(prevImageArray => [...prevImageArray, url]); 
           })
           .catch((error) => {
               console.error("Error getting download URL:", error);
           });
       })
       .catch((error) => {
           console.error("Error uploading file:", error);
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