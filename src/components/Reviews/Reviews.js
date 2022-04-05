import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>This is reviews section</h2>
            <p>total reviews : {reviews.length}</p>
            <div className="review-container">
                {
                    reviews.map(review => <div className='review'>
                        <p>{review.name}</p>
                        <p>{review.email}</p>
                        <p>{review.body}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;