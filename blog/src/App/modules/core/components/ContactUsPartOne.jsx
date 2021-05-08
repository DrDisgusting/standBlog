import React from 'react'

const ContactUsPartOne=(props)=>
{

    return(

        <div class=" flex flex-col space-y-9 ml-20 ">
            
            <div>
                <h2 class="font-another font-black text-black text-lg">{props.heading}</h2>
            </div>

            <hr class="border-gray-500 w-full"></hr>

            <div class="space-y-7">
                <div class="flex space-x-4">
                    <input class="border-2 border-gray-500 border-solid text-sm font-another pl-3 w-full h-10" placeholder="YOUR NAME"></input>
                    <input class="border-2 border-gray-500 border-solid text-sm font-another pl-3 w-full h-10" placeholder="YOUR EMAIL"></input>
                </div>

                <div>
                    <input class="border-2 border-gray-500 border-solid text-sm font-another pl-3 w-full h-10" placeholder="SUBJECT"></input>
                </div>

                <div>
                    <input class="  border-2 border-gray-500 border-solid text-sm font-another w-full h-40  " placeholder={props.placeholder}></input>
                </div>
            </div>
            <div>
                <button class="text-sm font-another text-white bg-yellow-600 p-3">{props.buttontext}</button>
            </div>

        </div>
    )
}

export default ContactUsPartOne;