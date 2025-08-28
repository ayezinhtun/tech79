import React from "react";
import { motion } from "framer-motion";
import healthcare from '../assets/img/healthcare.jpg';
import education from '../assets/img/education.jpg';
import financial from '../assets/img/financial.jpg';
import manufacture from '../assets/img/manufacturing.jpg';
import retail from '../assets/img/retail.jpg';
import automotive from '../assets/img/automotive.jpg';
import goverment from '../assets/img/government.jpg';
import energy from '../assets/img/energy.jpg';

function Industries() {
  const stats = [
    { value: "100+", label: "Trusted Clients" },
    { value: "5+", label: "Experienced Professionals" },
    { value: "24/7", label: "Support Available" },
    { value: "99.9%", label: "Uptime Guarantee" },
  ];

  const industries = [
    { title: "Healthcare", description: "Comprehensive IT solutions for hospitals, clinics, and healthcare networks with HIPAA compliance and patient data security.", image: healthcare },
    { title: "Financial Services", description: "Financial Services Secure banking solutions, fintech applications, and compliance management for financial institutions.", image: financial },
    { title: "Manufacturing", description: "ERP systems, supply chain management, and industrial IoT solutions for manufacturing companies.", image: manufacture },
    { title: "Education", description: "Digital transformation for schools, universities, and educational institutions with learning management systems.", image: education },
    { title: "Retail & E-commerce", description: "Digital commerce platforms, inventory management, and customer experience solutions for retail businesses.", image: retail },
    { title: "Automotive", description: "Connected vehicle solutions, dealership management systems, and automotive supply chain optimization.", image: automotive },
    { title: "Government", description: "Secure government solutions, citizen services platforms, and public sector digital transformation.", image: goverment },
    { title: "Energy & Utilities", description: "Smart grid solutions, energy management systems, and utility infrastructure modernization.", image: energy },
  ];

  return (
    <div>

      {/* Heading Section */}

     <section className="text-center pb-5 custom-gradient" style={{ paddingTop: '150px' }}>
            <motion.h1
              className='fw-bold mb-4 headingColor'
              style={{ fontSize: '3rem' }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
               Industries We Serve
            </motion.h1>
            <motion.p
              className='secondColor'
              style={{ lineHeight: 1.625, fontSize: '1.25rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Delivering specialized IT solutions across diverse industries with deep sector expertise

            </motion.p>
          </section>
    

      {/* Stats Section */}
      <section className="row py-5 text-center" style={{ background: "#1d70b7" }}>
        {stats.map((stat, index) => (
          <motion.div
            className="col-lg-3 mb-3"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="d-flex flex-column align-items-center justify-content-center p-4" style={{ gap: "1rem" }}>
              <h1 className="fw-bold text-white">{stat.value}</h1>
              <h5 className="text-white">{stat.label}</h5>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Industry Cards */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row g-4">
            {industries.map((industry, index) => (
              <motion.div
                className="col-12 col-md-6 col-lg-3"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 border-0 industry-card">

                  {/* Image Wrapper */}
                  <div className="industry-img-wrapper">
                    <img
                      src={industry.image}
                      className="card-img-top industry-img"
                      alt={industry.title}
                    />
                    <div className="overlay"></div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body text-center">
                    <h5 className="fw-bold BlueColor">{industry.title}</h5>
                    <p className="secondColor">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Industries;
