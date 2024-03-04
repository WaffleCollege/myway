/*Reactのインポート*/
import React, { useEffect, useState } from 'react'

/*cssのインポート*/
import "./individual.css";

/*muiのインポート*/
import Button from '@mui/material/Button';

/*ReactIconsのインポート*/
import { FaMapMarkerAlt } from "react-icons/fa";

/*Firebaseのインポート*/
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot } from 'firebase/firestore';
import { db } from "../../firebase";
import { doc, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const Individual = () => {
  /*postIdを格納するstate*/
  const [postId, setPostId] = useState('');

  /*setPosts関数宣言*/
  const [posts, setPosts] = useState([]);

  /*postsのデータ取得*/
  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((querySnapshot) => {
    setPosts(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id })));
  });

  /*リアルタイムで取得*/
  onSnapshot(postData, (post) => {
    setPosts(post.docs.map((doc) => ({...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="container">      
       <main>
        個別閲覧画面
        {/*postデータ表示
        {posts.map((post) => (
        <div key={post.id}>          
        <div className="indiv_intro_box">
          <div className="indiv_title">
            <h1>{post.title}</h1>
            </div>
          <div className="indiv_introduce">
            <h2>{post.introduce}</h2>
            </div>
          <div className="indiv_tag">
            <h3>{post.tag}</h3>
            </div>
        </div>
     
        <div className="indiv_course_box">
          <ul className='timeline'>
            {post.spotName.map((spot, index) => (
               <li key={index}>
               <div className='timeline_content'>
                 <div className='flex'>
                   <figure className='mappin_img'>
                     <FaMapMarkerAlt />
                     </figure>
                   <div className="indiv_spotName">
                     <h3>{spot}</h3>
                     </div>
                 </div>
           
                 <div className="indiv_spotIntroduce">
                   <h3>{post.spotIntroduce[index]}</h3>
                   </div>
                 <div className="indiv_image">
                   <img src={post.img}/>
                   </div>
                </div>
               
             </li> 
            ))}
            
          </ul>
          
        </div>
        </div>
          ))}
         */}
      </main>
      
        
        
    </div> 
  )
}


export default Individual