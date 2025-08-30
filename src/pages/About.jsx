import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Clock, Coffee, Globe, Heart, Lightbulb, Mail, Phone, Target, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  const stats = [
    { icon: Users, value: "50+", label: "Trusted Clients" },
    { icon: Award, value: "5+", label: "Experienced Professionals" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    // { icon: Globe, value: "99.9%", label: "Uptime Guarantee" }
  ];

  const teams = [
    { name: "Michael Chen", role: "Chief Technology Officer", experience: "15+ years in enterprise IT solutions" },
    { name: "Sarah Rodriguez", role: "Lead Security Specialist", experience: "12+ years in cybersecurity and compliance" },
    { name: "David Thompson", role: "Cloud Infrastructure Manager", experience: "10+ years in cloud migration and management" },
    { name: "Lisa Wang", role: "Help Desk Manager", experience: "8+ years in technical support and customer service" }
  ];


  const benefits = [
  {
    title: "Competitive Compensation",
    description: "Industry-leading salaries, equity options, and comprehensive benefits packages.",
    icon: Award
  },
  {
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and regular team retreats around the world.",
    icon: Globe
  },
  {
    title: "Learning & Development",
    description: "Continuous learning with dedicated budgets for courses, conferences, and certifications.",
    icon: BookOpen
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs.",
    icon: Heart
  },
  {
    title: "Modern Equipment",
    description: "Latest hardware and software to ensure you have the tools you need to succeed.",
    icon: Zap
  },
  {
    title: "Work-Life Balance",
    description: "Generous PTO, parental leave, and policies that respect your time outside of work.",
    icon: Coffee
  }
];
  return (
    <div>

      {/* About Header */}
      <section className="text-center pb-5 custom-gradient" style={{ paddingTop: '150px' }}>
        <motion.h1
          className='fw-bold mb-4 headingGradient'
          style={{ fontSize: '3rem' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Tech79 Solutions
        </motion.h1>
        <motion.p
          className='secondColor'
          style={{ lineHeight: 1.625, fontSize: '1.25rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Since 2024, we have been the trusted IT partner for businesses across the region, 
          providing <br /> comprehensive technology solutions that drive growth and efficiency.
        </motion.p>
      </section>

      {/* Stats Section */}
      <section className="row py-4" style={{ backgroundColor: '#1d70b7' }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              className="col-lg-4 mb-3"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center p-4 border-0" style={{ gap: '1rem' }}>
                <div className='rounded-circle d-flex align-items-center justify-content-center bg-white' style={{ width: '50px', height: '50px' }}>
                  <Icon color="blue" size={30} />
                </div>
                <h5 className='fw-bold text-white' style={{ fontSize: '2rem' }}>{stat.value}</h5>
                <p className='text-center text-white' style={{ fontSize: '1.25rem' }}>{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Vision & Mission */}
    <section className="py-5">
      <div className="container">
        <div className="row g-4 d-flex align-items-stretch">

          {/* Our Vision */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card shadow rounded-3 p-4 h-100" style={{ backgroundColor: "#fff" }}>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle me-3"
                  style={{ width: "48px", height: "48px", backgroundColor: "#DBEAFE" }}
                >
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <h3 className="h4 mb-0 text-dark fw-bold">Our Vision</h3>
              </div>
              <ul className="text-secondary lh-lg mb-0">
                <li>To become the most trusted and leading IT service provider in Myanmar and the region.</li>
                <li>To drive digital transformation with reliable, secure, and innovative technology solutions.</li>
                <li>To empower businesses through seamless IT support tailored to their growth.</li>
                <li>To deliver excellence by embracing cutting-edge tools and global standards.</li>
                <li>To be a long-term strategic partner in our clients’ technology journey.</li>
              </ul>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card shadow rounded-3 p-4 h-100" style={{ backgroundColor: "#fff" }}>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle me-3"
                  style={{ width: "48px", height: "48px", backgroundColor: "#DBEAFE" }}
                >
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="h4 mb-0 text-dark fw-bold">Our Mission</h3>
              </div>
              <ul className="text-secondary lh-lg mb-0">
                <li>To provide fast, efficient, and cost-effective IT support services.</li>
                <li>To understand and meet each client’s unique technological needs.</li>
                <li>To maintain the highest standards of quality, security, and customer satisfaction.</li>
                <li>To build a skilled, responsible, and continuously improving technical team.</li>
                <li>To create scalable IT solutions that enable sustainable business growth.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

      {/* About Company */}
      <motion.section
        className='custom-gradient py-5'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-fluid">
          <h1 className='fw-bold text-center mb-5'>About Company</h1>
          <p className="mb-6 secondColor text-center" style={{ lineHeight: '1.625', fontSize: '1.25rem' }}>
            Tech79 Solutions Company Limited is a Myanmar-based IT support and services company founded in July 2025. 
            We specialize in delivering innovative and reliable IT solutions for businesses across various industries. 
            From network setup to cloud services and technical support, we are committed to helping our clients operate smoothly in a digital world.
          </p>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <section className='container-fluid py-5'>
        <div className='text-center mb-5'>
          <h1
            className='fw-bold'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Leadership Team
          </h1>
          <p
            className='secondColor'
            style={{ lineHeight: 1.625, fontSize: '1.25rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experienced professionals dedicated to delivering exceptional IT solutions
          </p>
        </div>

        <div className="row">
          {teams.map((team, index) => (
            <motion.div
              className="col-lg-3 mb-3"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card custom-hover-card d-flex flex-column align-items-center justify-content-center p-4 border-0" style={{ gap: '1rem' }}>
                <div className='bgCustom rounded-circle d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                  <Users color="blue" size={30} />
                </div>
                <h5 className='fw-bold'>{team.name}</h5>
                <h5 className='text-muted'>{team.role}</h5>
                <p className='secondColor text-center'>{team.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Our Team */}
      <section className='custom-gradient py-5'>
        <div className="container text-center">
          <h1
            className='fw-bold'
          >
            Why Join Us
          </h1>
          <p
            className='secondColor'
            style={{ lineHeight: 1.625, fontSize: '1.25rem' }}
          >
            We're always looking for talented individuals who share our passion for technology and exceptional service
          </p>
        </div>

        <div className="container-fluid pt-5">

        {/* Benefits Grid */}
        <div className="row g-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card custom-hover-card p-4 border-0" style={{ gap: '1rem' }}>
                  <div
                    className="rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: '50px', height: '50px', backgroundColor: '#DBEAFE' }}
                  >
                    <Icon color="#1d4ed8" size={30} />
                  </div>

                  <h5 className="fw-bold">{benefit.title}</h5>
                  <p className="text-secondary mb-0">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      </section>

      {/* CTA Section */}
    <section 
  className="bgPrimary10 py-5 d-flex flex-column align-items-center justify-content-center text-center" 
  style={{ gap: "1.5rem" }}
>
  <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
    Ready To Work Together?
  </h1>

  {/* Distinct text */}
  <p className="fw-semibold text-uppercase secondColor" style={{ fontSize: '1.25rem' }}>
    📌 For Job Applications, Please Contact:
  </p>

  {/* Contact Info - Clean Strip */}
  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
    {/* Email */}
    <div
      href="mailto:jobs@example.com" 
      className="d-flex align-items-center text-decoration-none text-dark"
    >
      <Mail className="text-primary me-2" size={22} />
      <span className="fw-semibold">mgmgthantxin@gmail.com</span>
    </div>

    {/* Divider (only shows on desktop) */}
    <span className="d-none d-md-block text-muted">|</span>

    {/* Phone */}
    <div
      href="tel:+1234567890" 
      className="d-flex align-items-center text-decoration-none text-dark"
    >
      <Phone className="text-success me-2" size={22} />
      <span className="fw-semibold">09-780407008</span>
    </div>
  </div>
</section>

    </div>
  );
}

export default About;
