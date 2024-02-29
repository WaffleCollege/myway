/*Reactのインポート*/
import React from 'react'


/*cssのインポート*/
import "./individual.css";


/*muiのインポート*/
import Button from '@mui/material/Button';

/*ReactIconsのインポート*/
import { FaMapMarkerAlt } from "react-icons/fa";


const Individual = () => {
  return (
    <div className="container">      
      <main>
        <div className="indiv_intro_box">
          <div className="indiv_title">
            <h1>Title</h1>
            </div>
          <div className="indiv_introduce">
            <h2>Introduce</h2>
            </div>
          <div className="indiv_tag">
            <h3>Tag</h3>
            </div>
        </div>
     
        <div className="indiv_course_box">
          <ul className='timeline'>
            <li>
              <div className='timeline_content'>
                <div className='flex'>
                  <figure className='mappin_img'>
                    <FaMapMarkerAlt />
                    </figure>
                  <div className="indiv_spotName">
                    <h3>Spot Name</h3>
                    </div>
                </div>
          
                <div className="indiv_spotIntroduce">
                  <h3>Spot Introduce</h3>
                  </div>
                <div className="indiv_image">
                  *Image*
                  <img src=""/>
                  </div>
               </div>
              
            </li>
          </ul>
          
        </div>
      </main>      
    </div>
  )
}


export default Individual