import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider2';
import Specialization from './../Elements/Specialization';
import About from './../Elements/About3';
import OurServices from './../Elements/OurServices2';
import Team3 from './../Elements/Team3';
import OurProject from './../Elements/OurProject';
import Testimonials from './../Elements/Testimonials';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
                    {/* <Specialization /> */}
                    <OurServices />
                    <About />
                    <Team3 />
                    {/* <OurProject /> */}
                    {/*<Testimonials />*/}
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;