import React from 'react'
import { FaFacebook } from "react-icons/fa";
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillBehanceCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
const AboutUsIcon=()=>
{
    return(

        <div class="flex  justify-center items-center h-40">
           
           <ul class="flex space-x-4">
               <li class="text-4xl hover:text-yellow-600 text-gray-800">
                  <FaFacebook />
               </li>
               <li class="text-4xl hover:text-yellow-600 text-gray-800">
                   <AiFillTwitterCircle />
               </li>
               <li class="text-4xl hover:text-yellow-600 text-gray-800">
                   <AiFillLinkedin />
               </li>
               <li class="text-4xl hover:text-yellow-600 text-gray-800">
                   <AiFillBehanceCircle />
               </li>
           </ul>

        </div>
    )
}


export default AboutUsIcon;