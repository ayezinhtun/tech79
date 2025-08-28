import { ArrowRight, CircleCheck, Clock, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Services() {
  const stats = [
    { icon: Clock, value: "Response Time", label: "15-minute response for critical issues, guaranteed" },
    { icon: Users, value: "Expert Team", label: "Certified professionals with 10+ years average experience" },
    { icon: CircleCheck, value: "Satisfaction", label: "100% satisfaction guarantee or your money back" },
  ];

  const services = [
    { title: "IT Help Desk & Technical Support", description: " Fast and reliable assistance for day-to-day technical issues, ensuring minimal downtime." },
    { title: "Network Design, Setup & Maintenance", description: "Scalable and secure networking solutions to keep your business connected and running smoothly." },
    { title: "Server Installation & Configuration", description: "Deployment and management of physical and cloud-based servers to support your operations." },
    { title: "Cloud Services", description: "Migration, setup, and management of cloud platforms to boost collaboration and productivity." },
    { title: "Cybersecurity & Threat Protection", description: "Safeguarding your systems and data from malware, ransomware, and cyberattacks." },
    { title: "Data Backup & Disaster Recovery", description: "Business continuity solutions to ensure your data is protected and recoverable." },
    { title: "Hardware & Software Supply", description: "Procurement and deployment of reliable IT equipment and licensed software." },
    { title: "Remote & On-site IT Support", description: "Flexible technical support delivered both virtually and at your location when needed." },
    { title: "Annual Maintenance Contracts (AMC)", description: "Long-term IT service agreements for regular check-ups, maintenance, and peace of mind." },
    { title: "IT Consultant", description: "An IT consultant is a technology professional who supports clients during technological projects." },
    { title: "DC/DR Solution", description: "Reliable data protection and recovery for small to medium businesses, ensuring minimal downtime." }
  ];

  return (
    <div>

      {/* Heading Section */}
      <motion.section
        className='container-fluid custom-gradient pb-5'
        style={{ paddingTop: '150px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center pb-5">
          <motion.h1
            className='fw-bold mb-4 headingColor'
            style={{ fontSize: '3rem' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h1>
          <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
            At Tech79Solutions Company Limited, we provide a comprehensive range of IT services tailored to meet the evolving needs of modern businesses. <br /> Our goal is to ensure reliable, secure, and seamless technology experiences for every client we serve.
          </p>
        </div>

        {/* Services Cards */}
        <div className="row">
          {services.map((service, index) => (
            <motion.div
              className="col-lg-4 mb-4"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card custom-hover-card3 h-100 text-center p-4 bg-white border-0 shadow-sm rounded">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3" style={{ minHeight: '50px' }}>
                    <h5 className="card-title fw-bold mb-0">{service.title}</h5>
                  </div>
                  <p className="card-text secondColor mt-2">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Service Guarantees */}
      <section className='container-fluid py-5' style={{ backgroundColor: '#1d70b7' }}>
        <div
          className='text-center mb-5'
        >
          <h1 className='fw-bold text-white'>Our Service Guarantees</h1>
        </div>

        <div className='container'>
          <div className="row py-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  className="text-center col-lg-4"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="card border-0 shadow-sm p-4 mx-auto custom-hover-card rounded w-100 custom-hover-card3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div className='text-center mb-3'>
                      <Icon color='white' size={35} />
                    </div>
                    <div className="h3 fw-bold mb-2 text-white">{stat.value}</div>
                    <div className="fw-medium opacity-75 text-white">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section
        className='bgPrimary10 py-5 d-flex flex-column align-items-center justify-content-center text-center'
        style={{ gap: '1rem' }}
      >
        <h1 className='fw-bold' style={{ fontSize: '3rem' }}>Ready to Join?</h1>
        <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
          Let's discuss how we can transform your business with a customized IT solution. Our expert team is <br /> ready to help you achieve your technology goals.
        </p>
        <div className="btngroup">
          <Link to="/contact" className='btn btn2 btn-lg' style={{ fontSize: '18px' }}>
            Start Your Project <ArrowRight className='ms-2' size={20}/>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Services;
