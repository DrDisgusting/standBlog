import React from 'react'
import PostDetailsComment from './components/PostDetailsComment'
import HomePost from '.././shared/components/HomePost'
import ContactUsPartOne from '.././core/components/ContactUsPartOne'
import RecentPost from '.././shared/components/RecentPost'
import Categories from '.././shared/components/Categories'
import TagCloud from '.././shared/components/TagCloud'
import Banner from '.././shared/components/Banner'
import Download from '.././shared/components/Download'

import { useParams } from 'react-router-dom';

import axios from 'axios';
import  {useState,useEffect} from 'react';

const PostDetails=()=>
{

    const [posts,setPost]=useState([]);

    useEffect(()=>{
        axios.get('https://api.mocki.io/v1/b6c21961')
         .then(res=>{
             console.log(res);
             setPost(res.data[id])
         })
         .catch(err => {
             console.log(err)
         })
    },[])    


    let {id} = useParams();
    return(

        <div class="bg-white">

             <Banner headingOne="POST DETAILS"
            headingTwo="SINGLE BLOG POST">

            </Banner>

            <Download />

            <div class="flex">
                  <div class="flex flex-col space-y-7">
                        <HomePost divImage={posts.imagePath}
                          divOneValueOne={posts.title}
                          divOneValueTwo={posts.subTitle}
                          divOneValueThree={posts.publishedDate}
                          divTwoValue={posts.content}
                          divThreeValueOne="HTML CSS,Photoshop"
                          divThreeValueTwo={posts.tags}>
                     
                          </HomePost>
          
                         
          
                         <div class="ml-20"> <PostDetailsComment /></div>
                          <div class="pb-20 w-11/12">
                          <ContactUsPartOne
                         heading="YOUR COMMENT"
                         placeholder="TYOE YOUR COMMENT"
                         buttontext="SUBMIT"></ContactUsPartOne>
                          </div>
                  
                  </div>
      
                  <div>
                     <RecentPost />
                     <Categories />
                     <TagCloud />
                  </div>

            </div>

        </div>
    )
}


export default PostDetails;