import React from 'react'
import doctor from '../../assets/images/doctor.png'
import Button from '../Shared/Button'
//import appointment from '../../assets/images/appointment.png'
const MakeAppoinment =() =>  {
    return (
        <section style={{
            background: 'url({appointment})'
        }} className='flex justify-center items-center bg-gradient-to-r from-bg-accent to-bg-accent'>

            <div className='flex-1'>
           <img src={doctor}/>
            </div>
            <div className='flex-1' >
            <h3 className='text-xl text-primary'>Appointment</h3>
            <h2 className='text-xl font-bold'>Make an Appoinment Today</h2>
            <p>The field of dentistry or dental medicine includes teeth as well as other aspects of the craniofacial complex including the temporomandibular joint and otherThe field of dentistry or dental medicine includes teeth as well as other aspects of the craniofacial complex including the temporomandibular joint and other ...

</p>
       <Button>Get Started</Button>
            </div>
        </section>
    )
}

export default MakeAppoinment
