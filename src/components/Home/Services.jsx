import React from 'react';
import { Monitor, Shield, Cloud, Server, UserCheck, DatabaseBackup } from 'lucide-react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: Monitor,
      title: "IT Help Desk & Technical Support",
      description: "Fast and reliable assistance for day-to-day technical issues, ensuring minimal downtime."
    },
    {
      icon: Server,
      title: "Server Installation & Configuration",
      description: "Deployment and management of physical and cloud-based servers to support your operations."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Threat Protection",
      description: "Safeguarding your systems and data from malware, ransomware, and cyberattacks."
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Migration, setup, and management of cloud platforms to boost collaboration and productivity."
    },
    {
      icon: UserCheck,
      title: "IT Consultant",
      description: "An IT consultant is a technology professional who supports clients during technological projects."
    },
    {
      icon: DatabaseBackup,
      title: "Data Backup & Disaster Recovery",
      description: "Business continuity solutions to ensure your data is protected and recoverable."
    }
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='container-fluid py-5 custom-gradient'>
      <div className='text-center mb-5'>
        <h1 className='fw-bold'>Our IT Services</h1>
        <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
          Comprehensive technology solutions designed to keep your business <br />
          running smoothly
        </p>
      </div>

      <div className="row">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              className="col-lg-4 mb-3"
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card custom-hover-card p-4 border-0" style={{ gap: '1rem' }}>
                <div className='bgCustom rounded d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                  <Icon color="blue" size={30} />
                </div>

                <h5 className='fw-bold'>{service.title}</h5>
                <p className='secondColor'>{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
