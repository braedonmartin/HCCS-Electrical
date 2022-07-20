import React from 'react';
import Header from './../Common/Header4'; // 1 is light, 4 is dark
import Slider from './../Elements/Slider3';
import OurServices from './../Elements/OurServices';
import About from './../Elements/About4';
import Footer from './../Common/Footer';
// import Specialization from './../Elements/Specialization';
// import Team3 from './../Elements/Team3';
// import OurProject from './../Elements/OurProject';
// import Testimonials from './../Elements/Testimonials';
import '../../App.css'

function Home() {
    return (
        <div className='Home'>
            <Header />
            <div className="page-content">
                <Slider />
                {/* <Specialization /> */}
                <OurServices />
                <About />
                {/* <Team3 /> */}
                {/* <OurProject /> */}
                {/*<Testimonials />*/}
            </div>
            <Footer />
        </div>
    );
};
export default Home;