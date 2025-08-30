import React from "react";
import { FileText, User, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Ticket() {
  return (
    <section className="pb-5">
      <div className="container-fluid px-4">
        <div className="row g-4">

          {/* Support Form */}
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card shadow-lg border-0">
              <div className="card-header bg-white py-3">
                <h3 className="d-flex align-items-center fw-semibold">Create Support Ticket</h3>
                <p className="mb-0 text-muted">Fill out the form below to submit your support request</p>
              </div>
              <div className="card-body">
                <form>
                  <h5 className="mb-3 d-flex align-items-center BlueColor">
                    <User className="me-2" /> Customer Details
                  </h5>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="form-label">Customer ID *</label>
                      <input type="text" className="form-control" placeholder="Enter your customer ID" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-control" placeholder="Enter your full name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email *</label>
                      <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input type="text" className="form-control" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <h5 className="mb-3 BlueColor">Problem Details</h5>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Department *</label>
                      <select className="form-select">
                        <option>Technical Support</option>
                        <option>Sales</option>
                        <option>Security</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Product *</label>
                      <select className="form-select">
                        <option>System Integration</option>
                        <option>Network Solutions</option>
                        <option>Cloud Services</option>
                        <option>Security Solutions</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Subject *</label>
                      <input type="text" className="form-control" placeholder="Brief description of your issue" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Details *</label>
                      <textarea className="form-control" rows="6" placeholder="Please provide detailed information about your issue..."></textarea>
                    </div>
                  </div>

                  <button className="btn bgCustom1 btn-lg py-2 text-white w-100" style={{ fontSize: '18px' }}>
                    Create Ticket
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Resources */}
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card shadow-lg border-0 mb-4">
              <div className="card-header bg-white py-3">
                <h3 className="fw-semibold ">Need Immediate Help?</h3>
                <p className="mb-0 text-muted">Contact our support team directly</p>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bgCustom rounded p-3 me-3">
                    <Phone/>
                  </div>
                  <div>
                    <p className="mb-0 fw-medium fw-bold">Phone Support</p>
                    <p className="mb-0 small text-muted">09-780407008</p>
                    <p className="mb-0 small text-muted">09-971260043</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bgCustom rounded p-3 me-3">
                    <Mail/>
                  </div>
                  <div>
                    <p className="mb-0 fw-medium fw-bold">Email Support</p>
                    <p className="mb-0 small text-muted">info@tech79solutions.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bgCustom rounded p-3 me-3">
                    <MapPin />
                  </div>
                  <div>
                    <p className="mb-0 fw-medium fw-bold">Office Location</p>
                    <p className="mb-0 small text-muted">149(5-B), 48th Street Botatuang Township,</p>
                    <p className="mb-0 small text-muted">Yangon, Myanmar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
