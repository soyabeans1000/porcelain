import React from 'react'

const Bathroomform = ({bathroom, handleLikebutton, likecount, newcomment, handleInputChange, handleSubmit, handledelete, comments}) => {
    const loggedInUser = parseInt(localStorage.getItem('userId'))
    return <div>
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
                    <button onClick={handleLikebutton}>like this</button>
                    {likecount}
                </div>
                <div>
                    {comments.sort(function(a, b){
                        var keyA = new Date(a.createdAt),
                            keyB = new Date(b.createdAt);
                        if(keyA < keyB) return -1;
                        if(keyA > keyB) return 1;
                        return 0;
                    }).map(({username, comment, userId, id}, index) => {
                        console.log('here is the lastest id::::::: ', id)
                        return (
                        <div>
                            <span>{username}: </span>
                            <span>{comment}</span>
                           { loggedInUser === userId ? <button id={id} value={id} onClick={handledelete}>X</button> : null }
                        </div>
                    )})}
                </div>
                <div>
                    <form className="comment-form" id="commentform">
                        <div className="comment-form-fields">
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
}

export default Bathroomform;