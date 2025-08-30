import { ArrowRight } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'

function CallToAction() {
  return (
    <div className='bgPrimary10 py-5 d-flex flex-column align-items-center justify-content-center text-center' style={{ gap: '1rem' }}> 
        <h1 className='fw-bold' style={{ fontSize: '3rem' }}>
            Ready To Transform Your IT <br /> Infrastructure?
        </h1>
        <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
             Join hundreds of satisfied businesses who trust Tech79 Solutions for their IT needs. 
            Get started today with a <br /> free consultation and discover how we can optimize your technology.
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
  )
}

export default CallToAction
