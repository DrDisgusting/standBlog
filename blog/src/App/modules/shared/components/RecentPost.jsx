import React from 'react';

const RecentPost=(props)=>
{
    return(

            <div class="w-96 space-y-5">
             
            
             <div class="space-y-5">
                 <div class="space-y-3">
                     <h2 class="font-black text-black font-another text-lg">{props.heading}</h2>
                     <p class="font-another text-sm  text-gray-500">{props.publishedDate}</p>
                 </div>
                 <hr class="border-gray-500 border-solid w-11/12 font-another"></hr>

            </div>
                 
            </div>
             
    )
}

export default RecentPost;