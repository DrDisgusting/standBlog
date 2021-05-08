import React from 'react';


const Footer=()=>
{
    return(
          <div class="flex flex-col justify-center items-center space-y-10  h-64 bg-gray-800">

              <div >
                  <ul class="flex space-x-4 text-white font-another text-base font-bold">
                      <li>
                          <a href="#" class="hover:text-yellow-600 cursor-pointer">FACEBOOK</a>
                      </li>
                      <li>|</li>
                      <li>
                        <a href="#" class="hover:text-yellow-600 cursor-pointer">TWITTER</a>
                      </li>
                      <li>|</li>
                      <li>
                        <a href="#" class="hover:text-yellow-600 cursor-pointer">BEHANCE</a>
                      </li>
                      <li>|</li>
                      <li>
                        <a href="#" class="hover:text-yellow-600 cursor-pointer">LINKEDIN</a>
                      </li>
                      <li>|</li>
                      <li>
                        <a href="#" class="hover:text-yellow-600 cursor-pointer">DRIBBLE</a>
                      </li>
                  </ul>
              </div>
              
                  <hr class="border-gray-500 border-solid w-11/12"></hr>
          
              <div>
                  <p class="text-white text-xs font-bold font-another ">Copyright 2020 Stand Blog Co. | Design: <a class="text-yellow-600">TemplateMo</a></p>
              </div>
             
          </div>

    )
}

export default Footer;