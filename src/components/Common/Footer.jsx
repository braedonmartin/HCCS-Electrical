import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bgimage = require('./../../images/background/bg-site.png');
var esa = require('./../../images/footer-logo.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: require('./../../images/logo-dark.png').default};
        
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo.default;}

    render() {
        
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                        <p className="max-w400">Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>
                                        <ul className="social-icons  mt-social-links">
                                            <li><NavLink to={"#"} className="fa fa-google" /></li>
                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul className="widget_address">
                                            <li>34/7 Liverpool Street, Suite 636, London, United Kingdom</li>
                                            <li>7xthemedemo@gmail.com</li>
                                            <li>(+298) 012-3456-789</li>
                                            <li>(+298) 146-6543-480</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul>
                                            <li><NavLink to={"/about"}>About</NavLink></li>
                                            <li><NavLink to={"/project-grid"}>Projects</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">ESA LICENSE NO:  7015867</h4>
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* TAGS */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">© 2021 Your Company. Designed By 7xtheme.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>

            </>
        );
    };
};

export default Footer;