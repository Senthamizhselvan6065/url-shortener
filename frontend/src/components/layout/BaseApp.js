import React from 'react';
import {Link} from 'react-router-dom';
import { DiGhostSmall } from "react-icons/di";
import '../layout/base.css';

const BaseApp = ({children}) => {
  return (
    <div className='base-app-container'>
         <header>
            <div className="logo">
                <h2><span className='icon-logo'><DiGhostSmall /></span>Url Shortener</h2>
            </div>
             <ul className='navigation-link'>
                <li><Link id='link' to='/'>Home</Link></li>
                <li><Link id='link' to='/url/shortener'>Url Shortener</Link></li>
                <li><Link id='link' to='/register'>Sign in</Link></li>
                <li><Link id='link' to='/login'>Sign up</Link></li>
                <li><Link id='link' to='/contact'>Contact</Link></li>
             </ul>
         </header> 
         <div className="children">{children}</div>
    </div>
  )
}

export default BaseApp