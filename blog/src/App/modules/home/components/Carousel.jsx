import React from 'react';

const Carousel=()=>
{
    return(
        <div class="  flex flex-row justify-evenly items-center space-x-3 p-4 bg-white">
           <div class="relative h-80  bg-home-01 w-screen bg-cover " >
                 <div class="absolute   bottom-8 left-11 space-y-3 ">
                   <h2 class="text-yellow-500 font-black text-base font-another ">FASHION</h2>
                   <h2 class="text-white font-black text-xl font-another">Morbi Dapibus Condimentum</h2>
                   <p class="text-white text-sm font-medium  font-another">Admin  |  May 12, 2020  |  12 Comments</p>
                 </div>
           </div>
           <div class=" relative  h-80 bg-home-02 w-screen bg-cover ">
                 <div class="absolute  bottom-8 left-11 space-y-3 ">
                   <h2 class="text-yellow-500 font-black text-base font-another ">Nature</h2>
                   <h2 class="text-white font-black text-xl font-another">Donec Porttitor Augue At Velit</h2>
                   <p class="text-white text-sm font-medium  font-another">Admin  |  May 14, 2020  |  24 Comments</p>
                 </div>
           </div>
           <div class=" relative h-80 w-screen bg-home-03 bg-cover">
                 <div class="absolute bottom-8 left-11 space-y-3 ">
                   <h2 class="text-yellow-500 font-black text-base font-another ">LIFESTYLE</h2>
                   <h2 class="text-white font-black text-xl font-another">Best HTML Templates On TemplateMo</h2>
                   <p class="text-white text-sm font-medium  font-another">Admin  |  May 16, 2020  |  36 Comments</p>
                 </div>
           </div>
        </div>

    )
}


export default Carousel;