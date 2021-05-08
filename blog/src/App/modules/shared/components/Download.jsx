import React from 'react';

const Download=(props)=>
{
    return(

       <div class="flex justify-center items-center h-80 bg-white">

           <div class="relative  h-36 w-5/6 bg-downloadBackgroundImage bg-cover">
               <div class="absolute left-10  top-10">
                   <h2 class="text-yellow-600 font-black text-xl font-another">Stand Blog HTML5 Template</h2>
               </div>

               <div class="absolute left-10 top-20">
                   <h2 class="text-white font-black text-2xl font-another">Creative HTML Template For Bloggers!</h2>
               </div>

               <div class="absolute  right-5 top-10">
                 <button class="bg-yellow-600 text-white font-medium text-xs font-another h-11 w-36">DOWNLOAD NOW!</button>
               </div>
               
            
           </div>
           
       </div>
    )
}

export default Download;