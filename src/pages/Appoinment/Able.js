import React, { useEffect, useState } from 'react'
import { format} from 'date-fns'
import Service from './Service';
import BookingModal from './BookingModal';

const Able=({date}) => {

    const [services,setServices]= useState([]);
    const [treatment,setTreatment] =useState(null);

      useEffect(( ) =>{

        fetch('http://localhost:27017/service')
        .then(res=>res.json())
        .then(data => setServices(data));

      },[])

    return (
        <div>
          <h4 className='text-primary font-bold text-center text-2xl'> Avilable appointment on {format(date, 'PP')};</h4> 
        <div className='grid grif-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

      {

         services.map(service=><Service
         
         
         key ={service._id}
         service={service}
         setTreatment={setTreatment}
         
         ></Service>)
      }

        </div>
        {treatment && <BookingModal 
         date={date}
         setTreatment={setTreatment}
         treatment={treatment}></BookingModal>}
        </div>
    )
}

export default Able
