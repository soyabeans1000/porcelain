import React, { Component } from 'react'
import User from '../../../utils/user.js'
import Comments from '../../../utils/comment'
import Bathroom from '../../../utils/bathroom'
import Commentedpost from '../../commentedpost'


class ProfileComments extends React.Component {
  state = {
    posts: [],
    likedbr: [],
    adminstatus: false,
    username:''
}
componentWillMount () {
    let userId = localStorage.getItem('userId')
    User.getOne(userId)
    .then(({data: {username, adminstatus}}) => {
        this.setState({
            adminstatus: adminstatus,
            username: username
        })
    })
    .catch(e => console.log(e))
    let bathrooms = []
    let newarr
    Comments.getAll(userId)
    .then(({data}) => {
        let bathroomid = []
        data.forEach(({bathroom}) => {
            bathroomid.push(bathroom.id)
            newarr = bathroomid.filter((id, index) => {
                return bathroomid.indexOf(id) >= index
            })
        });
        newarr.forEach(num => {
            let username 
            let commentstr
            Bathroom.getOne(num)
            .then(({data}) => {
                data.comments.forEach(comment => {
                    if (comment.userId === parseInt(userId)) {
                        username = comment.user.username
                        commentstr = comment.comments
                    }
                })
                bathrooms.push({
                    location: `${data.street} ${data.city}, ${data.state} ${data.zipcode}`,
                    image: data.image,
                    username: username,
                    comment: commentstr,
                    bathroomId: data.id 
                })
                this.setState({posts: bathrooms})
            })
        })
    })
    .catch(e => console.log(e))
}


render() {
  return (
      <div>
          <h1 className="username">{this.state.username}</h1>
           <Commentedpost posts={this.state.posts} />
      </div>
  )
}

}


export default ProfileComments
















