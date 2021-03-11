/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

export default function Header() {
  const [windowSize, setWindowSize] = React.useState(1400);
  const [showMobileNav, setShowMobileNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener("resize", updateDimension);
  });
  const updateDimension = () => {
    setWindowSize(window.innerWidth);
  };
  return (
    <>
      <header>
        <div className="header-section">
          <div className="logo">
            <li>
              <a style={{ color: "blue" }}>Landkit.</a>
            </li>
          </div>
          {windowSize >= 641 ? (
            <React.Fragment>
              <nav className="navbar">
                <ul>
                  <li>
                    <a>Landings</a>
                  </li>
                  <li>
                    <a>Pages</a>
                  </li>
                  <li>
                    <a>Account</a>
                  </li>
                  <li>
                    <a>Documentation</a>
                  </li>
                </ul>
              </nav>
              <div>
                <button className="header-button">Buy Now</button>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="hamburger" onClick={() => setShowMobileNav(!showMobileNav)}>
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </React.Fragment>
          )}
        </div>
      </header>
      {showMobileNav && windowSize < 641 && <nav className="navbar-mobile">
        <ul>
          <li>
            <a>Landings</a>
          </li>
          <li>
            <a>Pages</a>
          </li>
          <li>
            <a>Account</a>
          </li>
          <li>
            <a>Documentation</a>
          </li>
          <div>
            <button className="header-button">Buy Now</button>
          </div>
        </ul>
      </nav>}
    </>
  );
}
