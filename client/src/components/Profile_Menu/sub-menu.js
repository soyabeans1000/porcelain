import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'

import ProfileLikes from './Likes'
import ProfileComments from './Comments'



class ProfileSubMenu extends React.Component {

  state = {
    likes: false
  }

  handlelikes = _ => {
    this.setState({likes: true})
    console.log(this.state)
  }

  handlelikestate = _ => {
    if (this.state.likes) {
      return (
        <>
          <Route exact path="/Likes" component={_ => <ProfileLikes toggleredirect={this.props.toggleredirect} />} />
          <Route exact path="/Comments" component={_ => <ProfileComments toggleredirect={this.props.toggleredirect} />} />
        </>
      )
    } else {
      return (
        <ProfileLikes toggleredirect={this.props.toggleredirect}/>
      )
    }
  }

  render() {
  return (
    <>
      <BrowserRouter>  
            <nav>
              <Link to='/Likes' onClick={this.handlelikes} > Likes </Link>
              <Link to='/Comments' onClick={this.handlelikes}> Comments </Link>
            </nav>
          {this.handlelikestate()}
      </BrowserRouter> 
    </>
  )}
}

export default ProfileSubMenu;