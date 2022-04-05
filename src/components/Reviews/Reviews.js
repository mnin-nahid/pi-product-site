import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className="review-container">
                {
                    reviews.map(review => <div className='review'>
                        <p>{review.name}</p>
                        <p>Reating: {review.rating}</p>
                        <p>{review.review}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;