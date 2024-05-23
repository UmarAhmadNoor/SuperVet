import React from "react";
import "./Bruce.css";

const Bruce = () => {
  return (
    <>
      <div className="brucemain">
        {/* <img className="brimg" src="../../../images/bruce.png" /> */}

        <div className="brucecont">
          <div>
            <img className="topimg" src="../../../images/brucetop.png" />
          </div>
          <div className="brucebtns">
            {/* <div>
              <img style={{ width: "50px" }} src="../../../images/left.png" />
            </div>
            <div>
              <img style={{ width: "50px" }} src="../../../images/right.png" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Bruce;
