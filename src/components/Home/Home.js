import React, { useState } from 'react';
import './Home.css'
import pi from '../../raspberry-pi.jpg';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReviews();
    const review = reviews.slice(0, 3);
    // console.log(review);

    return (
        <div className=''>
            <div className="product-container">
                <div className="text-container">
                    <h1 className='text-5xl font-bold text-slate-900'>Most Usefull Device</h1>
                    <h1 className='text-5xl font-bold text-sky-700'>Buld Your Smart Device</h1>
                    <p>You'll recognise the price along with the basic shape and size, so you can simply drop your new Raspberry Pi into your old projects for an upgrade; and as always, we've kept all our software backwards-compatible, so what you create on a Raspberry Pi 4 will work on any older models you own too.</p>
                    <button className='rounded-lg bg-slate-200 text-3xl p-4 text-slate-700 mx-8 my-4'>Live Demo</button>
                </div>
                <div className="img-container">
                    <img src={pi} alt="" />
                </div>
            </div>
            <section className='reviews-section grid justify-items-center'>
                <h2 className='text-2xl font-bold text-slate-900' >Customer Reviews (3)</h2>
                <div className='review-container'>
                    {
                        review.map(rview => <Review key={rview.id} review={rview}></Review>)
                    }
                </div>
                <Link to='reviews'>
                    <button className='bg-slate-900 text-white font-light rounded-lg text-xl px-4 py-1'>See all reviews</button>
                </Link>
            </section>
        </div>
    );
};

export default Home;