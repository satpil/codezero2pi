/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import formImage from "../../assets/left1.jpg";
import BusinessImage from "../../assets/Business_SVG.svg";
import "./Section2.css";

function Section1() {
  return (
    <React.Fragment>
      <section className="section-back">
        <div className="section2-main">
          <div className="card">
            <div>
              <img src={formImage} />
            </div>
            <div style={{ padding: "22px", background: "#fff" }}>
              <div>
                <label>Name</label>
                <div>
                  <input name="name" />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div>
                  <input name="email" />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div>
                  <input name="password" />
                </div>
              </div>
              <button>Download a sample</button>
            </div>
          </div>
          <div className="section2-right">
            <h1>The most useful resource</h1>
            <h1 style={{ color: "green" }}>ever created for dev</h1>
            <p style={{ marginTop: "13px", lineHeight: "25px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </section>
      <section className="section-back">
        <div style={{ paddingTop: "76px" }}>
          <div className="section3">
            <div className="section3-left-main">
              <div className="section3-left">
                <h1>We have lots of experiance</h1>
                <h1 style={{ color: "blue" }}>building Bootstrap themes.</h1>
                <p style={{ marginTop: "23px" }}>
                  We've built well over a dozen bootstrap themes and sold
                </p>
                <p>tens of thousand of copies</p>
              </div>
            </div>
            <div className="section3-right">
              <img src={BusinessImage} />
            </div>
          </div>
        </div>
        <div className='customer'>
          <h1>Our customer are our biggest fans</h1>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Section1;
