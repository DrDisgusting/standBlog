import Home  from './App/modules/home/Home.jsx'
import AboutUs  from './App/modules/about-us/AboutUs.jsx'
import BlogEnteries  from './App/modules/blog-enteries/BlogEnteries.jsx'
import ContactUs  from './App/modules/contact-us/ContactUs.jsx'
import PostDetails from './App/modules/post-details/PostDetails'
import Footer from './App/modules/core/components/Footer'
import Header from './App/modules/shared/components/Header'
import NoMatch from './App/modules/shared/components/NoMatch'

import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      
    <div className="App"  > 
           <div  class="fixed z-20  w-full bg-gray-100 top-0 shadow-lg"> 
             <Header />
           </div> 
        <div class="h-full mt-24">       
          <Switch>
            
            <Route exact path="/">
             
             <Home />
            
            </Route>
            
            
            <Route path="/aboutus">
             
             <AboutUs />
            
            </Route>
            
            
            <Route path="/blogentries">
             
             <BlogEnteries />
            
            </Route>
            
            
            <Route path="/contactus">
             
             <ContactUs />
            
            </Route>
            
            <Route path="/postdetails/:id">
             
             <PostDetails />
            
            </Route>

            <Route path="*">
               <NoMatch />
            </Route>

          </Switch>
          <Footer />
        </div>

      

        
        
    </div>
    </Router>
  );
}

export default App;

