import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/page-not-found.css';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
        <h1>404 Page Not Found...</h1>
        <Link id='link'>Home</Link>
    </div>
  )
}

export default PageNotFound