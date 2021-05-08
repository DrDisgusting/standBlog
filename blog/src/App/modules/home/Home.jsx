
import Download from '.././shared/components/Download'
import Carousel from './components/Carousel';
import HomePost from '.././shared/components/HomePost'
import RecentPost from '.././shared/components/RecentPost'
import Categories from '.././shared/components/Categories'
import TagCloud from '.././shared/components/TagCloud'

function Home() {
    return (
      <div className="Home"  class="bg-white"> 
         
         <Carousel />
         <Download />
         
         <div class="flex flex-row space-x-4" > 
             <div>
                <HomePost divImage="./Images/HomePost-1.jpg"
                divOneValueOne="LIFESTYLE"
                divOneValueTwo="Best Template Website For HTML CSS"
                divOneValueThree="Admin | May 31, 2020 | 12 Comments"
                divTwoValue='Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. Contact TemplateMo for more info. Thank you.'
                divThreeValueOne="HTML CSS,Photoshop"
                divThreeValueTwo="Facebook, Twitter">
           
                </HomePost>
    
                <HomePost divImage="./Images/HomePost-2.jpg"
                divOneValueOne="HEALLTHY"
                divOneValueTwo="Etiam Id Diam Vitae Lorem Dictum"
                divOneValueThree="Admin | May 24, 2020 | 36 Comments"
                divTwoValue='You can support us by contributing a little via PayPal. Please contact TemplateMo via Live Chat or Email. If you have any question or feedback about this template, feel free to talk to us. Also, you may check other CSS templates such as multi-page, resume, video, etc.'
                divThreeValueOne="Best Templates, TemplateMo"
                divThreeValueTwo="Facebook, Twitter">
        
               </HomePost>
    
              <HomePost divImage="./Images/HomePost-3.jpg"
               divOneValueOne="FASHION"
               divOneValueTwo="Donec Tincidunt Leo Nec Magna"
               divOneValueThree="Admin | May 14, 2020 | 48 Comments"
               divTwoValue='Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.'
               divThreeValueOne="HTML CSS, Photoshop"
               divThreeValueTwo="Facebook, Twitter">
        
               </HomePost>
             </div>
    
             <div>
               <RecentPost />
               <Categories />
               <TagCloud />
               
              </div>
         </div>

          
              
      </div>
      
    );
  }
  
  export default Home;