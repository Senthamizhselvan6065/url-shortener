import React from 'react';
import BaseApp from '../layout/BaseApp';
import '../styles/home.css';

const Home = () => {
  return (
     <BaseApp>
         <div className='home-container'>
                         <h2>Free URL Shortener</h2>
                 <div className="home-content">
                     <div className="content-box">
                         <h3>Simple and fast URL shortener!</h3>
                         <p>ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received.</p>
                     </div>
                     <div className="content-box">
                         <h3>Shorten, share and track</h3>
                         <p>Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter.</p>
                     </div>
                 </div>
                 <div className="home-content-box">
                    <div className="box">
                        <img src="https://www.shorturl.at/img/icon-like.png" alt="logo" />
                        <h3>Easy</h3>
                        <p>ShortURL is easy and fast, enter the long link to get your shortened link</p>
                    </div>
                    <div className="box">
                        <img src="https://www.shorturl.at/img/icon-url.png" alt="logo" />
                        <h3>Shortened</h3>
                        <p>Use any link, no matter what size, ShortURL always shortens</p>
                    </div>
                    <div className="box">
                        <img src="https://www.shorturl.at/img/icon-secure.png" alt="logo" />
                        <h3>Secure</h3>
                        <p>It is fast and secure, our service has HTTPS protocol and data encryption</p>
                    </div>
                    <div className="box">
                        <img src="https://www.shorturl.at/img/icon-statistics.png" alt="logo" />
                        <h3>Statistics</h3>
                        <p>Check the number of clicks that your shortened URL received</p>
                    </div>
                    <div className="box">
                        <img src="https://www.shorturl.at/img/icon-unique.png" alt="logo" />
                        <h3>Reliable</h3>
                        <p>All links that try to disseminate spam, viruses and malware are deleted</p>
                    </div>
                    <div className="box">
                        <img src="https://www.shorturl.at/img/icon-responsive.png" alt="logo" />
                        <h3>Devices</h3>
                        <p>Compatible with smartphones, tablets and desktop</p>
                    </div>
                 </div>
         </div>
     </BaseApp>
  )
}

export default Home