import React from 'react';
import Banner from '.././shared/components/Banner'
import Download from '.././shared/components/Download'
import BlogEnteriesOne from './components/BlogEnteriesOne'
import RecentPost from '.././shared/components/RecentPost'
import Categories from '.././shared/components/Categories'
import TagCloud from '.././shared/components/TagCloud'
import BlogEnteriesLast from './components/BlogEnteriesLast';
import axios from 'axios';
import  {useState,useEffect} from 'react';

const BlogEnteries=()=>
{
    const [posts,setPost]=useState([]);
    const [po,setPo]=useState([]);
    const [search,setSearch]=useState('');

    useEffect(()=>{
        axios.get('https://api.mocki.io/v1/b6c21961')
         .then(res=>{
             console.log(res);
             setPost(res.data)
             setPo(res.data)
         })
         .catch(err => {
             console.log(err)
         })
    },[])    


   const DeleteObject=(indexToDelete)=>{

    let newPost = [...posts];
    newPost.splice(indexToDelete,1);
    setPost(newPost);
    alert("key "+indexToDelete+" is deleted")

    }

    const handle=(data)=>
    {
        setSearch(data.target.value);
    }
    let k=0

    return(

          <div >

        <div class="flex space-x-14 ">     

            <div class="grid grid-cols-2 gap-4 ml-16">  

               {
                 posts.map((post,index)=>(
                     
                    <BlogEnteriesOne currentIndex={index}
                    headingOne={post.title}
                    headingTwo={post.subTitle}
                    image={post.imagePath}
                    author={post.author}
                    publishedDate={post.publishedDate}
                    comment={post.comment}
                    paragraphTwo={post.content}
                    paragraphThree={post.tags}
                    deleteObj={DeleteObject}
                    ></BlogEnteriesOne>
                 ))
                }

            </div>

            <div>
             
                  <input placeholder="Type To Search..." class="w-11/12 h-11  font-another text-sm border-gray-500 border-solid border-2 p-5" onChange={handle}></input>
                  <br></br>
                  <br></br>
                  <h2 class="font-black text-black font-another text-lg">RECENT POSTS</h2>
                 <hr class="border-gray-500 border-solid w-11/12 font-another"></hr>

                 {
                     
                     po.filter((val,index)=>{

                        if(val.subTitle.toLowerCase().includes(search.toLowerCase())){
                            k=k+1;
                        return val
                        }
                     }).map((val)=>{

                        if(k%2==0)
                        {
                           
                            return(
                                <div class="bg-red-500">

                                  <RecentPost heading={val.subTitle}
                                 publishedDate={val.publishedDate}
                                  ></RecentPost>
                                 </div>
                            )
                            
                        }

                        else
                        {
                            return(
                                <div class="bg-yellow-500">
                                  <RecentPost heading={val.subTitle}
                                  publishedDate={val.publishedDate}
                                  ></RecentPost>
                                 </div>
                            )
                        }

                       
                     })
                 }

                 
                     
                 
           
                 <Categories />
                 <TagCloud />
             
         
             </div>

        </div>


           

          </div>




    )
}

export default BlogEnteries;