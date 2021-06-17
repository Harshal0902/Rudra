import React from 'react';
export default function Footer() {
    return (
        <footer className="text-white text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                        <ul className="list-unstyled mb-0 footer-list">
                            <li><h5 className="text-uppercase">Quick Links</h5></li>
                            <li><a href="#!" className="text-white">Home</a></li>
                            <li><a href="./aboutus.html" className="text-white">About Us</a> </li>
                            <li>
                                <h6>Languages:</h6>
                                <ul className="list-styled mb-0">
                                    <li><a href="./English/home.html" className="text-white">English</a></li>
                                    <li><a href="./Kannada/home.html" className="text-white">Kannada</a></li>
                                    <li><a href="/Progressing" className="text-white">Others</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                        <ul className="list-unstyled mb-0 footer-list">
                            <li><h5 className="text-uppercase">Contact Us</h5></li>
                            <li>
                                <i className="fa fa-envelope-o" aria-hidden="true"></i><a href="/Progressing" className="text-white">&nbsp rudra@xyz.com</a>
                            </li>
                            <li>
                                <i className="fa fa-phone" aria-hidden="true"></i><a href="/Progressing" className="text-white">&nbsp 9004950430</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                        <div className="container footer-list">
                            <h5 className="text-uppercase connect">Connect</h5>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <img src="assets/facebook.png" alt="" />

                                </div>
                                <div className="col-2"><img src="assets/twitter.png" alt="" /></div>
                                <div className="col-2"><img src="assets/instagram.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 copyright" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:<a className="text-white" href="/Progressing">Rudra@xyz.com</a>

            </div>

        </footer>
    )
}