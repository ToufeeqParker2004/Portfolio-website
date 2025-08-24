import React from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import service_Data from '../../assets/services_data'

const Services = () => {
  return (
    <div id='Services' className='services'>
      <div className="service-titles">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {service_Data.map((service,index)=>{
          return <div  key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services