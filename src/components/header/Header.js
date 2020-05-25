import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <nav className="navbar sticky-top navbar-expand-lg bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                {" "}
                <Link to="/" className="nav-link">
                  <i className="fa fa-home" /> Home{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <Link to="/contact/add-contact" className="nav-link">
                  <i className="fa fa-plus" /> Add{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <Link to="/about" className="nav-link">
                  <i className="fa fa-question" /> About{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      // <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      //   <div className="container">
      //     <a href="/" className="navbar-brand">
      //       {branding}
      //     </a>
      //     <div>
      //       <ul className="navbar-nav mr-auto">
      //         <li className="nav-item">
      //           <Link to="/" className="nav-link">
      //             <i className="fa fa-home" /> Home
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to="/contact/add-contact" className="nav-link">
      //             <i className="fa fa-plus" /> Add
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to="/about" className="nav-link">
      //             <i className="fa fa-question" /> About
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}
