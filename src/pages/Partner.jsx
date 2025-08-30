import React from 'react'
import { motion } from 'framer-motion';
import checkpoint from '../assets/img/partners/checkpoint.png'
import dell from '../assets/img/partners/dell.png'
import lenovo from '../assets/img/partners/lenovo.png'
import vmware from '../assets/img/partners/vmware.png'
import fortinet from '../assets/img/partners/fortinet.png'
import paloalto from '../assets/img/partners/paloalto.png'
import Certificates from '../components/Certificate';
import PartnerSection from '../components/PartnerSection';

function Partner() {
     const partners = [
    { name: "Microsoft", logo: checkpoint },
    { name: "Dell", logo: dell },
    { name: "Lenovo", logo: lenovo },
    { name: "VMware", logo: vmware },
    { name: "Fortinet", logo: fortinet },
    { name: "Palo Alto", logo: paloalto },
  ];
  return (
    <div>
       <section className="text-center pb-5 mb-5 custom-gradient" style={{ paddingTop: '150px' }}>
        <motion.h1
          className='fw-bold mb-4 headingGradient'
          style={{ fontSize: '3rem' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Partners
        </motion.h1>
        <motion.p
          className='secondColor'
          style={{ lineHeight: 1.625, fontSize: '1.25rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Strategic partnerships that drive innovation and deliver exceptional value to our clients.
        </motion.p>
      </section>
      
      <Certificates/>

        <PartnerSection/>


     
    </div>
  )
}

export default Partner
