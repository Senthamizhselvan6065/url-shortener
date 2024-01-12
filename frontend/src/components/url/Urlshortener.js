import React from 'react';
import '../styles/url-short.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { lognUrl } from '../../helper/apiCalls';
import { APPState } from '../../helper/ContextApi';
import toast from 'react-hot-toast';


const Urlshortener = () => {
  const formik = useFormik({
    initialValues: {
        originalUrl: ""
    },
    validate: "",
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => {
        longUrlCreste(values)
    }

  })

  const navigate = useNavigate();
  const {url, setUrl} = APPState()
  const longUrlCreste = async (values) => {
     try {
        let URL = await lognUrl(values);
        toast.success(URL.data.message)
        setUrl([...url, URL.data.url])
        if(URL.data.success === true) {
            navigate('/short/url')
        }
     } catch (error) {
        toast.error(error.response.data.message);
     }
  }

  return (
    <div className='url-shortener-container'>
         <div className="title">
            <h3 onClick={() => navigate('/')}>Home</h3>
            <h2>Short Url</h2>
            <h3 onClick={() => navigate('/short/url')}>Click Count</h3>
         </div>
        <div className="url-container">
            <h3>Paste the URL to be shortened</h3>
                <form className="url-card" onSubmit={formik.handleSubmit}>
                    <input {...formik.getFieldProps('originalUrl')} type="text" placeholder='Enter the link here...'/>
                    <button type='submit'>Shorten Url</button>
                </form>
            <p>ShortURL is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened link making it easy to share</p>   
        </div>
        <div className="url-content">
           <h3>Want More? Try Premium Features!</h3>
           <p>Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, app integrations and support</p>
           <Link id='link' to='/register'>Create Account</Link>
        </div>
    </div>
  )
}

export default Urlshortener