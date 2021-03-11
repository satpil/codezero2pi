/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Section1.css";
import remoteImage from "../../assets/remote-team.svg";

function Section1() {
  return (
    <React.Fragment>
      <div className="section1">
        <div className="section1-left-main">
          <div className="section1-left">
            <h1>
              Welcome to <span style={{ color: "blue" }}>Landkit.</span>
            </h1>
            <h1>Develop anything.</h1>
            <p style={{ marginTop: "23px" }}>
              Build a beautiful, modern website with flexible
            </p>
            <p>Bootstrap components built from scratch.</p>
            <div className="section1-left-button">
              <div>
                <button>
                  View All Pages{" "}
                  <i
                    style={{ paddingLeft: "5px" }}
                    className="fa fa-arrow-right"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div>
                <button>Documentation</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section1-right">
          <img src={remoteImage} />
        </div>
      </div>
      <div className="section-para">
        <div>
          <i className="fa fa-coffee" aria-hidden="true"></i>
          <h2>Built for developer</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div>
          <i className="fa fa-cubes" aria-hidden="true"></i>
          <h2>Designed to be modern</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div>
          <i className="fa fa-sitemap" aria-hidden="true"></i>
          <h2>Documentation for everything</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Section1;
