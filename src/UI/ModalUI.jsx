import React, { useState } from "react";
import {Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeComponents() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <React.Fragment>
        <Button className="select button-primary tabs-button-primary" onClick={handleShow}>
            <div className="select-margin-items spotify">
                <img src="/Assets/Images/spotify.png" className="rounded-circle s1" alt="" width="100px" height="100px" style={{ backgroundColor: '#1ed75f41' }} />
                <h5 className="h5-div-heading tabs-a"><br />Spotify</h5>
                <p className="hovering tabs-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ab eaque, reprehenderit possimus iusto vitae!</p>
            </div>
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="mobel-float">
                                <Button className="mobel-button-close" onClick={handleClose}>
                                    <i className="fa-solid fa-xmark mobel-button-i"></i>
                                </Button>
                            </div>
                            <br />
                            <div className="">
                                <div className="select-margin-items spotify">
                                    <img src="/Assets/Images/spotify.png" className="rounded-circle model-select" alt="" width="100px" height="100px" style={{ backgroundColor: '#1ed75f41' }} />
                                    <h5 className="h5-div-heading tabs-a"><br />Spotify</h5>
                                </div>
                                <h1 className="model-search-by">Search By:</h1>
                                <Link to="/spotify-playlist-dashboard" style={{textDecoration: 'none'}} className="model-width-margin-bottom model-heading-h1" >
                                Search by Playlist
                                    <i className="fa-sharp fa-solid fa-circle-exclamation mobel-button-exclamation" title="Spotify"></i>
                                </Link>
                                <Link to="/spotify-artists-dashboard" style={{textDecoration: 'none'}} className="model-width-margin-bottom model-heading-h1" >
                                    Search by Artist
                                    <i className="fa-sharp fa-solid fa-circle-exclamation mobel-button-exclamation" title="Spotify"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </React.Fragment>
  );
}

export default HomeComponents;
