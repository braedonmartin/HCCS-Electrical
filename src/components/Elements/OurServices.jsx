import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImg from './../../images/background/bg-4.png'; // the half background
import '../../App.css'

const services = [
    {
        count: 1,
        title: 'Commericial Work',
        icon: require('./../../images/icon/building.png'),
        description: 'Plugs, recepticles, lighting. Whatever you need, we work with you to ensure that your business is running smoothly and is in the best position to grow.',
    },
    {
        count: 2,
        title: 'Home Renovations',
        icon: require('./../../images/icon/architecture.png'),
        description: 'Our highly trained team of electricians can help you with any electrical work you need to complete your home renovation project and bring your vision to fruition. ',
    },
    {
        count: 3,
        title: 'EV Charging Stations',
        icon: require('./../../images/icon/EV-station.png'),
        description: 'We install charging stations in outdoor spaces and garages. A perfect cost-effective solution for home owners and other consumers.',
    }
]

function OurServices() {

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

    return (
        <>
            <div className="section-full mobile-page-padding  p-b50  square_shape2">
                <div className="section-content">
                    <div className="Service-half-top p-t80  bg-dark bg-moving" style={{ backgroundImage: 'url(' + backgroundImg + ')' }}>
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-white">
                                <div className="mt-separator-outer separator-left">
                                    <div className="mt-separator">
                                        <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Services</h2>
                                    </div>
                                </div>
                                <h3>There are many services we can offer you, each of which fall into these main categories</h3>
                            </div>
                            {/* TITLE END */}
                        </div>
                    </div>
                    <div className="services-half-bottom">
                        <div className="container">
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-md-4 col-sm-6" key={index}>
                                        <div className="mt-icon-box-wraper m-b30">
                                            <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                <span className="icon-count-number">{item.count}</span>
                                                <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                    <span className="icon-cell"><img src={item.icon.default} alt=""/></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurServices;