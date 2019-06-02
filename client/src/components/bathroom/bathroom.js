import React from 'react'

const Bathroomform = ({ bathroom, handleLikebutton, likecount, value, handleCommentBtn }) =>
    <div>
        {bathroom.map(({ location, image, gender, stalls, level, caption, comments, cmt }) => (
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
                    <input id="comment" type="text" value={cmt} />
                    <button id="CmtBtn" onClick={handleCommentBtn} >Comment</button>
                </div>
            </div>
        ))}
    </div>


export default Bathroomform;