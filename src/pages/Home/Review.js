import React from 'react'

const Review=(Review)=> {
  
    return (
        <div class="card lg:max-w w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    
    <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
    <div class="">
    <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={Review.img} />
  </div>
</div>
     <div>


      <h4 className='text-xl '>{Review.name}</h4>
      <p>{Review.location}</p>
     </div>
    </div>
  </div>
</div>
    )
}

export default Review 
