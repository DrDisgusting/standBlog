import React from 'react';

const Categories=()=>
{
    return(

            <div class="w-96  space-y-5">
             <br></br>
             <div>
                 <h2 class="font-another font-black text-lg text-black"> CATEGORIES</h2>
             </div>
             <hr class="font-another border-gray-500 border-solid w-11/12"></hr>
             <div >
                 <ul class="space-y-3 font-another font-black text-m text-black">
                     <li>
                         <a class="hover:text-yellow-600 cursor-pointer">- Nature Lifestyle</a>
                     </li>
                     <li>
                         <a class="hover:text-yellow-600 cursor-pointer">- Awesome Layouts</a>

                     </li>
                     <li>
                         <a class="hover:text-yellow-600 cursor-pointer">- Creative Ideas</a>
                     </li>
                     <li>
                         <a class="hover:text-yellow-600 cursor-pointer">- Responsive Templates</a>
                     </li>
                     <li>
                         <a class="hover:text-yellow-600 cursor-pointer">- HTML5/CSS Templates</a>
                     </li>
                     <li>
                         <a class="hover:text-yellow-600 cursor-pointer">- Creative & Unique</a>
                     </li>
                 </ul>
                </div>
            </div>
             
    )
}

export default Categories;