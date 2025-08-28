import React from 'react';
import { motion } from 'framer-motion';

function Statistics() {
  const stats = [
    { number: "100+", label: "Trusted Clients", description: "Businesses trust us" },
    { number: "99.9%", label: "Uptime Guarantee", description: "System availability" },
    { number: "15min", label: "Response Time", description: "Average support response" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" }
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='container-fluid py-5'>
      <div className='text-center mb-5'>
        <h1 className='fw-bold'>Trusted by Business</h1>
        <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
          Our numbers speak for themselves - proven results and satisfied customers
        </p>
      </div>

      <div className="row">
        {stats.map((stat, index) => (
          <motion.div
            className="col-lg-3 mb-3 text-center"
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="card custom-hover-card p-4 border-0" style={{ gap: '1rem' }}>
              <h1 className='BlueColor fw-bold'>{stat.number}</h1>
              <h5 className='fw-bold'>{stat.label}</h5>
              <p className='secondColor'>{stat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
