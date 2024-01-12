import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { DiGhostSmall } from "react-icons/di";
import '../layout/base.css';
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";


const BaseApp = ({children}) => {

  const [open, setOpen] = useState(false);

  const isOpenMenu = () => setOpen(!open);
  const isCloseMenu = () => setOpen(open);

  return (
    <div className='base-app-container'>
         <header>
            <div className="logo">
                <h2><span className='icon-logo'><DiGhostSmall /></span>Url Shortener</h2>
            </div>
             <ul className={open ? 'navigation-link active' : 'navigation-link'}>
                <li><Link onClick={isCloseMenu} id='link' to='/'>Home</Link></li>
                <li><Link onClick={isCloseMenu} id='link' to='/url/shortener'>Url Shortener</Link></li>
                <li><Link onClick={isCloseMenu} id='link' to='/register'>Sign in</Link></li>
                <li><Link onClick={isCloseMenu} id='link' to='/login'>Sign up</Link></li>
                <li><Link onClick={isCloseMenu} id='link' to='/contact'>Contact</Link></li>
             </ul>
             <div className="mobile-view" onClick={isOpenMenu}>
                {open ? <AiOutlineClose /> : <SlMenu />}
             </div>
         </header> 
         <div className="children">{children}</div>
    </div>
  )
}

export default BaseApp