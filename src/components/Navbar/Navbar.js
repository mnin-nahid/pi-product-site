import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navber bg-slate-900 text-white'>
            <h2 className='text-3xl'>PiTechReview</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='reviews'>Reviews</Link>
                <Link to='deshboard'>Deshboard</Link>
                <Link to='blogs'>Blogs</Link>
                <Link to='about'>About</Link>
            </nav>
        </div>
    );
};

export default Navbar;