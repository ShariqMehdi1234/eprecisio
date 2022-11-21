import React from "react";
import { Link } from "react-router-dom";
import ModalPages from '../Pages/ModalPages'

function HomeUI() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 container-fuild-margin'>
            <div className="platform">
              <h1 className="Select-Platform">Select Platform</h1>
              <p className="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat provident quae sapiente,<br /> expedita corrupti?</p>
              <div className="div-hr">
                <hr className="hr" />
              </div>
              <div className="selectpt">
                <Link className="select" to="/">
                  <div className="select-margin-items soundcloud">
                      <img src="/Assets/Images/sound.png" className="rounded-circle s1" alt="" srcSet="" width="100px" height="100px" style={{ backgroundColor: '#1876f233' }} />
                      <h5 className="h5-div-heading"><br />Sound Cloud</h5>
                      <p className="hovering">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ab eaque, reprehenderit possimus iusto vitae!</p>
                  </div>
                </Link>
                <Link className="select" to="/">
                  <div className="select-margin-items tiktok">
                      <img src="/Assets/Images/tiktok.png" className="rounded-circle s1" alt="" width="100px" height="100px" style={{ backgroundColor: '#1876f233' }} />
                      <h5 className="h5-div-heading"><br />TikTok</h5>
                      <p className="hovering">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ab eaque, reprehenderit possimus iusto vitae!</p>
                  </div>
                </Link>
                <Link className="select" to="/">
                  <div className="select-margin-items youtube">
                      <img src="/Assets/Images/youtube.png" className="rounded-circle s1" alt="" width="100px" height="100px" style={{ backgroundColor: '#ff000062' }} />
                      <h5 className="h5-div-heading"><br />Youtube</h5>
                      <p className="hovering">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ab eaque, reprehenderit possimus iusto vitae!</p>
                  </div>
                </Link>
                <ModalPages />
                <Link className="select" to="/instagram-dashboard">
                  <div className="select-margin-items instagram">
                      <img src="/Assets/Images/insta.png" className="rounded-circle s1" alt="" width="100px" height="100px" style={{ backgroundColor: '#f44e5667' }} />
                      <h5 className="h5-div-heading"><br />Instagram</h5>
                      <p className="hovering">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ab eaque, reprehenderit possimus iusto vitae!</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeUI;
