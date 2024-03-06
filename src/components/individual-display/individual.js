import React from 'react';
import Modal from 'react-modal'; // Modalをインポート
/*cssのインポート*/
import "./individual.css";

/*muiのインポート*/
import Button from '@mui/material/Button';

/*ReactIconsのインポート*/
import { FaMapMarkerAlt } from "react-icons/fa";

Modal.setAppElement('#root');

const Individual = ({ post, isOpen, onRequestClose }) => { // propsを受け取るように修正
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`Individual Post Modal - ${post.id}`}
    >
    <div className="container"> 
      <div className="indiv_intro_box">        
          <h1>{post.title}</h1>
        <div className="indiv_introduce">
          <h2>{post.introduce}</h2>
        </div>
        <div className="indiv_tag">
            <h3>{post.tag}</h3>
        </div>
      </div>
     <div className="indiv_course_box">           
          <ul className='timeline'>
            {post.spotName && Object.entries(post.spotName).map(([spotKey, spot]) => (
               <li key={spotKey}>
               <div className='timeline_content'>
                 <div className='flex'>
                   <figure className='mappin_img'>
                     <FaMapMarkerAlt />
                   </figure>
                   <div className="indiv_spotName">
                     <h3>{spot}</h3>
                   </div>
                 </div>
                 
                {post.spotIntroduce && post.spotIntroduce[spotKey] && (
                        <div className="indiv_spotIntroduce">
                          <h3>{post.spotIntroduce[spotKey]}</h3>
                        </div>                      
                      )}
                      
                      
                <div className="indiv_image">
                        <img src={post.image[spotKey]} alt={`Spot ${spotKey}`} />
                      </div>
                                           
                </div>
                
               
             </li> 
            ))}
            
          </ul>        
        </div>
    </div>
    </Modal>
  );
};

export default Individual;
