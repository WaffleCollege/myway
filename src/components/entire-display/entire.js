import React from "react";
import Txt from "./input"
import "./entire.css"
import BoxSystemProps from "./postdisplay";
// import App from "../../App"

function Entire (){
   
    return (
        <>
        <div className="whole">
        <div className="explore">
            <Txt />
        </div>
        <div className="buttons">
                {/* <App /> */}
            </div>
        <div className="displayimages">
            <BoxSystemProps/>
            <BoxSystemProps/>
            <BoxSystemProps/>
            <BoxSystemProps/>
            <BoxSystemProps/>
            <BoxSystemProps/>

        </div>
        </div>
            </>

    )
}


export default Entire