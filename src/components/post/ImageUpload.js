import { Button } from "@mui/material";
import React, { useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "./ImageUpload.css";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ImageUpload = ({ onImageUploaded }) => {
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileUploadToFirebase = (e) => {
        const file = e.target.files[0];
        const storageRef = ref(storage, "image/" + file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log("Uploaded a blob or file!");
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    console.log("File available at", url);
                    setImageUrl(url); // 画像のURLをセット
                    onImageUploaded(url); // 親コンポーネントに画像のURLを渡す
                })
                .catch((error) => {
                    console.error("Error getting download URL:", error);
                });
        });
    };

    return (
        <div className="outerBox">
            <label htmlFor="fileInput">
                <Button className="postBox_addImage">
                    <AddPhotoAlternateIcon className="custom-icon" />
                </Button>
            </label>
            <input
                id="fileInput"
                className="imageUploadInput"
                type="file"
                onChange={handleFileUploadToFirebase}
                accept=".png, .jpeg, .jpg"
            />
        </div>
    );
};

export default ImageUpload;
