import React from "react";
import "./Token.css";

const Token = () => {
  return (
    <>
      <div className="maintoken">
        <div className="tokencontainer">
          <div
            style={{
              color: "yellow",
              fontFamily: "Rajdhani",
              fontSize: "30px",
            }}
          >
            TOKENNOMICS
          </div>

          <img style={{ width: "30%" }} src="../../../images/tokens.png" />

          <img style={{ width: "50%" }} src="../../../images/btns.png" />
          <img style={{ width: "70%" }} src="../../../images/tokens2.png" />
        </div>
      </div>
    </>
  );
};

export default Token;
