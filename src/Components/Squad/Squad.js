import React from "react";
import "./Squad.css";

const Squad = () => {
  return (
    <>
      <div className="sqmain">
        <div className="sqcont">
          <div className="sqbtn">
            <button className="sqbtnstyle">SQUAD</button>
          </div>

          <div className="hsq">
            <div>
              <h1>TEAM</h1>
              <img
                style={{ width: "60%" }}
                src="../../../images/Vector 23333.png"
              />
            </div>
            <h1 style={{ marginBottom: "10px" }}>ADVISORS</h1>
          </div>

          <div className="sqpics">
            <div>
              <img
                style={{ width: "80%" }}
                src="../../../images/material-symbols_arrow-forward-ios (2).png"
              />
            </div>
            <div>
              <img style={{ width: "100%" }} src="../../../images/sq1.png" />
            </div>
            <div>
              <img style={{ width: "100%" }} src="../../../images/sq2.png" />
            </div>
            <div>
              <img style={{ width: "100%" }} src="../../../images/sq3.png" />
            </div>
            <div>
              <img style={{ width: "100%" }} src="../../../images/sq4.png" />
            </div>
            <div>
              <img
                style={{ width: "80%" }}
                src="../../../images/material-symbols_arrow-forward-ios (3).png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Squad;
