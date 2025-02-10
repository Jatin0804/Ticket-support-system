import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='not-found-container'>
    <h1>
      404 - Page not Found
    </h1>
    <p>
      Go back to 
      <Link to="/">
        HOME
      </Link>
    </p>
  </div>
);

export default NotFound;
