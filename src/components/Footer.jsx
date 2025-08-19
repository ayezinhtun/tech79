import { Monitor, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1d70b7' }}>
      <div className="container-fluid pt-5">
        <div className="row g-4">
          {/* Brand / About */}
          <div className="col-md-3">
            <div className="d-flex align-items-center mb-3">
              <h5 className="fw-bold mb-0">Tech 79 Solutions</h5>
            </div>
            <p style={{ lineHeight: '2' }}>
              Your trusted partner for comprehensive IT support and technology solutions.
            </p>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Services</h5>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li><a href="#" className="text-decoration-none text-white hover-dark">Remote Support</a></li>
              <li><a href="#" className="text-decoration-none text-white hover-dark">Cybersecurity</a></li>
              <li><a href="#" className="text-decoration-none text-white hover-dark">Cloud Services</a></li>
              <li><a href="#" className="text-decoration-none text-white hover-dark">System Maintenance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Company</h5>
            <ul className="list-unstyled" style={{ lineHeight: 2 }}>
              <li><a href="/" className="text-decoration-none text-white hover-dark">About Us</a></li>
              <li><a href="/" className="text-decoration-none text-white hover-dark">Our Team</a></li>
              <li><a href="/" className="text-decoration-none text-white hover-dark">Careers</a></li>
              <li><a href="/contact" className="text-decoration-none text-white hover-dark">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Contact Info</h5>
            <div style={{ lineHeight: '2' }}>
              <div className="d-flex align-items-center mb-2">
                <Phone size={20} className="me-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Mail size={20} className="me-2" />
                <span>support@tech79.com</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin size={20} className="me-2" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider and copyright */}
        <hr className="border-white-25 mt-4" />
        <div className="text-center py-4">
          <p className="mb-0">Copyright © 2025 Tech79-Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
