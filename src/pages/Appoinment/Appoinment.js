import React, { useState } from 'react'
import Able from './Able'
import AppoinmentBanner from './AppoinmentBanner'
import Footers from './Footers'


const Appoinment =()=> {
    const [date,setDate] = useState(new Date());

    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <Able date={date}></Able>
            <Footers></Footers>
        </div>
    )
}

export default Appoinment
