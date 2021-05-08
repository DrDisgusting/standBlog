import React from 'react'

const AboutUsTwo=()=>
{

    return(
             
        <div class="flex flex-col space-y-20 ">
              
              <div class="flex justify-center ">
                  <img src="./Images/aboutUsTwo.jpg" alt=""></img>
              </div>
             

             <div class="flex flex-col justify-center items-center space-y-10 ">
                 <div class=" w-11/12 font-another text-sm text-center">

                  <p class="leading-6">Please tell your friends about TemplateMo website. 
                      Thank you. You can browse through different categories of templates
                      such as business, <a href="#" class="text-blue-600">portfolio</a>, <a href="#" class="text-blue-600">restaurant</a>, etc.<br></br> Pellentesque quis luctus libero.
                      Maecenas pretium molestie erat, ac tincidunt leo gravida ac. Cras ullamcorper eu ipsum eu sollicitudin. 
                      Fusce vitae commodo turpis.<br></br> Integer ullamcorper purus nec justo mollis fermentum. 
                      Nunc imperdiet erat nec lacinia laoreet.
                  </p>
                  
                 </div>



                 <div class=" w-11/12 font-another text-sm text-center">

                     <p class="leading-6">Maecenas faucibus ullamcorper felis vitae finibus. 
                        Nullam at quam ut lacus aliquam tempor vel sed ipsum. 
                        Donec pellentesque tincidunt imperdiet. Mauris sit amet<br></br> justo vulputate, 
                        cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet,
                         feugiat viverra leo. Phasellus interdum, diam commodo egestas<br></br> rhoncus, turpis nisi 
                         consectetur nibh, in vehicula eros orci vel neque.
                     </p>
                  
                 </div>

                 <hr class="border-gray-500 border-solid w-11/12"></hr>
                 <br></br>
                 <br></br>
             </div>

        </div>

    )
}

export default AboutUsTwo;