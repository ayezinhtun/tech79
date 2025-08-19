import { Award, Clock, Globe, Users } from 'lucide-react';
import React from 'react'

function About() {
 const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Globe, value: "99.9%", label: "Uptime Guarantee" }
  ];

   const teams = [
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      experience: "15+ years in enterprise IT solutions"
    },
    {
      name: "Sarah Rodriguez",
      role: "Lead Security Specialist",
      experience: "12+ years in cybersecurity and compliance"
    },
    {
      name: "David Thompson",
      role: "Cloud Infrastructure Manager",
      experience: "10+ years in cloud migration and management"
    },
    {
      name: "Lisa Wang",
      role: "Help Desk Manager",
      experience: "8+ years in technical support and customer service"
    }
  ];
  return (
    <div>
        <section className="text-center pb-5 custom-gradient" style={{ paddingTop: '150px' }}>
            <h1 className='fw-bold mb-4' style={{ fontSize: '3rem' }}>About Tech 79 Solutions</h1>
                 <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                    Since 2009, we have been the trusted IT partner for businesses across the region, 
                    providing <br /> comprehensive technology solutions that drive growth and efficiency.
                 </p>
        </section>

        <section className="row py-4" style={{ backgroundColor: '#1d70b7' }}>
            {stats.map((stat, index) => {
              const Icon =stat.icon; 

              return (
                <div className="col-lg-3 mb-3" key={index}>
                  <div className="d-flex flex-column align-items-center justify-content-center p-4 border-0" style={{ gap: '1rem' }}>
                    <div className='rounded-circle d-flex align-items-center justify-content-center bg-white' style={{ width: '50px', height: '50px' }}>
                      <Icon color="blue" size={30} />
                    </div>

                    <h5 className='fw-bold text-white'>{stat.value}</h5>
                    <p className='text-center text-white'>{stat.label}</p>
                  </div>
                </div>
              );
            })}
        </section>

         <section className="py-5">
            <div className="container">
                <div className="row g-4 d-flex align-items-stretch">

                {/* Our Mission Card */}
                <div className="col-lg-6">
                    <div className="card h-100 shadow-lg border-0 bg-light bg-opacity-75 py-3">
                    <div className="card-header bg-transparent border-0">
                        <h5 className="card-title text-dark fs-3 fw-bold">Our Mission</h5>
                    </div>
                    <div className="card-body">
                        <p className="secondColor lh-lg">
                        To empower businesses with reliable, innovative technology solutions that eliminate 
                        IT frustrations and enable our clients to focus on what they do best. We believe 
                        technology should be an enabler, not a barrier to success.
                        </p>
                    </div>
                    </div>
                </div>

                {/* Our Vision Card */}
                <div className="col-lg-6">
                    <div className="card h-100 shadow-lg border-0 bg-light bg-opacity-75 py-3">
                    <div className="card-header bg-transparent border-0">
                        <h5 className="card-title fw-bold fs-3 text-dark">Our Vision</h5>
                    </div>
                    <div className="card-body">
                        <p className="secondColor lh-lg">
                        To be the most trusted IT partner in our region, known for exceptional service, 
                        proactive solutions, and genuine care for our clients' success. We envision a 
                        future where every business has access to enterprise-level IT support.
                        </p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </section>

        <section className='custom-gradient py-5'>
            <div className="container">
            <h1 className='fw-bold text-center mb-5'>Our Story</h1>
             <p className="mb-6 secondColor" style={{ lineHeight: '1.625' }} >
                TechVault was founded in 2009 by a team of IT professionals who recognized that small 
                and medium businesses were underserved by traditional IT support models. We started 
                with a simple mission: provide enterprise-level IT support that businesses of all 
                sizes could afford and rely on.
              </p>
              <p className="mb-6 secondColor" style={{ lineHeight: '1.625' }} >
                Over the years, we have grown from a small team of three to a comprehensive IT services 
                company with over 25 specialists. Our growth has been driven by our commitment to 
                exceptional service and our ability to adapt to the rapidly changing technology landscape.
              </p>
              <p className='secondColor' style={{ lineHeight: '1.625' }} >
                Today, we serve over 500 businesses across various industries, from healthcare and 
                finance to manufacturing and retail. Our success is measured not just by our growth, 
                but by the success of our clients and the long-term relationships we have built.
              </p>
            </div>
           
        </section>

        <section className='container-fluid py-5'>
            <div className='text-center mb-5'>
                <h1 className='fw-bold'>Our Leadership Team</h1>
                <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                    Experienced professionals dedicated to delivering exceptional IT solutions
                </p>
          </div>

            <div className="row">
            {teams.map((team, index) => {
              return (
                <div className="col-lg-3 mb-3" key={index}>
                  <div className="card custom-hover-card d-flex flex-column align-items-center justify-content-center p-4 border-0" style={{ gap: '1rem' }}>
                    <div className='bgCustom rounded-circle d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                      <Users color="blue" size={30} />
                    </div>

                    <h5 className='fw-bold'>{team.name}</h5>
                    <h5 className='text-muted'>{team.role}</h5>
                    <p className='secondColor text-center'>{team.experience}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className='bgPrimary10 py-5 d-flex flex-column align-items-center justify-content-center text-center' style={{ gap: '1rem' }}> 
            <h1 className='fw-bold' style={{ fontSize: '3rem' }}>
               Ready To Work Together?
            </h1>
            <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
               Let us show you how our expertise can transform your business technology
            </p>

            <div className="btngroup">
                <a to="" className='btn btn2' style={{ fontSize: '18px' }}>Contact Us Today
                </a>

            </div>
        </section>
    </div>
  )
}

export default About
