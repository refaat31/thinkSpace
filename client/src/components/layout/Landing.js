import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>thinkSpace</h1>
          <p className='lead'>A place to ponder, discuss and share ideas!</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
          <h5><span>Photo by <a href="https://unsplash.com/@bendavisual?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Benjamin Davies</a> on <a href="https://unsplash.com/s/photos/thinking?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></h5>
        </div>
      </div>
    </section>
  );
};

export default Landing;
