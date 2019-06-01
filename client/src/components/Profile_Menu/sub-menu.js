import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'

import ProfileLikes from './Likes'
import ProfileComments from './Comments'



class ProfileSubMenu extends React.Component {

  render() {
  return (
   
<>
<BrowserRouter>  
    
      <nav>
        <Link to='/Likes'> Likes </Link>

        <Link to='/Comments'> Comments </Link>


    
      </nav>
  
    <Route exact path="/Likes" component={ProfileLikes} />
    <Route exact path="/Comments" component={ProfileComments} />


    </BrowserRouter>

   
   
  </>
  
  );}
}

export default ProfileSubMenu;