import React from 'react'
import Banner from '../shared/components/Banner'
import AboutUsTwo from './components/AboutUsTwo'
import AboutUsThree from './components/AboutUsThree'
import AboutUsFour from './components/AboutUsFour'
import AboutUsFive from './components/AboutUsFive'
import AboutUsIcon from './components/AboutUsIcon'

const AboutUs=()=>
{
     return(

        <div class="bg-white">
           <div class="pb-20"> <Banner headingOne="ABOUT US"
            headingTwo="MORE ABOUT US!"> </Banner></div>

            
            <AboutUsTwo />
            

            <div class="flex">

                <AboutUsThree heading="Two-One Donec porttitor augue"
                  paragraph="Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.">
    
                </AboutUsThree>
    
                <AboutUsThree heading="Two-Two Donec porttitor augue"
                  paragraph="Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.">
    
                </AboutUsThree>


            </div>


            <div class="flex">

                 <AboutUsFour heading="1-03 Donec porttitor augue"
                   paragraph="Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.">
     
                 </AboutUsFour>
     
                 <AboutUsFour heading="2-03 Donec porttitor augue"
                   paragraph="Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.">
     
                 </AboutUsFour>
     
                 <AboutUsFour heading="2-03 Donec porttitor augue"
                   paragraph=" Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.">
     
                 </AboutUsFour>

            </div>


            <div class="flex">

                <AboutUsFive  heading="01 Four Columns"
                  paragraph="Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.">
    
                </AboutUsFive>
    
                <AboutUsFive  heading="02 Four Columns"
                  paragraph="Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.">
    
                </AboutUsFive>
    
                <AboutUsFive  heading="03 Four Columns"
                  paragraph="Morbi ac interdum metus. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.">
    
                </AboutUsFive>
    
                <AboutUsFive  heading="04 Four Columns"
                  paragraph="Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.">
    
                </AboutUsFive>

            </div>

            <AboutUsIcon />

        </div>
     )

}

export default AboutUs;