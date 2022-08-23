import React from 'react'

const InfoCard = ({img,bgClass, cardTitle,cardDetail}) =>{
    return (
        <div class={bgClass }>
  <figure className='pl-5'>
    <img src={img} alt="Album"/>
  </figure >
  <div class="card-body text-white" >
    <h2 class="card-title">{cardTitle}</h2>
    <p>{cardDetail}</p>
   
  </div>
</div>
    )
}

export default InfoCard