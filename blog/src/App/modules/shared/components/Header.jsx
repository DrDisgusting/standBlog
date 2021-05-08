import React from 'react'; 

import { Link } from 'react-router-dom';

const Header=()=> {

    return(

            <div>
               <div class=" stickey top-0 flex  h-24 items-center ">
                   <div class="absolute  w-auto left-20 flex justify-center">
                     <h2 class="font-black text-2xl text-black font-sans" >STAND BLOG<span class="text-4xl text-yellow-600 font-serif ">.</span></h2>
                   </div>
                   
                   <div class="absolute w-auto right-20 ">
                      <ul class="flex space-x-8 font-black text-basic font-another text-black ">
                         <li class="text-yellow-600"><Link to="" >HOME</Link></li>
                         <li ><Link to="/aboutus" class="hover:text-yellow-600">ABOUT US</Link></li>
                         <li><Link to="/blogentries" class="hover:text-yellow-600">BLOG ENTRIES</Link></li>
                         <li><Link to="/postdetails/10" class="hover:text-yellow-600">POST DETAILS</Link></li>
                         <li><Link to="/contactus" class="hover:text-yellow-600">CONTACT US</Link></li>
                       </ul>
                     </div>
                   
                </div>
                </div>    
              
         
    )
}

export default Header;