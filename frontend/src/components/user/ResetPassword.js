import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlinePassword } from "react-icons/md";
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { reset } from '../../helper/apiCalls';
import Loader from '../Loader';
import { resetPasswordValidation } from '../../helper/validate';

const ResetPassword = () => {

  const formik = useFormik({
    initialValues: {
         password: "",
         confirmPassword: ""
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => {
        registerApiCall(values)
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const {token} = useParams();
  const registerApiCall = async values => {
      try {
        setIsLoading(true)
          const user = await reset(token, values);
          toast.success(user.data.message)
          if(user.data.success === true){
              window.close()
          }
      } catch (error) {
          toast.error(error.response.data.message)
          setIsLoading(false)
      }
  }
 
  return (
    <div className='container'>
    {isLoading ? <Loader /> :
        <div className="reset-card card">
           <h2>Reset Password</h2>
           <p>Create a new password!</p>
           <form onSubmit={formik.handleSubmit}>
               <div className="input-icon-field">
                    <span className="icon"><MdOutlinePassword /></span>
                    <input {...formik.getFieldProps('password')}type="text" placeholder='New password...'/>
               </div>
               <div className="input-icon-field">
                   <span className="icon"><MdOutlinePassword /></span>
                  <input {...formik.getFieldProps('confirmPassword')} type="text" placeholder='Confirm password...'/>
               </div>
              <button type="submit" disabled={isLoading}>Update</button>
           </form>
           <span className="navigation-link"><Link id='link' to='/login'>Back</Link></span>  
        </div> 
    }
 </div> 
  )
}

export default ResetPassword