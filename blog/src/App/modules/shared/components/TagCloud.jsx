import React from 'react';

const TagCloud=()=>
{
    return(

            <div class="w-96  space-y-5">
             <br></br>
             <div class="font-another font-black text-lg">
                 <h2>TAG CLOUDS</h2>
             </div>
             <hr class="font-another border-gray-500 border-solid w-5/6"></hr>

             <div>
                 <ul class="flex space-x-4 font-another text-sm">
                     <li class="hover:bg-yellow-600 hover:text-white">
                         <button class="border-gray-500 border-solid border-2 h-10 w-24">Lifestyle</button>
                     </li>
                     <li  class="hover:bg-yellow-600 hover:text-white">
                        <button class="border-gray-500 border-solid border-2 h-10 w-24">Creative</button>
                     </li>
                     <li class="hover:bg-yellow-600 hover:text-white">
                       <button class="border-gray-500 border-solid border-2 h-10 w-24">HTML5</button>
                     </li>
                 </ul>
             </div>
             <div>
                 <ul class="flex space-x-4 font-another text-sm">
                     <li class="hover:bg-yellow-600 hover:text-white">
                         <button class="border-gray-500 border-solid border-2 h-10 w-24">Inspiration</button>
                     </li>
                     <li class="hover:bg-yellow-600 hover:text-white">
                        <button class="border-gray-500 border-solid border-2 h-10 w-24">Motivation</button>
                     </li>
                     <li class="hover:bg-yellow-600 hover:text-white">
                       <button class="border-gray-500 border-solid border-2 h-10 w-24">PSD</button>
                     </li>
                 </ul>
             </div>
             <button class="border-gray-500 border-solid border-2 h-10 w-24 font-another text-sm hover:bg-yellow-600 hover:text-white">Responsive</button>
             
            
            </div>
             
    )
}

export default TagCloud;