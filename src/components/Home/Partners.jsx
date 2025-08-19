import { Award, Cpu, Database, Network, Shield } from 'lucide-react';
import React from 'react'
 const achievements = [
    { number: "50+", label: "Industry Certifications" },
    { number: "15+", label: "Technology Partners" },
    { number: "10+", label: "Years of Excellence" },
    { number: "100%", label: "Certified Technicians" }
  ];

    const certifications = [
    {
      icon: Award,
      title: "Microsoft Certified",
      description: "Gold Partner status with expertise in Azure, Microsoft 365, and Windows Server solutions."
    },
    {
      icon: Shield,
      title: "CompTIA Certified",
      description: "Security+, Network+, and A+ certified technicians ensuring industry-standard expertise."
    },
    {
      icon: Shield,
      title: "AWS Partner",
      description: "Certified AWS solutions architect with proven cloud migration and management experience."
    },
    {
      icon: Cpu,
      title: "Intel Technology",
      description: "Intel Technology Provider with access to latest hardware solutions and support."
    },
    {
      icon: Database,
      title: "VMware Certified",
      description: "Virtualization experts certified in VMware vSphere and cloud infrastructure."
    },
    {
      icon: Network,
      title: "Cisco Partners",
      description: "Cisco certified networking professionals for enterprise-grade network solutions."
    }
  ];


function Partners() {
  return (
    <div className='container-fluid py-5 custom-gradient'>
       <div className='text-center mb-5'>
            <h1 className='fw-bold'>Technology Partners & Certifications</h1>
            <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                Back by industry-leading partnerships and certifications that guarantee <br />
                experise and reliability
              </p>
        </div>

         <div className="row mb-5">
            {achievements.map((achievement, index) => {
              return (
                <div className="col-lg-3 mb-3" key={index}>
                  <div className="card d-flex flex-column align-items-center justify-content-center p-4 border-0" style={{ gap: '1rem', backgroundColor: 'rgba(33, 112, 183, 0.1)' }}>
                    <h2 className='fw-bold BlueColor'>{achievement.number}</h2>
                    <p className='secondColor text-center'>{achievement.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            {certifications.map((certification, index) => {
              const Icon = certification.icon; 

              return (
                <div className="col-lg-4 mb-3" key={index}>
                  <div className="card custom-hover-card d-flex flex-column align-items-center justify-content-center p-4 border-0" style={{ gap: '1rem' }}>
                    <div className='bgCustom rounded-1 d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                      <Icon color="blue" size={35} />
                    </div>

                    <h5 className='fw-bold'>{certification.title}</h5>
                    <p className='secondColor text-center'>{certification.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        
        <p className='secondColor text-center mt-3'>Trusted by leading technology vendors and certified to deliver enterprise-grade solutions</p>

    </div>
  )
}

export default Partners
