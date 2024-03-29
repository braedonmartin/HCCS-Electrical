import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from './../../images/footer-logo.png';
import esaLogo from './../../images/footer-esa-logo.png';

function Footer() {
    const contactInfo = {
        email: 'HCCS.TomasArdiles@outlook.com',
        phone: '(647) 966-1989',
    }

    return (
        <>
            <footer className="site-footer footer-large  footer-dark	footer-wide">
                {/* FOOTER BLOCKES START */}
                <div className="footer-top overlay-wraper">
                    <div className="overlay-main" />
                    <div className="container">
                        <div className="row">
                            {/* ABOUT COMPANY */}
                            <div className="col-lg-3 col-md-6 col-sm-6" style={{marginTop: "-25px"}}>
                                <div className="widget widget_about">
                                    {/*<h4 class="widget-title">About Company</h4>*/}
                                    <div className="logo-footer clearfix p-b15" style={{marginLeft: "20px"}}>
                                        <NavLink to={"./"}><img src={companyLogo} alt="" /></NavLink>
                                    </div>
                                    <p className="max-w400">We put passion, hard work, and creativity into every project we deliver. Work with us today!</p>
                                    {/* <ul className="social-icons  mt-social-links">
                                        <li><NavLink to={"#"} className="fa fa-instagram" /></li>
                                        <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* RESENT POST */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget widget_address_outer">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul className="widget_address">
                                        <li>{contactInfo.email}</li>
                                        <li>{contactInfo.phone}</li>
                                    </ul>
                                </div>
                            </div>
                            {/* USEFUL LINKS */}
                            <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                <div className="widget widget_services inline-links">
                                    <h4 className="widget-title">Useful links</h4>
                                    <ul>
                                        <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* ESA Number */}
                            <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                <div className="widget widget_services">
                                    <h4 className="widget-title">ESA LICENSE NO:  7015867</h4>
                                    <div className="logo-footer clearfix p-b15">
                                        <NavLink to={"./"}><img src={esaLogo} alt="" /></NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* TAGS */}
                        </div>
                    </div>
                </div>
                {/* FOOTER COPYRIGHT */}

            </footer>
        </>
    );
};

export default Footer;