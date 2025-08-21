import React from 'react'
import { Clock, Shield, Users, Award, Zap, CheckCircle } from 'lucide-react';


function Features() {
     const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support ensures your business never stops running, no matter the time or day."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols protect your data and systems from cyber threats."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with decades of combined experience in IT support and services."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning service quality recognized by leading industry organizations."
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Average response time under 15 minutes for critical issues and emergencies."
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime",
      description: "Proven track record of maintaining system availability and performance."
    }
  ];
  return (
    <div className='py-5 container-fluid'>
          <div className='text-center mb-5'>
            <h1 className='fw-bold'>Why Choose Tech79-Solutions?</h1>
            <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
                Experience the difference with our proven expertise and commitment to <br />
                excellence
              </p>
          </div>

          <div>
          <div className="row">
            {features.map((feature, index) => {
              const Icon = feature.icon; 

              return (
                <div className="col-lg-4 mb-3" key={index}>
                  <div className="card custom-hover-card d-flex flex-column align-items-center justify-content-center p-4 border-0" style={{ gap: '1rem' }}>
                    <div className='bgCustom rounded-circle d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                      <Icon color="blue" size={30} />
                    </div>

                    <h5 className='fw-bold'>{feature.title}</h5>
                    <p className='secondColor text-center'>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

            
          </div>

      </div>
  )
}

export default Features
