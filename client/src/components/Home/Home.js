import React, { Component } from 'react'
import CommentBox from '../Comments/'

import {Button} from 'reactstrap'
import HeaderBar from '../Header/header.js'
// Need to create a add icon

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h1>Home</h1>
                <CommentBox/>
            </div>
        )
    }

}
    

export default Home;