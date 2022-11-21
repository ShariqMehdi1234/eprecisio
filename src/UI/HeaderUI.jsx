import React from "react";
import { Link } from "react-router-dom";

function HeaderUI() {
  return (
    <React.Fragment>
      <nav className="navbar ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/Assets/Images/logo.JPG" alt="" />
          </Link>
          <div className="display-nowrap">
            <img src="/Assets/Images/1.png" className="rounded-circle margin-items" alt="" srcSet="" /><p style={{Float: 'right'}}> Stebin Ben</p>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default HeaderUI;
