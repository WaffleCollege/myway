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
  const [currentPostId, setCurrentPostId] = useState(null);

  /*setPosts関数宣言*/
  const [posts, setPosts] = useState({});

  const [modalStates, setModalStates] = useState({}); // モーダルの表示状態を管理
  
  useEffect(() => {
    const fetchData = async () => {
      const postData = collection(db, 'posts');
      const querySnapshot = await getDocs(postData);      
      const postsData = Object.fromEntries(querySnapshot.docs.map((doc, index) => [index.toString(), { ...doc.data(), id: doc.id }]));
      setPosts(postsData);      
      setModalStates(Object.fromEntries(Object.keys(postsData).map((key) => [key, false])));
    ;

    {/* モーダルの初期状態を設定*/}
    const initialModalStates = {};

  Object.keys(postsData).forEach((key) => {
    initialModalStates[key] = false;
  });
  setModalStates(initialModalStates);

  if (Object.keys(postsData).length > 0) {
    setCurrentPostId('0');
  }
};

    fetchData();
  }, []);

const toggleModal = (key) => {
  setModalStates((prevStates) => ({
    ...prevStates,
    [key]: !prevStates[key],
  }));
};

  return (
    <div className="container">      
       <main>            
        {Object.entries(posts).map(([key, post]) => (
          <div key={key}>
                  
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
            {post.spotName && Object.values(post.spotName).map((spot) => (
               <li key={spot.name}>
               <div className='timeline_content'>
                 <div className='flex'>
                   <figure className='mappin_img'>
                     <FaMapMarkerAlt />
                     </figure>
                   <div className="indiv_spotName">
                     <h3>{spot.name}</h3>
                     </div>
                 </div>
                 
                 {spot.introduce && (
                        <div className="indiv_spotIntroduce">
                          <h3>{spot.introduce}</h3>
                        </div>
                      )}
                  
                  {/*
                  <div className="indiv_image">
                   <img src={post.img}/>
                   </div>
                  */}                                  
                </div>
                
               
             </li> 
            ))}
            
          </ul>        
        </div>

        
        
        </div>
          ))}
         
      </main>
      
        
        
    </div> 
  )
}


export default Individual