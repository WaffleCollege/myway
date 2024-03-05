import React, { useState }  from 'react'
import "./Post.css";
import {Button} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageUpload from './ImageUpload';
import TagInputComponent from './Tag';
import {db} from "../../firebase";
import { collection, addDoc } from 'firebase/firestore';
//import {collection,getDocs} from "firebase"
//import { collection, addDoc } from "firebase/firestore"; 

function Post() {
  //firebase連携
  const[posts,setPosts]=useState([]);
  const postData = collection(db,"posts");

  //inputタグに書いたものがfirebaseに格納されるように
   const[IntroduceMessage,setIntroduceMessage]=useState("");
   const[SpotIntroduceMessage,setSpotIntroduceMessage]=useState("");
   const[SpotNameMessage,setSpotNameMessage]=useState([]);
   //const[TagMessage,setTagMessage]=useState("");
   const[TitleMessage,setTitleMessage]=useState("");
   const [imageArray, setImageArray] = useState([]);
   

   //投稿ボタンを押すことで格納される
   const sendRoute=(e)=>{
    //firebaseのデータベースにデータ追加する
    e.preventDefault();

    //SpotNameMessageとSpotIntroduceMessageの配列作成
    const spotNameFromCourses = courses.map(course => course.spot);
    const updatedSpotNameMessage = [SpotNameMessage, ...spotNameFromCourses];
    
    const spotIntroduceFromCourses = courses.map(course => course.introduce);
    // const newSpotIntroduce=SpotIntroduceMessage;
    const updatedSpotIntroduceMessage = [SpotIntroduceMessage, ...spotIntroduceFromCourses];

      addDoc(collection(db,"posts"),{
        introduce: IntroduceMessage,
        spotIntroduce:updatedSpotIntroduceMessage,
        spotName:updatedSpotNameMessage,
        title:TitleMessage,
    });
    
   }

  const [courses, setCourses] = useState([]);

  const addCourse = () => {
    //setCoursesでuseStateで作られたcourses配列を更新する。...coursesで配列を展開し、spot~を追加。
    setCourses([...courses, { spot: '', introduce: '', image: '' }]);
  };

  const handleSpotChange = (index, value) => {
    
  const newCourses = [...courses];
  //newCourses配列にspotキーの値を代入
  //valueには下のインプットに文字を入力したときに取得されるe.target.value
  newCourses[index].spot = value;
  //coursesが更新されてaddCourseが呼び出されたら
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
            <input placeholder="入力してください" type = "text" onChange={(e)=>setTitleMessage(e.target.value)}/>
        </div>
        <div className="form_introduce">
            <h2>紹介文</h2>
            <input placeholder="入力してください" type = "text" onChange={(e)=>setIntroduceMessage(e.target.value)}/>
        </div>
        <div className="form_tag">
            <h2>タグ</h2>
            <TagInputComponent/>
         
        </div>
        <div className="form_spotName">
            <h2>スポット</h2>
            <input placeholder="入力してください" type = "text" onChange={(e)=>setSpotNameMessage(e.target.value)}/>
        </div>
        <div className="form_spotIntroduce">
            <h2>説明</h2>
            <input placeholder="入力してください" type = "text"  onChange={(e)=>setSpotIntroduceMessage(e.target.value)}/>
        </div>
        <div className="form_image">
            <h2>画像</h2>
            {/*ボタンを押したら画像のアップロードができる*/}
            <ImageUpload setImageArray={setImageArray}/>
            
            
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
            </div>
            
            {/* アップロード画像の部分 */}
            <ImageUpload value={course.introduce}
                onChange={(e) => handleImageChange(index, e.target.value)} />
          </div>
      ))}
       <div className="addCourse-section">
          <Button className="postBox_addCourse" onClick={addCourse}><AddCircleOutlineIcon className="custom-icon-color"/>
          </Button>
          <p>モデルコース追加</p>
        </div>
        {/* 投稿ボタンを押すことで格納される */}
            <button variant="outlined" className="postBox_postButton" type="submit" onClick={sendRoute}>
            <p>投稿</p>
          </button>
        </form>
     </div>
       
  );
}

export default Post
