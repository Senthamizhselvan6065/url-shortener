import React, { useState } from 'react';
import '../styles/short-url.css';
import { useNavigate } from 'react-router-dom';
import { APPState } from '../../helper/ContextApi';
import { BASE_URL, deleteUrl } from '../../helper/apiCalls';
import toast from 'react-hot-toast';
import Loader from '../Loader';

const Shorturl = () => {
    
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {url, setUrl} = APPState();

  const urlDelete = async (id) => {
     try {
        setIsLoading(true)
         const urldelete = await deleteUrl(id);
         toast.success(urldelete.data.message)
         const deleteList = url.filter((url, idx)=>url.shortUrl !== id)
         setUrl(deleteList)
         setIsLoading(false)
     } catch (error) {
         console.log(error);
     }
  } 

  return (
    <div className='short-url-container'>
        <header>
            <h2>Short URL</h2>
            <h3>Your Shortened URL</h3>
            <p>Copy the short link and share it in messages, texts, posts, websites and other locations.</p>
        </header>
           {isLoading ? <Loader /> :
              <div className="short-url-card">
                     {url.length > 0 && url.map((url, idx) => (
                         <div key={idx} className="box">
                             <h3>Short URL :<a href={`${BASE_URL}/url/shortUrl/${url.shortUrl}`} target='_blank' rel="noreferrer">{url.shortUrl}</a></h3>
                             <h3>Long URL :<a href={`${url.originalUrl}`} target='_blank' rel="noreferrer">{url.originalUrl}</a></h3>
                             <h4>Short URL Click Counts : <p>{url.count}</p></h4>
                             <button onClick={()=>urlDelete(url.shortUrl)}>Delete URL</button>
                             <button onClick={()=>navigate('/url/shortener')}>Go to Short URL</button>
                         </div>
                     ))}
                 </div>
           }
    </div>
  )
}

export default Shorturl