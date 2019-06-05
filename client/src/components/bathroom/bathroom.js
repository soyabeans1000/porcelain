import React from 'react'
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Bathroomform = ({isliked, bathroom, handleLikebutton, likecount, newcomment, handleInputChange, handleSubmit, comments}) => 
    <div>
        {bathroom.map(({location, image, gender, stalls, level, cleanliness, caption}) => (
            <div>
                <h5>{location}</h5>
                <img src={image} />
                <span>Gender: {gender}</span>
                <span>Stall(s): {stalls}</span>
                <span>On level: {level}</span>
                <span>cleanliness: {cleanliness}</span>
                <p>{caption}  </p> 
                <div>
                    {isliked ? <button onClick={handleLikebutton}><IoIosHeart /></button> : <button onClick={handleLikebutton}><IoIosHeartEmpty /></button>}
                    {/* <button onClick={handleLikebutton}></button> */}
                    {likecount}
                </div>
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
            </div>
        ))}
    </div>


export default Bathroomform;