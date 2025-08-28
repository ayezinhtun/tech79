import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { number: "50+", label: "Industry Certifications" },
  { number: "15+", label: "Technology Partners" },
  { number: "10+", label: "Years of Excellence" },
  { number: "100%", label: "Certified Technicians" }
];

function Partners() {
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='container-fluid py-5 custom-gradient'>
      <div className='text-center mb-5'>
        <h1 className='fw-bold'>Technology Partners & Certifications</h1>
        <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
          Back by industry-leading partnerships and certifications that guarantee <br />
          expertise and reliability
        </p>
      </div>

      <div className="row mb-5">
        {achievements.map((achievement, index) => (
          <motion.div
            className="col-lg-3 mb-3"
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className="card d-flex flex-column align-items-center justify-content-center p-4 border-0"
              style={{ gap: '1rem', backgroundColor: 'rgba(33, 112, 183, 0.1)' }}
            >
              <h2 className='fw-bold BlueColor'>{achievement.number}</h2>
              <p className='secondColor text-center'>{achievement.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default Partners;
