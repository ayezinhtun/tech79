import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Monitor, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#1d70b7" }}>
      <div className="container-fluid px-5 pt-5 pb-4">
        <div className="row g-5">
          
          {/* Brand / About */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <h4 className="fw-bold mb-0">Tech79 Solutions</h4>
            </div>
            <p style={{ lineHeight: "1.8" }}>
             Empowering Your Business with Open Technology
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-0" style={{ lineHeight: "2" }}>
              <li><Link to="/" className="text-decoration-none text-white">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none text-white">About Us</Link></li>
              <li><Link to="/services" className="text-decoration-none text-white">Services</Link></li>
              <li><Link to="/projects" className="text-decoration-none text-white">Projects</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-3">Our Services</h5>
            <ul className="list-unstyled mb-0" style={{ lineHeight: "2" }}>
              <li><Link to="/services" className="text-decoration-none text-white">IT Help Desk & Technical Support</Link></li>
              <li><Link to="/services" className="text-decoration-none text-white">Server Installation & Configuration</Link></li>
              <li><Link to="/services" className="text-decoration-none text-white">Cloud Services</Link></li>
              <li><Link to="/services" className="text-decoration-none text-white">Remote & On-site IT Support</Link></li>
              <li><Link to="/services" className="text-decoration-none text-white">IT Consultant</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <div className="mb-3" style={{ lineHeight: "2" }}>
              <div className="d-flex align-items-center mb-2">
                <Phone size={18} className="me-2" />
                <div>
                   <span className="me-2">09-780407008</span>  ,
                   <span className="ms-2">09-971260043</span>
                </div>
               

              </div>
              <div className="d-flex align-items-center mb-2">
                <Mail size={18} className="me-2" />
                <div>
                    <div>mgmgthantxin@gmail.com</div> 
                </div>
            
              </div>
              <div className="d-flex align-items-center">
                <MapPin size={18} className="me-2" />
                <span>149(5-B), 48th Street <br /> Botatuang Township, Yangon</span>
              </div>
            </div>

            <h6 className="fw-semibold mb-2">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><Facebook size={23} /></a>
              <a href="#" className="text-white"><Instagram size={23} /></a>
              <a href="#" className="text-white"><Youtube size={23} /></a>
            </div>
          </div>
        </div>

        {/* Divider and copyright */}
        <hr className="border-white mt-5" />
        <div className="text-center py-3">
          <p className="mb-0 small">
            Copyright © 2025 Tech 79Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
