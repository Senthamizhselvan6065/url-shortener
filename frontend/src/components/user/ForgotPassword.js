import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { forogt } from '../../helper/apiCalls';
import Loader from '../Loader';
import { MdOutlineMailLock } from "react-icons/md";


const ForgotPassword = () => {

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
       email: "",
    },
    validate: "",
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => {
        forgotApiCall(values)
    }
  })

  const navigate = useNavigate();
  const forgotApiCall = async values => {
      try {
        setIsLoading(true)
          const user = await forogt(values);
          toast.success(user.data.message);
          if(user.data.success === true){
               navigate('/login')
          }
      } catch (error) {
          toast.error(error.response.data.message)
          setIsLoading(false)
      }
    }
 
  return (
    <div className='container'>
       {isLoading ? <Loader /> :
           <div className="forgot-card card">
               <h2>Forgot Password</h2>
               <p>Enter the email address associted with your account and we'll send you a link to reset your password.</p>
             <form onSubmit={formik.handleSubmit}>
              <div className="input-icon-field">
                 <span className="icon"><MdOutlineMailLock /></span>
                 <input {...formik.getFieldProps('email')} type="text" placeholder='Email...'/>
              </div>
                <button type="submit" disabled={isLoading}>Send</button>
            </form>
             <span className="navigation-link"><Link id='link' to='/login'>Back?</Link></span>  
         </div> 
       }
    </div>
  )
}

export default ForgotPassword