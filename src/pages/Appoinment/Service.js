import React from 'react'

const Service=({service,setTreatment})=> {

    const {name,slots} =service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>
       {
        slots.length 
        
        ?<span>{slots[0]}</span>
        :<span className='text-red-500'>No sLOT available</span> 
       }

          </p>
          <p>{slots.length} space availability</p>
          <div class="card-actions justify-center">
            
            <label 
            disabled={slots.lenght===0}
            onClick={()=>setTreatment(service)}
            for="booking-modal" class="btn btn-primary text-white ">Book Appointment</label>
          </div>
        </div>
      </div>
    )
}

export default Service
