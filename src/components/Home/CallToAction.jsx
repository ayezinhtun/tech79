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
             Join hundreds of satisfied businesses who trust TechVault for their IT needs. 
            Get started today with a <br /> free consultation and discover how we can optimize your technology.
        </p>

        <div className="btngroup">
            <Link to="/contact" className='btn btn2' style={{ fontSize: '18px' }}>Start Free Consultation
                 <ArrowRight className='ms-2' size={20}/>
             </Link>
            <Link to="/services" className='btn btn-outline-primary ms-4' style={{ fontSize: '18px' }}>View Our Services</Link>

        </div>
    </div>
  )
}

export default CallToAction
