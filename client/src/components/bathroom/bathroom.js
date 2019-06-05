import React from 'react'
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Container, Row, Col, CardText } from 'reactstrap';
import './style.css'

const Bathroomform = ({isliked, bathroom, handleLikebutton, likecount, newcomment, handleInputChange, handleSubmit, comments}) => 
    <div>
        {bathroom.map(({location, image, gender, stalls, level, cleanliness, caption}) => (

<Card className="card_size">
<CardImg src={image}/>
<CardBody>
<CardTitle className="Ctitle"> {location}<br/> {caption} </CardTitle>
  {/* <CardSubtitle>{caption} </CardSubtitle> */}
  <CardText>  <span>  {gender}  &#9679; {stalls} Stall(s) &#9679;Level {level} <br>
  </br> cleanliness: {cleanliness}
              
  <div>
                    {isliked ? <button onClick={handleLikebutton} className="like_button"><IoIosHeart /></button> : <button onClick={handleLikebutton}  className="like_button"><IoIosHeartEmpty /></button>}
                   
                    {likecount}
                </div>
                </span>
              
                <div>
                    {comments.map(({username, comment}) => (
                        <div>
                            <span>{username}: </span>
                            <span>{comment}</span>
                        </div>
                    ))}
                </div>








                
                  
                <div>
                    <form className="comment-form" id="commentform">
                        <div className="comment-form-fields">
                                {/* need to pull in username from sign-in */}
                                {/* <input placeholder="Name" required ref={(input) => this._author = input}></input><br /> */}
                            <textarea placeholder="Comment" rows="2" id="newcomment" value={newcomment} onChange={handleInputChange}></textarea>
                        </div>
                        <div className="comment-form-actions">
                            <button type="submit" onClick={handleSubmit}>Post</button>
                        </div>
                    </form>
                </div>
                
                </CardText>
 
</CardBody>
</Card>









// <!-- dont touch here -->
        ))}
    </div>


export default Bathroomform;