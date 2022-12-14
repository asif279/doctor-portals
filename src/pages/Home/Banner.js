import React from 'react'

import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button'

const Banner = () =>{
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h2 class="text-5xl font-bold">Your New Smile Start Here</h2>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
    )
}

export default Banner
