import React from 'react'
import { useHistory } from 'react-router-dom';

const BlogEnteriesOne=(props)=>
{
    const history=useHistory();

    return(

        <div class="border-2 border-gray-500 border-solid flex flex-col space-x-10 space-y-4 ">
            <div>
                <img src={props.image} alt=""></img>
            </div>

            <div class="w-80 pb-5 flex flex-col space-y-8 ">
                
                <div class="flex flex-col space-y-3">
                   <a  onClick={()=>history.push(`/postdetails/${props.currentIndex}`)}   class="font-another text-yellow-600 font-black text-xl cursor-pointer">{props.headingOne}</a>
                   <h2 class="font-another text-black font-black text-xl">{props.headingTwo}</h2>
                   <p class="font-another text-sm ">{props.author}<span> | </span>{props.publishedDate}<span> | </span>{props.comment} Comment</p>
                </div>
                <hr class="border-solid border-gray-500"></hr>
                
                <div class=" w-80">
                  <p class="font-another text-sm leading-5 ">{props.paragraphTwo}</p>
                </div>
               
               <div class="flex flex-col space-y-5">
                  <hr class="border-solid border-gray-500 w-80"></hr>
                   <p class="font-another text-sm leading-5 "> {props.paragraphThree.join(",")}</p>
               </div>
                
               <div>
                   <button class="font-another text-sm text-white bg-yellow-600 p-4" onClick={()=>props.deleteObj(props.currentIndex)}>DELETE</button>
               </div>
               <div>Key is {props.currentIndex}</div>
            </div>
        </div>
    )
}


export default BlogEnteriesOne;