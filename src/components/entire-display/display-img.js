// uploadFileToFirebase.js
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const uploadFileToFirebase = (file) => {
    const storageRef = ref(storage, "image/" + file.name);
    
    return uploadBytes(storageRef, file);
};

export default uploadFileToFirebase;
