import React from 'react'
import cloud from '../../assets/img/cloud.png'
import cloudstorage from '../../assets/img/cloud-storage.jpg'

 const projects = [
        {
            id: 1,
            image: cloud,
            title: 'Server Virtualization Project',
            description: 'A server virtualization project uses a hypervisor, or specialized software, to divide a single physical server into multiple isolated virtual servers (VMs), allowing each VM to run its own operating system and applications'
        },
          {
            id: 2,
            image: cloudstorage,
            title: 'Infrastructure as a service (IaaS)',
            description: 'IaaS is a cloud computing model that provides on-demand access to essential IT resources like servers, networking, and storage over the internet on a pay-as-you-go basis.'
        }
    ]

function Upcoming() {
  return (
    <div className='container py-5'>
          <div className='text-center mb-5'>
            <h1 className='fw-bold'>Upcoming Projects</h1>
          
          </div>
        <div className="row">
            {projects.map((project, index) => (
                <div className="col-lg-6 mb-3" key={index}>
                <div className="card custom-hover-card2 border h-100">
                    <div className='card-img-top' style={{ height: '350px'  }}>
                     <img 
                     className='w-100 h-100'
                    src={project.image} 
                    alt={project.title} 
                    style={{ objectFit: 'cover'}} 
                    />
                    </div>
                   

                    <div className="card-body pt-4">
                    <h5 className="card-title fw-bold BlueColor">{project.title}</h5>
                    <p className="card-text secondColor">{project.description}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Upcoming
