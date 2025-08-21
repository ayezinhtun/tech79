import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <div>
        <section className='container-fluid custom-gradient pb-5'>
            <div className="text-center pb-5 " style={{ paddingTop: '150px' }}>
                <h1 className='fw-bold mb-4' style={{ fontSize: '3rem' }}>Get In Touch</h1>
                    <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                        Ready to solve your IT challenges? Contact our expert team for immediate assistance.
                    </p>
            </div>

            
        <div className="container-fluid px-5">
          <div className="row g-4 justify-content-center align-items-stretch">
            {/* Contact Form */}
            <div className="col-lg-6 d-flex">
              <div className="card shadow-lg border-0 h-100 w-100">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4 fw-semibold">Send us a message</h3>
                  <p className="secondColor">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form className="mt-4">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input type="text" className="form-control custom-placeholder" id="firstName" placeholder="Enter Your First Name" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter Your Last Name" />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
                    </div>

                    {/* <div className="mt-3">
                      <label htmlFor="company" className="form-label">
                        Company
                      </label>
                      <input type="text" className="form-control" id="company" placeholder="Your Company Name" />
                    </div> */}

                    <div className="mt-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input type="tel" className="form-control" id="phone" placeholder="Enter Your Phone Number" />
                    </div>

                    <div className="mt-3">
                      <label htmlFor="message" className="form-label">
                       
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Describe your IT needs or current challenges..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-4" style={{ fontSize: '18px' }}>
                       <Send className='me-2'/>
                       Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-6 d-flex">
              <div className="card shadow-lg border-0 mb-4 h-100 w-100">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Contact Information</h3>
                  <p className="secondColor">Multiple ways to reach our support team</p>

                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3">
                      <div className="bgCustom p-3 rounded">
                        <Phone/>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">Phone Support</h5>
                      <p className="mb-0 secondColor">09-780407008</p>
                       <p className="mb-0 secondColor">09-971260043 </p>
                      
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3">
                      <div className="bgCustom p-3 rounded">
                        <Mail/>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">Email Support</h5>
                      <p className="mb-0 secondColor">mgmgthantxin@gmail.com</p>
                      <p className="mb-0 secondColor">sungehtwe@gmail.com</p>

                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3">
                      <div className="bgCustom p-3 rounded">
                        <MapPin/>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">Office Location</h5>
                      <p className="mb-0 secondColor">
                         149(5-B), 48th Street Botatuang Township, Yangon, Myanmar. 
                       </p>
                    </div>
                  </div>

                  {/* <div className="d-flex align-items-start">
                    <div className="me-3">
                      <div className="bgCustom p-3 rounded">
                        <Clock/>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">Business Hours</h5>
                      <p className="mb-0 secondColor">
                        Monday - Friday: 8:00 AM - 6:00 PM <br />
                        Saturday: 9:00 AM - 4:00 PM <br />
                        Sunday: Emergency support only
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
             
            </div>
          </div>
        </div>

        </section>
    </div>
  )
}

export default Contact
