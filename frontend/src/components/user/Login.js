import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { login } from '../../helper/apiCalls';
import toast from 'react-hot-toast';
import Loader from '../Loader';
import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";


const Login = () => {

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
       email: "",
       password: ""
    },
    validate: "",
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => {
        loginApiCall(values)
    }
  });


  const navigate = useNavigate();
  const loginApiCall = async values => {
      try {
          setIsLoading(true)
          const user = await login(values);
          let token = user.data.token
          sessionStorage.setItem("token", token)
          if(user.data.success === true){
               navigate('/url/shortener')
          }
      } catch (error) {
          toast.error(error.response.data.message);
          setIsLoading(false)
      }
  }

  return (
    <div className='container'>
        {isLoading ? <Loader /> :
              <div className="login-card card">
                 <h2>Login Now</h2>
                 <form onSubmit={formik.handleSubmit}>
                  <div className="input-icon-field">
                     <span className="icon"><MdOutlineMailLock /></span>
                    <input {...formik.getFieldProps('email')} type="text" placeholder='Email...'/>
                  </div>
                  <div className="input-icon-field">
                     <span className="icon"><MdOutlinePassword /></span>
                    <input {...formik.getFieldProps('password')}type="text" placeholder='Password...'/>
                  </div>
                    <button type="submit" disabled={isLoading}>Login</button>
                 </form>
                 <span className="navigation-link"><Link id='link' to='/forgot/password'>Forgot password?</Link></span>  
                 <span className="navigation-link">Neeaded an Account? <Link id='link' to='/register'>Sign in</Link></span>  
                 <span className="navigation-link"><Link id='link' to='/'>Home</Link></span>  
            </div>
        } 
    </div>
  )
}

export default Login