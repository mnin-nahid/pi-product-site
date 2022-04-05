import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className="review-container">
                {
                    reviews.map(rview => <Review key={rview.id} review={rview}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;