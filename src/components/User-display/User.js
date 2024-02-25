/*Reactのインポート*/
import React from 'react'


/*cssのインポート*/
import "./Individual.css";


/*BootStrapのインポート*/
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


/*ReactIconsのインポート*/
import { FaMapMarkerAlt } from "react-icons/fa";


const Individual = () => {
  return (
    <div className="individual">
      <div className="header">Header</div>
      <div className="indiv_intro_box">
        <div className="indiv_title">Title</div>
        <div className="indiv_introduce">Introduce</div>
        <div className="indiv_tag">Tag</div>
      </div>
     
      <div className="indiv_course_box">
        <div className="indiv_time">Time</div>
        <div className="indiv_spotName">Spot Name</div>
        <div className="indiv_spotIntroduce">Spot Introduce</div>
        <div className="indiv_image">Image</div>
      </div>


      <div className="back">Back</div>
      <div className="footer">Footer</div>
    </div>
  )
}


export default Individual