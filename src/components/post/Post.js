import React, { useState }  from 'react'
import "./Post.css";
import {Button} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageUpload from './ImageUpload';
import TagInputComponent from './Tag';
import {db} from "../../firebase";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
//import {collection,getDocs} from "firebase"
//import { collection, addDoc } from "firebase/firestore"; 

function Post() {
  //firebase連携
  const[posts,setPosts]=useState([]);
  const postData = collection(db,"posts");
  // getDocs(postData).then((querySnapshot)=>{
  //   setPosts(querySnapshot.docs.map((doc)=>doc.data()));
  // });

  //inputタグに書いたものがfirebaseに格納されるように
   const[IntroduceMessage,setIntroduceMessage]=useState("");
   const[SpotIntroduceMessage,setSpotIntroduceMessage]=useState("");
   const[SpotNameMessage,setSpotNameMessage]=useState("");
   //const[TagMessage,setTagMessage]=useState("");
   const[TitleMessage,setTitleMessage]=useState("");
   //const[routeImage,setRoutetImage]=useState(""); 

   //投稿ボタンを押すことで格納される
   const sendRoute=(e)=>{
    //firebaseのデータベースにデータ追加する
    e.preventDefault();
    // const spotNameFromCourses= courses.map(course=>course.spot);
    const spotNameFromCourses = courses.map((course, index) => {
      if (index === courses.length - 1) {
          return course.spot;
      } else {
          return null; // 最後の要素以外は null を返すか、適切な処理を行う
      }
  });
  
    const updatedSpotNameMessage=[...SpotNameMessage,...spotNameFromCourses];

      addDoc(collection(db,"posts"),{
        //image:routeImage,
        introduce: IntroduceMessage,
        spotIntroduce:SpotIntroduceMessage,
        spotName:updatedSpotNameMessage,
        //.arrayUnion(addCourse),
        //tag:TagMessage,
        title:TitleMessage,
    });
    
      // courses.forEach((course,index)=>{
      //     addDoc(collection(db,"posts"),{
      //       //spotIntroduce:course.spot,
      //       spotName:course.spot

      //     });
      //   })
    
   }

  const [courses, setCourses] = useState([]);

  const addCourse = () => {
    //setCoursesでuseStateで作られたcourses配列を更新する。...coursesで配列を展開し、spot~を追加。
    setCourses([...courses, { spot: '', introduce: '', image: '' }]);
  };

  const handleSpotChange = (index, value) => {
    setCourses(prevCourses => {
        const updatedCourses = [...prevCourses];
        updatedCourses[0] = { ...updatedCourses[0], spot: value };  // 一つ目のコースの spot プロパティを更新
        return updatedCourses;
    });
};



  const handleIntroduceChange = (index, value) => {
 
  const newCourses = [...courses];
  newCourses[index].introduce = value;
  setCourses(newCourses);
  // setSpotIntroduceMessage(prevSpotIntroduceMessage => {
  //   const newSpotIntroduceMessage = [...prevSpotIntroduceMessage]; // 現在の spotName 配列をコピー
  //   newSpotIntroduceMessage[index] = value; // インデックス番号の位置に新しい値を設定
  //   console.log("New spotNameMessage:", newSpotIntroduceMessage);
  //   return newSpotIntroduceMessage.reverse();;
  // });
  };

  const handleImageChange = (index, value) => {
  const newCourses = [...courses];
  newCourses[index].image = value;
  setCourses(newCourses);
  //   setMessage(prevSpotNameMessage => {
  //     const newSpotNameMessage = [...prevSpotNameMessage]; // 現在の spotName 配列をコピー
  //     newSpotNameMessage[index] = value; // インデックス番号の位置に新しい値を設定
  //     console.log("New spotNameMessage:", newSpotNameMessage);
  //     return newSpotNameMessage.reverse();
  //   });
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
            <input
    placeholder="入力してください"
    type="text"
    value={courses[0]?.spot || ''}  // 一つ目のスポットの入力値を表示する
    onChange={(e) => handleSpotChange(0, e.target.value)}  // handleSpotChange 関数を呼び出してコースの spot プロパティを更新する
/>
        </div>
        <div className="form_tag">
            <h2>タグ</h2>
            <TagInputComponent/>
         
        </div>
        <div className="form_spotName">
            <h2>スポット</h2>
            <input placeholder="入力してください" type = "text" onChange={(e)=>setSpotNameMessage(e.target.value)} />
            
        </div>
        <div className="form_spotIntroduce">
            <h2>説明</h2>
            <input placeholder="入力してください" type = "text"  onChange={(e)=>setSpotIntroduceMessage(e.target.value)}/>
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
