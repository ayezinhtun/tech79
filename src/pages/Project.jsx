import React from 'react'
import healthcare from '../assets/img/healthcare-network-COHQPKr5.jpg';
import { Award, Clock, Globe, Users, ArrowRight } from 'lucide-react';

function Project() {
     const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Ongoing Support" },
    { value: "15+", label: "Industries Served" }
  ];
    const projects = [
        {
            id: 1,
            image: healthcare,
            title: 'Healthcare Network Modernization',
            description: 'Complete Inftastructure overhaul for a 300-bed hospital including network upgrade, cybersecurity implementation, and cloud migration for patient records system. Implemented cutting-edges security protocols and disaster recovery systems.'
        },
          {
            id: 2,
            image: healthcare,
            title: 'Healthcare Network Modernization',
            description: 'Complete Inftastructure overhaul for a 300-bed hospital including network upgrade, cybersecurity implementation, and cloud migration for patient records system. Implemented cutting-edges security protocols and disaster recovery systems.'
        },
          {
            id: 3,
            image: healthcare,
            title: 'Healthcare Network Modernization',
            description: 'Complete Inftastructure overhaul for a 300-bed hospital including network upgrade, cybersecurity implementation, and cloud migration for patient records system. Implemented cutting-edges security protocols and disaster recovery systems.'
        },
          {
            id: 4,
            image: healthcare,
            title: 'Healthcare Network Modernization',
            description: 'Complete Inftastructure overhaul for a 300-bed hospital including network upgrade, cybersecurity implementation, and cloud migration for patient records system. Implemented cutting-edges security protocols and disaster recovery systems.'
        }
    ]
  return (
    <div>
        <section className='container-fluid custom-gradient pb-5'>
            <div className="text-center pb-5 " style={{ paddingTop: '150px' }}>
                <h1 className='fw-bold mb-4' style={{ fontSize: '3rem' }}>Featured Success Stories</h1>
                    <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                        Explore our portfolio showcasing expertise across various industries
                    </p>
            </div>

        <div className="row">
            {projects.map((project, index) => (
                <div className="col-lg-4 mb-3" key={index}>
                <div className="card custom-hover-card2 border h-100">
                    <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title} 
                    style={{ objectFit: 'cover', height: '200px' }} 
                    />

                    <div className="card-body">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text secondColor">{project.description}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
        </section>

        <section className='container-fluid py-5' style={{ backgroundColor: '#1d70b7' }}>
            <div className='text-center'>
                <h1 className='fw-bold text-white'>Why Choose Tech47?</h1>
                <p className='text-white' style={{ lineHeight: 1.625, fontSize: '1.25rem'  }}>
                    Experience the difference with our proven expertise and commitment to <br />
                    excellence
                </p>
          </div>
            <div className='container'>
              <div className="row py-4">
                {stats.map((stat, index) => {

                  return (
                  <div className="text-center col-lg-3" key={index}>
                    <div 
                        className="card border-0 shadow-sm p-4 mx-auto custom-hover-card rounded w-100 custom-hover-card3" 
                        style={{ 
                        background: 'rgba(255, 255, 255, 0.1)', 
                        backdropFilter: 'blur(10px)', 
                        transition: 'all 0.3s ease',
                        }}
                    >
                        <div className="h1 fw-bold mb-2 text-white">{stat.value}</div>
                        <div className="fw-medium opacity-75 text-white">{stat.label}</div>
                    </div>
                    </div>

                  );
                })}
              </div>
            </div>
            
        </section>


        <section>
          <div className='bgPrimary10 py-5 d-flex flex-column align-items-center justify-content-center text-center' style={{ gap: '1rem' }}> 
              <h1 className='fw-bold' style={{ fontSize: '3rem' }}>
                  Ready to Join Our Success Stories?              </h1>
              <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                  Let's discuss how we can transform your business with a customized IT solution. Our expert team is <br /> ready to help you achieve your technology goals.
              </p>

              <div className="btngroup">
                  <a to="" className='btn btn2' style={{ fontSize: '18px' }}>Start Your Project
                      <ArrowRight className='ms-2' size={20}/>
                  </a>
                  {/* <a to="" className='btn btn-outline-primary ms-4' style={{ fontSize: '18px' }}>View Our Services</a> */}

              </div>
          </div>
        </section>
         
        

    </div>
  )
}

export default Project
