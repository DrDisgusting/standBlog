import React from 'react';

const AboutUsThree=(props)=>
{

    return(

        <div >
            
              <div class="flex flex-col justify-center items-center space-y-8">
                  <div class=" font-another text-lg font-black text-black">
                     <h2>{props.heading}</h2>
                  </div>
                  <div  class=" font-another text-sm  w-3/4 text-center">
                    <p>{props.paragraph}</p>
                  </div>
                  
                  <hr class="border-gray-500 border-solid w-3/4"></hr>
                  
              </div>
                  <br></br>
                  <br></br>

        </div>
    )
}

export default AboutUsThree;