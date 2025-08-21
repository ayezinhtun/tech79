import React from 'react'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'
import heroimage from '../../assets/img/hero-tech-support.jpg'
import {Link} from 'react-router-dom'
function Hero() {
  return (
   <div className='container-fluid d-flex align-items-center justify-content-center custom-gradient' style={{ height: '110vh' }}>
        <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <div>
                <h1 className='fw-bold' style={{ fontSize: '3.5rem' }}>
                    Your Trusted Partner in <span className='BlueColor'>Tech Support</span>
                 </h1>
                 <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                    Reliable, professional IT support for businesses of all sizes. 
                    From troubleshooting to infrastructure management, we keep your 
                    technology running smoothly.
                 </p>

                 <div className="btngroup">
                  <Link to="/contact" className='btn btn2'>Get Started Today
                    <ArrowRight className='ms-2' size={20}/>
                  </Link>
                  <Link to="/services" className='btn btn-outline-primary ms-4'>View Our Services</Link>
                 </div>
              </div>
                

                  <div className="d-flex align-items-center gap-5 pt-4">
                    <div className="d-flex align-items-center gap-2">
                      <Shield size={20} className="text-primary" />
                      <span className="small text-muted">24/7 Support</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Zap size={20} className="text-primary" />
                      <span className="small text-muted">Fast Response</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Users size={20} className="text-primary" />
                      <span className="small text-muted">Expert Team</span>
                    </div>
                </div>

            </div>
            <div className="col-lg-6">
                <img src={heroimage} className='w-100 rounded-2' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero
