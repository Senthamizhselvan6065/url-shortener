import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import { register } from '../../helper/apiCalls';
import toast from 'react-hot-toast';
import Loader from '../Loader';

const Register = () => {

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
     initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
     },
     validate: "",
     validateOnBlur: false,
     validateOnChange: false,
     onSubmit: values => {
         registerApiCall(values)
     }
  });
 
  const navigate = useNavigate();
  const registerApiCall = async values => {
      try {
          setIsLoading(true)
          const user = await register(values);
          if(user.data.success === true){
               navigate('/url/shortener')
          }
      } catch (error) {
          toast.error(error.response.data.message)
          setIsLoading(false)
      }
  }

  return (
    <div className='container'>
        {isLoading ? <Loader /> : 
           <div className="card">
              <h2>Register Now</h2>
              <form onSubmit={formik.handleSubmit}>
                 <input {...formik.getFieldProps('firstName')} type="text" placeholder='First Name...'/>
                 <input {...formik.getFieldProps('lastName')} type="text" placeholder='Last Name...'/>
                 <input {...formik.getFieldProps('email')} type="text" placeholder='Email...'/>
                 <input {...formik.getFieldProps('password')} type="text" placeholder='Password...'/>
                 <button type="submit" disabled={isLoading}>Register</button>
              </form>
              <span className="navigation-link">Already have an Account? <Link id='link' to='/login'>Login</Link></span>
             <span className="navigation-link"><Link id='link' to='/'>Home</Link></span>  
          </div>
        } 
    </div>
  )
}

export default Register