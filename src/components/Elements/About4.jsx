import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bnr1 from './../../images/background/line.png';
import slidePic1 from './../../images/gallery/portrait/pic8.jpg';
import slidePic2 from './../../images/gallery/portrait/pic9.jpg';
import slidePic3 from './../../images/gallery/portrait/pic10.jpg';
import slidePic4 from './../../images/gallery/portrait/pic4.jpg';
import slidePic5 from './../../images/gallery/portrait/pic5.jpg';
import '../../App.css'

let images = [ slidePic1, slidePic2, slidePic3 ]; // used to loop through the images

function About4() {
    
    
    useEffect(() => {
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
    
    const options = {
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        margin:30,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items:1,
        dots: true
    }

    return (
        <div className="about-element">
            <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
                <div className="container">
                    <div className="section-content ">
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                                <div className="m-about ">
                                    <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                        {images.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="ow-img">
                                                <NavLink to="/about"><img src={item} alt=""/></NavLink>
                                                </div>
                                            </div>
                                        ))}
                                    
                                    </OwlCarousel>
                                    
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-6">
                                <div className="m-about-containt text-black p-t80">
                                    <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                                        <span className="text-primary large-title">20</span>
                                        <span className="large-title-info">Years of Experience</span>
                                    </div>
                                    <h3 className="font-weight-600">Improving quality of life with an integrated unified approach.</h3>
                                    <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use texts.  Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                                    <div className="p-t20">
                                        <NavLink to="/about" className="site-button btn-effect m-b15"><span>Get in touch</span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About4;