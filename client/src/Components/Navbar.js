import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";

class Navigation extends React.Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="40" height="40" alt={"logo"}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Diseases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pathy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Share Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ask Suggestions</a>
              </li>
            </ul>
             <ul className="nav navbar-nav navbar-right ml-md-auto ">
                <li className="nav-item">
                <a className="nav-link" href="http://bit.do/join-ignitus">Join Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">Sign in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Sign up</a>
              </li>
            </ul>
          </div>
    </nav>

    );
  }
}
export default Navigation;
