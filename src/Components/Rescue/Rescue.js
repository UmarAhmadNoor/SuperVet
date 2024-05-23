import React from "react";
import "./Rescue.css";

const Rescue = () => {
  return (
    <>
      <div className="resmain">
        <div className="recont">
          {/* <div class="background-video">
        
            <video>
              <source src="" type="video/mp4" />
            </video>

          </div> */}

          <div style={{ fontFamily: "Rajdhani", fontSize: "20px" }}>
            RESCUE IN <span style={{ color: "yellow" }}> METAVERSE </span>
            CUSTOMIZE <span style={{ color: "yellow" }}> AVATARS </span> PLAY
            WITH
            <span style={{ color: "yellow" }}> OCULUS</span>
          </div>
          <div className="btnva1">
            <img className="rsicon" src="../../../images/Rescueimg.png" />
          </div>

          <div className="btnva1">
            <button className="btncss">VA TEASER</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rescue;
