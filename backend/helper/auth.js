const jwt = require("jsonwebtoken");
const ErrorHandler = require("../middlewares/ErrorHandler");
const User = require("../models/user.model");
const expressAsyncHandler = require("express-async-handler");


const authUser = expressAsyncHandler( async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    if(!token) return next (new ErrorHandler(401, 'Login first to handle this resource...'));
    const decodeToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decodeToken.id)
    next();
  } catch (error) {
     res.status(401).json({
        success: false,
        message: 'Authentication Failed...!',
        error
     })
  }
});

module.exports = { authUser };
