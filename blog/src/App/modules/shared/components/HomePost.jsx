import React from 'react';

const HomePost=(props)=>
{
    return(

            <div class=" w-5/6 ml-20  border-2 border-gray-500 border-solid mb-10 space-y-5">
                <div class="">
                  <img src={props.divImage} alt=""></img>
                </div>

                <div class=" relative w-3/4 left-10  space-y-3">
                    <h2 class="font-another text-yellow-600 font-black text-xl">{props.divOneValueOne}</h2>
                    <h2 class="font-another text-black font-black text-xl">{props.divOneValueTwo}</h2>
                    <p class="font-another text-sm  text-gray-500">{props.divOneValueThree}</p>

                </div>

                <div class="relative left-10">
                    <hr class="border-gray-500 border-solid w-11/12 font-another"></hr>
                </div>

                <div  class="relative  w-11/12 left-10">
                    <p class="font-another text-sm leading-7 text-gray-500  ">{props.divTwoValue} </p>
                </div>

                <div class="relative left-10">
                    <hr class="font-another border-gray-500 border-solid w-11/12"></hr>
                </div>

                <div class="relative flex justify-center items-center  h-24 w-11/12 left-10">
                   <div>
                       <ul class=" flex flex-row space-x-80">
                           <li>
                               <p class="font-another text-gray-500 text-sm">{props.divThreeValueOne}</p>
                           </li>
                           <li>
                               <p class="font-another text-gray-500 text-sm">{props.divThreeValueTwo}</p>
                           </li>
                       </ul>
                   </div>

                </div>



                
            </div>

    )
}

export default HomePost;