import React from "react";
import video from "../../Assets/JWVideo.mp4";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <h1 className="homeTitle">
          Inspiring intimacy  <br /> with GOD through Worship <br /> and Praise
          </h1>
          <p className="smallText">
          Amongst the thousand let your voice be heard.
          </p>
        </div>
        <div className="buttonDiv">
          <button className="btn join">Follow US</button>
          <button className="btn live">LIVE STREAM</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
