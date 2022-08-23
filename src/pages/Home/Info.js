import React from 'react'
import InfoCard from './InfoCard'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () =>{
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
          <InfoCard bgClass="bg-[#0FCFEC] card lg:card-side bg-base-100 shadow-xl" cardDetail="Our opening time 9.00pm-10.00pm"  cardTitle="Opening Hours" img={clock}></InfoCard> 
          <InfoCard bgClass="bg-accent card lg:card-side bg-base-100 shadow-xl" cardDetail="Our Location Dhaka" cardTitle="Ours Location"  img={marker}>                </InfoCard>
          <InfoCard bgClass="bg-secondary card lg:card-side bg-base-100 shadow-xl" cardDetail="Our Contact Number 0196532222"cardTitle="Contact Us"img={phone}>         </InfoCard> 
        </div>
    )
}

export default Info
