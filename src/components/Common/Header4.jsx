import React, { useState, useEffect } from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';
import navLogo from './../../images/logo-dark.png';
import contactBackground from './../../images/background/bg-5.png';

function Header() {
    const [active, setActive] = useState({ isSearchActive: false, isQuoteActive: false });
    const [logo, setLogo] = useState({logo: navLogo});

    const contactInfo = {
        email: 'HCCS850143@outlook.com',
        phone: '(647) 966-1989',
        availablity: 'Sun-Sat 9.45 am',
        address: '420 Shmeat Street, Suite 420, Shmeatsville'
    }

    // Makes the navbar stick to the top of the page on scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
           setLogo({ logo: logopath }); 
        };
    });

    // Handles the search button
    function handleSearchToggle() {
        setActive(prevActive => ({ ...prevActive, isSearchActive: !prevActive.isSearchActive }));
    };
    // Handles the side contact menu on the navbar
    function handleQuoteToggle() {
        setActive(prevActive => ({ ...prevActive, isQuoteActive: !prevActive.isQuoteActive }));
    };

        
    return (
        <>
            <header className="site-header header-style-1 header-dark-1">
                <div className="top-bar bg-primary text-black">
                    <div className="container">
                        <div className="row">
                            <div className="mt-topbar-left clearfix">
                                <ul className="list-unstyled e-p-bx pull-right">
                                    <li><i className="fa fa-envelope" />{contactInfo.email}</li>
                                    <li><i className="fa fa-phone" />{contactInfo.phone}</li>
                                    <li><i className="fa fa-clock-o" />{contactInfo.availablity}</li>
                                </ul>
                            </div>
                            <div className="mt-topbar-right clearfix">
                                <div className="appint-btn"><NavLink to={"#"} className="site-button">Make an Appointment</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header main-bar-wraper">
                    <div className="main-bar bg-white">
                        <div className="container">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to={"./"}>
                                        <img src={logo.logo} alt="Shapen" />
                                    </NavLink>
                                </div>
                            </div>
                            {/* NAV Toggle Button */}
                            <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* ETRA Nav */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <NavLink to={"#"} onClick={handleSearchToggle}> 
                                        <i className="fa fa-search" />
                                    </NavLink>
                                </div>
                                <div className="extra-cell">
                                    <NavLink to={"#"} className="contact-slide-show" onClick={handleQuoteToggle}><i className="fa fa-angle-left arrow-animation" /></NavLink>
                                </div>
                            </div>
                            {/* ETRA Nav */}
                            {/* Contact Nav */}
                            <div className="contact-slide-hide " style={{ backgroundImage: 'url(' + contactBackground + ')', right: active.isQuoteActive ? '0px' : '-500px' }}>
                                <div className="contact-nav">
                                <NavLink to={"#"} className=                                                                                    "contact_close" onClick={handleQuoteToggle}>×</NavLink>
                                    <div className="contact-nav-form p-a30">
                                        <div className="contact-info   m-b30">
                                            <div className="mt-icon-box-wraper center p-b30">
                                                <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                    <p>{contactInfo.phone}</p>
                                                </div>
                                            </div>
                                            <div className="mt-icon-box-wraper center p-b30">
                                                <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">Email address</h5>
                                                    <p>{contactInfo.email}</p>
                                                </div>
                                            </div>
                                            <div className="mt-icon-box-wraper center p-b30">
                                                <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">Address info</h5>
                                                    <p>{contactInfo.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="full-social-bg">
                                            <ul>
                                                <li><NavLink to={"#"} className="facebook"><i className="fa fa-facebook" /></NavLink></li>
                                                <li><NavLink to={"#"} className="instagram"><i className="fa fa-instagram" /></NavLink></li>
                                            </ul>
                                        </div>
                                        <div className="text-center">
                                            <h4 className="font-weight-600">©  2021 7xtheme</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* SITE Search */}
                            <div id="search" className={active.isSearchActive ? "open" : null}>
                                <span className="close" onClick={handleSearchToggle} />
                                <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                    <div className="input-group">
                                        <input defaultValue="" name="q" type="search" placeholder="Type to search" />
                                        <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search arrow-animation" /></button></span>
                                    </div>
                                </form>
                            </div>
                            {/* MAIN Vav */}
                            <Navigation bgcolor="nav-dark" />
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;

