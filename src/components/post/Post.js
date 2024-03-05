import React, { useState }  from 'react'
import "./Post.css";
import {Button} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {storage} from "../../firebase";
//import ImageUpload from './ImageUpload';
import TagInputComponent from './Tag';
import {db} from "../../firebase";
import {ref, uploadBytes,getDownloadURL} from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';

function Post() {

    //inputタグに書いたものがfirebaseに格納されるように
    const[IntroduceMessage,setIntroduceMessage]=useState("");
    const[SpotIntroduceMessage,setSpotIntroduceMessage]=useState([]);
    const[SpotNameMessage,setSpotNameMessage]=useState([]);
    //const[TagMessage,setTagMessage]=useState("");
    const[TitleMessage,setTitleMessage]=useState("");
    const [imageArray, setImageArray] = useState([]);
  
        /*firebaseに画像を投稿したものを保存する。firebaseの環境構築終わった後に接続*/
        // const OnFileUploadToFirebase = (e) => {
        //     const file=e.target.files[0];
        //     //const randomDirectoryName = Math.random().toString(36).substring(2);
        //     const storageRef=ref(storage,'path/to/file');
            
        //     uploadBytes(storageRef,file).then((snapshot)=>{
        //        console.log("Uploaded a blob or file!");
        //        getDownloadURL(snapshot.ref)
        //        .then((url) => {
        //            console.log("File available at", url);
        //            // ここで取得したURLを使って、必要な処理を行う
        //            setImageArray(prevImageArray => [...prevImageArray, url]); 
        //        })
        //        .catch((error) => {
        //            console.error("Error getting download URL:", error);
        //        });
        //    })
        //    .catch((error) => {
        //        console.error("Error uploading file:", error);
        //    });
           
        //  };

  //firebase連携
  // const[posts,setPosts]=useState([]);
  // const postData = collection(db,"posts");


   //投稿ボタンを押すことで格納される
   const sendRoute=(e)=>{
    //firebaseのデータベースにデータ追加する
    e.preventDefault();

    //SpotNameMessageとSpotIntroduceMessageの配列作成
    const spotNameFromCourses = courses.map(course => course.spot);
    const updatedSpotNameMessage = [SpotNameMessage, ...spotNameFromCourses];

    const newSpotObj={};
    updatedSpotNameMessage.forEach((course,index)=>{
      newSpotObj[index] = course;
    });
    const spotIntroduceFromCourses = courses.map(course => course.introduce);
    const updatedSpotIntroduceMessage = [SpotIntroduceMessage, ...spotIntroduceFromCourses];

    const newSpotIntroObj={};
    updatedSpotIntroduceMessage.forEach((courseIntro,index)=>{
      newSpotIntroObj[index] = courseIntro;
    });

    const imageFromCourses=courses.map(course=>course.image);
    const updatedImage=[imageArray, ...imageFromCourses];

    const newImageObj={};
    updatedImage.forEach((courseImage,index)=>{
      newImageObj[index] = courseImage;
    });

      addDoc(collection(db,"posts"),{
        introduce: IntroduceMessage,
        spotIntroduce:newSpotIntroObj,
        image:newImageObj,
        spotName:newSpotObj,
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
            <div className="outerBox">
        
        <label htmlFor="fileInput">
        <Button className="postBox_addImage">
          <AddPhotoAlternateIcon className="custom-icon"/>
          </Button>
          </label>
          
          <input 
          className="imageUploadInput" 
          type="file" 
          onChange={(e) => setImageArray(e.target.value)}
          accept=".png, .jpeg, .jpg"
          />
        
       
      </div>
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
            <div className="outerBox">
        
        
        <Button className="postBox_addImage">
          <AddPhotoAlternateIcon className="custom-icon"/>
          </Button>
          
            
            <input 
          className="imageUploadInput" 
          type="file" 
          value={course.image}
                onChange={(e) => handleImageChange(index, e.target.value)}
          accept=".png, .jpeg, .jpg"
          />
        
          </div>
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

export default Post;
  

