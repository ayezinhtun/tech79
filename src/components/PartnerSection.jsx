import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

function PartnerSection() {
  return (
    <section className="py-5 bgPrimary10">
      <div className="container-fluid px-5">
        <div className="row align-items-center g-5">
          {/* Left Column */}
          <div className="col-lg-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="fw-bold mb-4" style={{ fontSize: '3rem' }}
            >
              Become a Technology Partner
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="fs-5 secondColor mb-4"
            >
              Join our ecosystem of leading technology providers and help deliver
              innovative integration solutions to our clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="btn btn2 btn-lg" style={{ fontSize: '18px' }}
              >
                Partner With Us
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bgCustom rounded-3 p-4 shadow-sm">
              <h3 className="fs-3 fw-semibold mb-4">Partnership Benefits</h3>
              <ul className="list-unstyled">
                {[
                  "Access to our extensive client base",
                  "Joint marketing and co-selling opportunities",
                  "Technical collaboration and integration support",
                  "Preferred pricing and resources",
                  "Partnership growth opportunities",
                ].map((benefit, index) => (
                  <li key={index} className="d-flex align-items-start mb-3">
                    <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
