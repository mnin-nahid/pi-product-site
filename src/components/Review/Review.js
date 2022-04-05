import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name, review, rating} =props.review;
    // console.log(props.review.name);
    return (
        <div className='review'>
            <div className='user-info'>
                <p className='text-2xl'>{name}</p>
                <p>Rating: {rating}</p>
                
            </div>
            <p>{review}</p>
        </div>
    );
};

export default Review;