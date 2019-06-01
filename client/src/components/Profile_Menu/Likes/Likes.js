import React, { Component } from 'react'
import User from '../../../utils/user.js'
import Comments from '../../../utils/comment'
import Bathroom from '../../../utils/bathroom'
import Likes from '../../../utils/likes'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import '../../../pages/Profile/styles.css'

class ProfileLikes extends React.Component {
   state = {
    likedbr: [],
    adminstatus: false,
    username: ''
}


componentWillMount() {
        let userId = localStorage.getItem('userId')
        Likes.getAll(userId)
        .then(({data}) => {
            let likedbr = []
            data.forEach(({bathroom}) => {
                likedbr.push({
                    location: `${bathroom.city}, ${bathroom.state} ${bathroom.zipcode}`,
                    image: bathroom.image
                })
            })
            this.setState({likedbr: likedbr})
            
        })
        .catch(e =>console.log(e))

      }


render() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {this.state.likedbr.map(item => (
                            <div>
                                <Card className="bathroomCard">
                                    <CardImg top width="50%" src={item.image} alt="Card image cap" className="img-fluid" />
                                    <CardBody>
                                        <CardTitle>{item.location}</CardTitle>
                                       
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

}

export default ProfileLikes
