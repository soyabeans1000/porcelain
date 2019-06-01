import React from 'react'

const Commentedpost = ({posts}) =>
    <div>
        {posts.map(({location, image, username, comment, bathroomId}) => (
            <div className={bathroomId} onClick={e => console.log(e.target.className)}>
                <h5 className={bathroomId}>{location}</h5>
                <img src={image} alt={bathroomId} className={bathroomId} />
                <span className={bathroomId}>{username}: </span>
                <span className={bathroomId}>{comment}</span>
            </div>
        ))}
    </div>

export default Commentedpost