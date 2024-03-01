import React, { useState }  from 'react'
import "./Post.css";
import {Button} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageUpload from './ImageUpload';
import TagInputComponent from './Tag';


function Post() {
 
  const [courses, setCourses] = useState([]);

  const addCourse = () => {
    setCourses([...courses, { spot: '', introduce: '', image: '' }]);
  };

  const handleSpotChange = (index, value) => {
    const newCourses = [...courses];
    newCourses[index].spot = value;
    setCourses(newCourses);
  };

  const handleIntroduceChange = (index, value) => {
    const newCourses = [...courses];
    newCourses[index].introduce = value;
    setCourses(newCourses);
  };

  const handleImageChange = (index, value) => {
    const newCourses = [...courses];
    newCourses[index].image = value;
    setCourses(newCourses);
  };
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
            
            <TagInputComponent/>
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
            <ImageUpload/>
            
        </div>
        
      </form>
      <form>
      {courses.map((course, index) => (
          <div key={index} className="additionalCourse">
            <div className="form_spotName">
              <h2>スポット</h2>
              <input
                placeholder="入力してください"
                type="text"
                value={course.spot}
                onChange={(e) => handleSpotChange(index, e.target.value)}
              />
            </div>
            <div className="form_spotIntroduce">
              <h2>説明</h2>
              <input
                placeholder="入力してください"
                type="text"
                value={course.introduce}
                onChange={(e) => handleIntroduceChange(index, e.target.value)}
              />
            </div>
            <div className="form_image">
              <h2>画像</h2>
              <input
                placeholder="画像"
                type="text"
                value={course.image}
                onChange={(e) => handleImageChange(index, e.target.value)}
              />
            </div>
            
            {/* アップロード画像の部分 */}
            <ImageUpload />
          </div>
      ))}
       <div className="addCourse-section">
          <Button className="postBox_addCourse" onClick={addCourse}><AddCircleOutlineIcon className="custom-icon-color"/>
          </Button>
          <p>モデルコース追加</p>
        </div>
            <button variant="outlined" className="postBox_postButton" type="submit">
            <p>投稿</p>
          </button>
        </form>
      </div>
     
      
   
  );
}

export default Post
