import React, { useEffect } from 'react';
import { NavLink  } from 'react-router-dom';

function Navigation(props) {

    useEffect(() => {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    },);

    return (
        <>
            <div className={(props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink to={"./"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contactus"}>Contact us</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to={"/faq"}>FAQ</NavLink>
                    </li>
                    <li>
                    <NavLink to={""}>Pages</NavLink>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to={"/about"}>About us</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/services"}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/error"}>Error 404</NavLink>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li>
                        <NavLink to={""}>Post detail</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/post-image"}>Post Image</NavLink></li>
                            <li><NavLink to={"/post-gallery"}>Post Gallery</NavLink></li>
                            <li><NavLink to={"/post-video"}>Post Video</NavLink></li>
                            <li><NavLink to={"/post-sidebar"}>Post Right Sidebar</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={""}>Projects</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/project-grid"}>Project Grid</NavLink></li>
                            <li><NavLink to={"/project-masonary"}>Project Masonry</NavLink></li>
                            <li><NavLink to={"/project-carousel"}>Project Carousel</NavLink></li>
                            <li><NavLink to={"/project-classic1"}>Project Classic-1</NavLink></li>
                            <li><NavLink to={"/project-classic2"}>Project Classic-2</NavLink></li>
                            <li><NavLink to={"/project-detail"}>Project Detail</NavLink></li>
                        </ul>
                    </li>
                    <li className="submenu-direction">
                        <NavLink to={""}>Shortcodes</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/accordian"}>Accordian</NavLink></li>
                            <li><NavLink to={"/button"}>Button</NavLink></li>
                            <li><NavLink to={"/iconboxstyle"}>Icon box style</NavLink></li>
                            <li><NavLink to={"/listgroup"}>List group</NavLink></li>
                            <li><NavLink to={"/modalpopup"}>Modal popup</NavLink></li>
                            <li><NavLink to={"/tabs"}>Tabs</NavLink></li>
                            <li><NavLink to={"/table"}>Table</NavLink></li>
                            <li><NavLink to={"/video"}>Video</NavLink></li>
                            <li><NavLink to={"/iconfont"}>Icon Font</NavLink></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </>
    );
};

export default Navigation;