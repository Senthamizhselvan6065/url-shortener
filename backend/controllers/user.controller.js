/* user router */
const userRouter = require('express').Router();
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const { userNameUnique, hashPassword, comparePassword, createJwtToken, resetUrlStringToken } = require('../helper/validate');
const ErrorHandler = require('../middlewares/ErrorHandler');
const sendEmail = require('../helper/email');
const crypto = require('crypto');
const { authUser } = require('../helper/auth');


userRouter.get('/getusers', authUser, expressAsyncHandler( async (req, res, next) => {
    const user = await User.find();
    res.status(200).json({
        success: true,
        user
    })
}))

/* post method */
/* urlPath - /api/v1/user/register */
userRouter.post('/register', expressAsyncHandler( async (req, res, next) => {
    const {firstName, lastName, email, password} = req.body;
    if(!firstName) return next (new ErrorHandler(400, 'please enter first name...'));
    else if(!lastName) return next (new ErrorHandler(400, 'please enter last name...'));
    else if(!email) return next (new ErrorHandler(400, 'please enter email...'));
    else if(!password) return next (new ErrorHandler(400, 'please enter password...'));
    /* unique name create function */
    const uniqueUserName = await userNameUnique(email);
    if(!uniqueUserName) return next (new ErrorHandler(400, 'user name cannot created...'));
    /* hash password function */
    const hash = await hashPassword(password);
    if(!hash) return next (new ErrorHandler(400, 'user password cannot hashing...'));
    /* find the user in user database */
    const user = await User.findOne({email});
    if(user) return next (new ErrorHandler(400, 'Already used this email address...'));
    /* create a new user */
    const newUser = await User({
        firstName,
        lastName,
        userName: uniqueUserName,
        email,
        password: hash
    });
    await newUser.save();
    if(newUser){
        res.status(201).json({
            success: true, 
            message: 'user created success...',
            user: newUser
        })
    }else if(!newUser) return next (new ErrorHandler(400, 'user cannot created...'));
}))

/* post method */
/* urlPath - /api/v1/user/login */
userRouter.post('/login', expressAsyncHandler( async (req, res, next) => {
    const {email, password} = req.body;
    if(!email) return next (new ErrorHandler(400, 'please enter email...'));
    else if(!password) return next (new ErrorHandler(400, 'please enter password...'));
    /* find the email in user database */
    const user = await User.findOne({email});
    if(!user) return next (new ErrorHandler(400, 'please enter your proper email address...'))
    if(user){
        /* compare password function */
        const comparePwd = await comparePassword(password, user.password);
        if(comparePwd){
            /* create jwt token */
            const token = await createJwtToken(user);
            if(token){
                return res.status(200).json({
                    success: true,
                    message: 'user login success...',
                    user,
                    token
                })
            }else if(!token) return next (new ErrorHandler(400, 'token is missing...'));
        }else if(!comparePwd) return next (new ErrorHandler(400, 'please enter your proper password...'));
    }else if(!user) return next (new ErrorHandler(400, 'cannot find user details...'));
}))

/* post method */
/* urlPath - /api/v11/user/forgot/password */
userRouter.post('/forgot/password', expressAsyncHandler( async (req, res, next) => {
    const {email} = req.body;
    if(!email) return next (new ErrorHandler(404, 'please enter email...'));
    /* find user email in database */
    const user = await User.findOne({email});
    if(!user) return next (new ErrorHandler(400, 'please enter proper email address...'));
    /* reset password function */
    const resetToken = await resetUrlStringToken(user);
    await user.save()
    let BASE_URL = process.env.FRONTEND_URL; 
    /* create reset url */ 
    const resetUrl = `<a href=${BASE_URL}/reset/password/${resetToken}> Rest your password </a>`;
     /* email send nessage */
    const message = `Your password reset url is as follows\n\n ${resetUrl}\n\n if you have not requested this email, then ignore it`;
    /* send email */
    try {
        sendEmail({
            email: user.email,
            subject: "Password reset request...",
            message
        }) 
        res.status(200).json({
            success: true,
            message: `reset password link send ${user.email}`,
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpire = undefined;
        await user.save({validateBeforeSave: false})
        return next(new ErrorHandler(500, error.message))
    }
}))

/* post method */
/* urlPath - /api/v1/user/reset/password/:token */
userRouter.post('/reset/password/:token', expressAsyncHandler( async (req, res, next) => {
    const {token} = req.params;
    const {password, confirmPassword} = req.body;
    if(!password && !confirmPassword) return next (new ErrorHandler(400, 'please enter new password & confirm password...'))
    if(!password) return next (new ErrorHandler(400, 'please enter new password...'));
    else if(!confirmPassword) return next (new ErrorHandler(400, 'please enter confirm password...'));
    /* hash token */
     const hashToken = await crypto.createHash('sha256').update(token).digest('hex');
    /* find the user data in database and get reset password token and expire time */
    const user = await User.findOne({
        resetPasswordToken: hashToken,
        resetPasswordTokenExpire: {
            $gt: Date.now()
        }
    })  
    if(!user) return next(new ErrorHandler(401, "reset token is invalid or expired..."));
    /* match password */
    if(password !== confirmPassword) return next (new ErrorHandler(400, 'password cannot match...?'));
    /* reset password hashing */
    let hashedPassword = await hashPassword(password);
    user.password = hashedPassword 
    user.resetPasswordToken = undefined
    user.resetPasswordTokenExpire = undefined
    await user.save();
    res.status(200).json({
        success: true,
        message: "password updated..."
    })
}));

module.exports = userRouter;