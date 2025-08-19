import React from 'react'

function Statistics() {
  
     const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      description: "Businesses trust us"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "System availability"
    },
    {
      number: "15min",
      label: "Response Time",
      description: "Average support response"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance"
    }
  ];

  return (
    <div className='container-fluid py-5'>
       <div className='text-center mb-5'>
            <h1 className='fw-bold'>Trusted by Business</h1>
            <p className='secondColor' style={{ lineHeight: 1.625, fontSize: '1.25rem' }}>
               Our numbers for themselves - proven results and satisfied customers
              </p>
          </div>

        <div className="row">
            {stats.map((stat, index) => {

              return (
                <div className="col-lg-3 mb-3 text-center" key={index}>
                  <div className="card custom-hover-card p-4 border-0" style={{ gap: '1rem' }}>
                    <h1 className='BlueColor fw-bold'>{stat.number}</h1>
                    <h5 className='fw-bold'>{stat.label}</h5>
                    <p className='secondColor'>{stat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
    </div>
  )
}

export default Statistics
