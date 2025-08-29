import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import heroimage from '../../assets/img/hero-tech-support.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedBackground from '../AnimatedBackground';

function Hero() {
  return (
    <div
      className='container-fluid d-flex align-items-center justify-content-center custom-gradient'
      style={{ height: '100vh' }}
    >
      <div className="row w-100">
        {/* Left Text Section */}
        <motion.div
          className="col-lg-6 d-flex flex-column justify-content-between"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h1 className='fw-bold fs-1 fs-sm-2'>
              Your Trusted Partner in <span className='headingColor'>Tech Support</span>
            </h1>
            <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
              Reliable, professional IT support for businesses of all sizes. 
              From troubleshooting to infrastructure management, we keep your 
              technology running smoothly.
            </p>


            <div className="d-flex flex-column flex-sm-row align-items-start">
                <Link
                  to="/contact"
                  className="btn btn2 btn-lg mb-3 mb-sm-0 me-sm-3"
                  style={{ fontSize: "18px" }}
                >
                  Get Started Today
                  <ArrowRight className="ms-2" size={20} />
                </Link>

                <Link
                  to="/services"
                  className="btn btn-outline-primary btn-lg"
                  style={{ fontSize: "18px" }}
                >
                  View Our Services
                </Link>
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
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="col-lg-6 d-none d-sm-block"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                <AnimatedBackground />

          {/* <img src={heroimage} className='w-100 rounded-2' alt="Hero" /> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
