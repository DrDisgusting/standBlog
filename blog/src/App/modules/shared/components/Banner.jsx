import React from 'react'

const Banner=(props)=>
{
     return(
      <div class="pt-5">
        <div class="relative ml-3 bg-aboutUsBg bg-cover h-80">
           
           <div class="absolute  top-32 left-20 space-y-4">
               <h2 class="font-another text-lg text-yellow-600 font-black ">{props.headingOne}</h2>
               <h2 class="font-another text-3xl text-white font-black">{props.headingTwo}</h2>
           </div>
           
        </div>
        </div>
     )

}

export default Banner;