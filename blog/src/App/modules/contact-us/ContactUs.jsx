import React from 'react'
import Banner from '.././shared/components/Banner'
import ContactUsPartOne from '.././core/components/ContactUsPartOne'
import ContactUsPartTwo from './components/ContactUsPartTwo'
import Map from './components/Map'

const ContactUs=()=>
{
    return(

        <div class="bg-white" >
             
            <div class="pb-20">
               <Banner headingOne="CONTACT US"
               headingTwo="LET'S STAY IN TOUCH!">
   
               </Banner>
            </div>

            <div class="flex space-x-24">
                <div class=" w-3/5">
                    <ContactUsPartOne
                    heading="SEND US A MESSAGE"
                    placeholder="YOUR MESSAGE"
                    buttontext="SEND MESSAGE"></ContactUsPartOne>
                </div>
    
                <div>
                    <ContactUsPartTwo />
                </div>
            </div>

            <div>
                <Map />
            </div>

        </div>
    )
}


export default ContactUs;