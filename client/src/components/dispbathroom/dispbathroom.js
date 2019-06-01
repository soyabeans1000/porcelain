
import React from 'react'

const Dispbathroom = ({bathroom}) => 
    <div>
        {bathroom.map(({street, city, state, zipcode, gender, stalls, level, caption, image, rating, cleanliness}) => (
            <div>
                <h3>{street}, {city}, {state} {zipcode}</h3>
                <img src={image} />
                <span>{gender}</span>
                <span>{stalls}</span>
                <span>{cleanliness}</span>
                <span>{level}</span>
                <p>{caption}</p> 
            </div>
        ))}
    </div>

export default Dispbathroom