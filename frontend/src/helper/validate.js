import toast from 'react-hot-toast';

/* validation register page */
export const registerValidation = async values =>{
    let errors = {}
     errors = await registerValidate(values);
     errors = await emailValidate(values);
     errors = await passwordValidate(values)
    return errors;
}

/* validation login page */
export const loginValidation = async values => {
    let errors = {};
    errors = await emailValidate(values);
    errors = await passwordValidate(values);
    return errors;
}

/* validation forgot password page */
export const forgotPasswordValidation = async values => {
    let errors = {};
    errors = await emailValidate(values);
    return errors;
}

/* validation reset password */
export const resetPasswordValidation = async values => {
    let errors = {};
    errors = await resetPasswordValidate1(values);
    errors = await resetPasswordValidate2(values);
    return errors;
}


/* validate register password page */
const registerValidate = values => {
    const errors = {};
    if(!values.firstName) errors.firstName = toast.error('First Name is Required...');
    if(!values.lastName) errors.lastName = toast.error('Last Name is Required...');
    return errors;
}

/* email validate */
const emailValidate = values => {
    const errors = {};
    if (!values.email)  errors.email = toast.error("Email is Required...");
    else if(values.email.includes(" ")) errors.email = toast.error("Wrong Email...");
    else if(!values.email.includes("@")) errors.email = toast.error("@ is Required...");
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))  errors.email = toast.error("Invalid email address...");
    return errors;
};
  
  /* password validate */
  const passwordValidate = values => {
      const errors = {};
      let specialChars = /[~`¿¡!#$%\^&*€£@+÷=\-\[\]\\';,/{}\(\)|\\":<>\?\.\_]/g
      if (!values.password)  errors.password = toast.error("Password is Required...");
      else if (values.password.length < 6)  errors.password = toast.error("Password is more than 6 characters...");
      else if(values.password.includes(" ")) errors.password = toast.error("Wrong Password...");
      else if (!specialChars.test(values.password))  errors.password = toast.error("Password must have special character...");
      return errors;
};

/* validate reset password */
const resetPasswordValidate1 = values => {
    const errors = {};
    let specialChars = /[~`¿¡!#$%\^&*€£@+÷=\-\[\]\\';,/{}\(\)|\\":<>\?\.\_]/g
      if (!values.password)  errors.password = toast.error("New Password is Required...");
      else if (values.password.length < 6)  errors.password = toast.error("Password is more than 6 characters...");
      else if(values.password.includes(" ")) errors.password = toast.error("Wrong Password...");
      else if (!specialChars.test(values.password))  errors.password = toast.error("Password must have special character...");
      return errors;
}

const resetPasswordValidate2 = values => {
    const errors = {};
      let specialChars = /[~`¿¡!#$%\^&*€£@+÷=\-\[\]\\';,/{}\(\)|\\":<>\?\.\_]/g
      if (!values.confirmPassword)  errors.confirmPassword = toast.error("Confirm Password is Required...");
      else if (values.confirmPassword.length < 6)  errors.confirmPassword = toast.error("Password is more than 6 characters...");
      else if(values.confirmPassword.includes(" ")) errors.confirmPassword = toast.error("Wrong Password...");
      else if (!specialChars.test(values.confirmPassword))  errors.confirmPassword = toast.error("Password must have special character...");
      return errors;
}