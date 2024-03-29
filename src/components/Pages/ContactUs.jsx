import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import GoogleMaps from "simple-react-google-maps"
import Header from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import '../../App.css'

var bnrimg = require('./../../images/banner/4.jpg');

function ContactUs() {

    const form = useRef()

    const contactInfo = {
        email: 'HCCS.TomasArdiles@outlook.com',
        phone: '(647) 966-1989',
        availablity: 'Sun-Sat 9.45 am',
    }

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm(
          'service_ucxxyzo',
          'template_dahgcrs',
          form.current,
          'MCe2J7N4wUnVw38fr'
        )
        .then(() => {
            alert('Message successfully sent!')
            window.location.reload(false)
          }, () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

    return (
        <>
            <Header />
            <div className="page-content">
                
                {/* SECTION CONTENTG START */}
                <div className="section-full p-tb80 inner-page-padding">
                    {/* LOCATION BLOCK*/}
                    <div className="container">
                        {/* GOOGLE MAP & CONTACT FORM */}
                        <div className="section-content">
                            {/* CONTACT FORM*/}
                            <div className="row">
                                <div className="col-md-8 col-sm-6">
                                    <form className="contact-form cons-contact-form" ref={form} onSubmit={sendEmail}>
                                        <div className="contact-one m-b30">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Get</span> In touch</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="form-group">
                                                <input name="name" type="text" required className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="email" className="form-control" required placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} />
                                            </div>
                                            <div className="text-right">
                                                <button name="submit" type="submit" value="Submit" className="site-button btn-effect">
                                                  submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="contact-info m-b30">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Contact</span> Info</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="bg-light p-a20 text-black">
                                            <div className="mt-icon-box-wraper left p-b40">
                                                <div className="icon-xs" style={{color: "#f5be23"}}><i className="fa fa-phone" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                    <p>{contactInfo.phone}</p>
                                                </div>
                                            </div>
                                            <div className="mt-icon-box-wraper left p-b10">
                                                <div className="icon-xs" style={{color: "#f5be23"}}><i className="fa fa-envelope" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">Email address</h5>
                                                    <p>{contactInfo.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gmap-outline">
                            <p className='mapBox'>Located in the Brampton area</p>
                            <GoogleMaps
                                apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                style={{height: "400px", width: "100%"}}
                                zoom={12}
                                center={{lat: 43.73140774011988, lng: -79.76290351483925}}
                                markers={{lat: 43.73140774011988, lng: -79.76290351483925}} //optional
                            />
                        </div>
                    </div>
                </div>
                {/* SECTION CONTENT END */}
            </div>


            <Footer />

        </>
    );
};

export default ContactUs;