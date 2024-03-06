import React, { useState } from 'react';
import '@pathofdev/react-tag-input/build/index.css';
import ReactTagInput from '@pathofdev/react-tag-input';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {db} from "../../firebase";

export const TagInputComponent = () => {
  const[posts,setPosts]=useState([]);
  const postData = collection(db,"posts");
  const[TagMessage,setTagMessage]=useState("");
  const [tags, setTags] = React.useState(["タグ1"])
  const handleTagChange = async (newTags) => {
    // 新しいタグが追加されたらFirebase Firestoreに保存する
    try {
       await addDoc(collection(db, "posts"), {
            tag: newTags
        });
        console.log("Tags added to post document");
    } catch (e) {
        console.error("Error adding tag: ", e);
    }

    // タグの状態を更新する
    setTags(newTags);
};
return (
    <ReactTagInput
        placeholder="入力してください"
        tags={tags}
        onChange={handleTagChange}
    />
);
};

export default TagInputComponent;