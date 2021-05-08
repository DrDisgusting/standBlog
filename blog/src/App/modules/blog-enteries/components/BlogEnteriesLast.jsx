import React from 'react';

const BlogEnteriesLast=()=>
{


    return(

        <div class="relative  h-48">

            <div class="absolute top-10 left-96 ">
            
                 <ul class="flex space-x-3">
                     <li class="border-solid border-2 border-gray-500 h-11 w-11 flex justify-center items-center hover:text-yellow-600">
                         <button>1</button>
                     </li>
     
                     <li class="border-solid border-2 border-gray-500 h-11 w-11 flex justify-center items-center bg-yellow-600 text-white">
                        <button>2</button>
                     </li>
     
                     <li class="border-solid border-2 border-gray-500 h-11 w-11 flex justify-center items-center hover:text-yellow-600">
                        <button>3</button>
                     </li>
     
                     <li class="border-solid border-2 border-gray-500 h-11 w-11 flex justify-center items-center hover:text-yellow-600">
                        <button> 4 </button>
                     </li>
                 </ul>

            </div>

        </div>
    )
}


export default BlogEnteriesLast;