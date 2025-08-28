import React from 'react';
import Ticket from '../components/ticketing';
import { motion } from 'framer-motion';

function Support() {
  return (
    <div>
      <motion.section
        className="text-center pb-5 custom-gradient"
        style={{ paddingTop: '150px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
         <motion.h1
            className='fw-bold mb-4 headingGradient'
            style={{ fontSize: '3rem' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
              Technical Support
          </motion.h1>
        <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
          Get expert help from our technical support team. We're here to resolve your issues <br /> quickly and efficiently.
        </p>
      </motion.section>

      <Ticket />
    </div>
  )
}

export default Support;
