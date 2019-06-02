import React from 'react'

const Bathroomform = ({bathroom, handleLikebutton, likecount, newcomment, handleInputChange, handleSubmit, comments}) => 
    <div>
        {bathroom.map(({location, image, gender, stalls, level, caption}) => (
            <div>
                <h5>{location}</h5>
                <img src={image} />
                <span>Gender: {gender}</span>
                <span>Stall(s): {stalls}</span>
                <span>On level: {level}</span>
                <p>{caption}  </p> 
                <div>
                    <button onClick={handleLikebutton}>like this</button>
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