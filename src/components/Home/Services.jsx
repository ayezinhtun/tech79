import React from 'react'
import { Monitor, Shield, Cloud, Settings, Headphones, Wrench, } from 'lucide-react';

function Services() {
      const services = [
    {
      icon: Monitor,
      title: "Remote Support",
      description: "Fast, secure remote assistance for all your technical issues. Get help without leaving your desk."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches."
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud migration, management, and optimization services for improved efficiency and scalability."
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Proactive system monitoring and maintenance to prevent issues before they impact your business."
    },
    {
      icon: Headphones,
      title: "Help Desk",
      description: "Professional help desk services with multi-level support for all your IT needs."
    },
    {
      icon: Wrench,
      title: "Hardware Setup",
      description: "Complete hardware installation, configuration, and troubleshooting services."
    }
  ];
  return (
    <div className='container-fluid py-5 custom-gradient'>
        <div className='text-center mb-5'>
            <h1 className='fw-bold'>Our IT Services</h1>
            <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                Comprehensive technoloty solutions designed to keep your business <br />
                running smoothly
              </p>
          </div>

          <div className="row">
            {services.map((service, index) => {
              const Icon = service.icon; 

              return (
                <div className="col-lg-4 mb-3" key={index}>
                  <div className="card custom-hover-card p-4 border-0" style={{ gap: '1rem' }}>
                    <div className='bgCustom rounded d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                      <Icon color="blue" size={30} />
                    </div>

                    <h5 className='fw-bold'>{service.title}</h5>
                    <p className='secondColor'>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
  )
}

export default Services
