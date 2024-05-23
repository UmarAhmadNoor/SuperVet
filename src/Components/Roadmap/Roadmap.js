import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  return (
    <>
      <div className="Roadmain">
        <div className="hpmain1">
          <div className="logopartner">
            <img src="../../../images/RDicon.png" />
          </div>
          <div className="rdcont">
            <div className="hp1">
              <h2 style={{ fontFamily: "Rajdhani" }}>Phase 2</h2>
              <br />
              <p>Website Launch</p>
              <p>Whitepaper</p>
              <p>Contract Development</p>
              <p>Contract Audit</p>
              <p>Matketing & Kols</p>
            </div>
            <div className="hp2">
              <h2 style={{ fontFamily: "Rajdhani" }}>Phase 4</h2>
              <br />
              <p>Game Trailer</p>
              <p>Game Alpha Version</p>
              <p>Ist Super Tire Intro</p>
              <p>NFT Staking</p>
              <p>Community Expansion</p>
            </div>
          </div>

          <div className="rdcont2">
            <div className="hp1">
              <h2 style={{ fontFamily: "Rajdhani" }}>Phase 1</h2>
              <br />
              <p>Website Launch</p>
              <p>Whitepaper</p>
              <p>Contract Development</p>
              <p>Contract Audit</p>
              <p>Matketing & Kols</p>
            </div>
            <div className="hp2">
              <h2 style={{ fontFamily: "Rajdhani" }}>Phase 3</h2>
              <br />
              <p>Game Trailer</p>
              <p>Game Alpha Version</p>
              <p>Ist Super Tire Intro</p>
              <p>NFT Staking</p>
              <p>Community Expansion</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Roadmap;
