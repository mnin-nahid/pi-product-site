import React, { useState } from 'react';
import './Home.css'
import pi from '../../raspberry-pi.jpg';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';

const Home = () => {
    const [reviews] = useReviews();
    const [rendomReview, setRendomReview] = useState([]);
    let random = reviews[Math.floor(Math.random()*reviews.length)];


    return (
        <div className=''>
            <div className="product-container">
                <div className="text-container">
                    <h1 className='text-5xl font-bold text-slate-900'>Most Usefull Device</h1>
                    <h1 className='text-5xl font-bold text-sky-700'>Buld Your Smart Device</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quis placeat fuga, expedita at repellendus similique ab, est quo, recusandae qui libero ipsam praesentium enim eaque? Dolores ullam ad eveniet delectus deleniti veniam minima, odio praesentium similique porro voluptatibus unde labore quisquam accusamus repudiandae quae distinctio aliquam molestias ipsum nemo?</p>
                    <button className='rounded-lg bg-slate-200 text-3xl p-4 text-slate-700 mx-8 my-4'>Live Demo</button>
                </div>
                <div className="img-container">
                    <img src={pi} alt="" />
                </div>
            </div>
            <section className='reviews-section grid justify-items-center'>
                <h2 className='text-2xl font-bold text-slate-900' >Customer Reviews (3)</h2>
                <Link to='reviews'>
                    <button className='bg-slate-900 text-white font-light rounded-lg text-xl px-4 py-1'>See all reviews</button>
                </Link>
            </section>
        </div>
    );
};

export default Home;