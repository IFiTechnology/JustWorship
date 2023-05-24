import React from "react";
import Wgathering from "../../Assets/WGathering.jpg";
import JWUnec from "../../Assets/JWUnec.jpg";
import JWAbuja from "../../Assets/JWAbuja.jpg";
import LiveRecording from "../../Assets/LiveRecording.jpg";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <section className="event">
        <h1 className="sectionTitle">Upcoming Events</h1>
        <div class="events">
          <div class="eventCard">
            <div class="eventCard-image">
              <img src={Wgathering} />
            </div>
            <div class="eventCard-text">
              <h2 class="eventCard-title">Worshipers Gathering</h2>
              <p class="eventCard-body">
                Worshipper gathering is our weekly worship school, every Sunday
                by 4pm where we equip, train and raise, genuine worshippers of
                Jesus Christ.
              </p>
            </div>
            <div class="eventCard-date">Every Mon 5PM</div>
          </div>
          <div class="eventCard">
            <div class="eventCard-image">
              <img src={JWUnec} />
            </div>
            <div class="eventCard-text">
              <h2 class="eventCard-title">Just Worship Unec</h2>
              <p class="eventCard-body">
                The Lord is calling us back to campus outreaches as the ministry
                expands to different cities and nations. We are starting the
                campus tour from the University of Nigeria Enugu Campus (UNEC).
              </p>
            </div>
            <div class="eventCard-date">Every Mon 5PM</div>
          </div>
          <div class="eventCard">
            <div class="eventCard-image">
              <img src={JWAbuja} />
            </div>
            <div class="eventCard-text">
              <h2 class="eventCard-title">Just Worship Abuja</h2>
              <p class="eventCard-body">
                As the Vision keeps growing Just Worship Team is delighted hold
                her first evening of worship in the city of Abuja.
              </p>
            </div>
            <div class="eventCard-date">Every Mon 5PM</div>
          </div>
          <div class="eventCard">
            <div class="eventCard-image">
              <img src={LiveRecording} />
            </div>
            <div class="eventCard-text">
              <h2 class="eventCard-title">Worshipers Gathering</h2>
              <p class="eventCard-body">
                Worshipper gathering is our weekly worship school, every Sunday
                by 4pm where we equip, train and raise, genuine worshippers of
                Jesus Christ.
              </p>
            </div>
            <div class="eventCard-date">Every Mon 5PM</div>
          </div>
        </div>
      </section>

      <section className="leadership">
        <h1 className="sectionTitle">Our Leadership</h1>
      </section>
    </div>
  );
};

export default Main;
