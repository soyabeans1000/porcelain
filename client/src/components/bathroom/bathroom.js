import React from 'react'

const Bathroomform = ({ bathroom, handleLikebutton, likecount, handleInputChange, handleCommentBtn, newcomment }) =>
    <div>
        {bathroom.map(({ location, image, gender, stalls, level, caption, comments }) => (
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
                    <label htmlFor="comment">Bathroom Comment </label>
                    <div>
                        {comments.map(({ username, comment }) => (
                            <div>
                                <span>{username}: </span>
                                <span>{comment}</span>
                            </div>
                        ))}
                    </div>
                    <textarea placeholder="Comment" rows="2" id="newcomment" value={newcomment} onChange={handleInputChange}></textarea>
                    <button id="CmtBtn" onClick={handleCommentBtn} >Comment</button>
                </div>
            </div>
        ))}
    </div>


export default Bathroomform;