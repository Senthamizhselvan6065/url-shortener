const urlRouter = require('express').Router();
const expressAsyncHandler = require('express-async-handler');
const Url = require('../models/url.modell');
const { isValidUrl, shortUri } = require('../helper/url.validate');
const ErrorHandler = require('../middlewares/ErrorHandler');

/* get method */
/* urlPath - /api/v1/url/geturls */
urlRouter.get('/geturls', expressAsyncHandler( async (req, res, next) => {
    const url = await Url.find();
    if(url) return res.status(200).json({
        success: true,
        count: url.length,
        url
    });
    else if(!url) return next (new ErrorHandler(401, 'URL not found...'));
}))

/* post method */
/* urlPath - /api/v1/url/originalurl */
urlRouter.post('/originalurl', expressAsyncHandler( async (req, res, next) => {
    const {originalUrl} = req.body;
    if(!originalUrl) return next (new ErrorHandler(400, 'please enter LONG URL...'));
    /* Validate URL function */
    const validurl = await isValidUrl(originalUrl);
    if(!validurl) return next (new ErrorHandler(400, 'Invalid URL...'));
    /* find url in url database */
    const url = await Url.findOne({originalUrl});
    if(url) return next (new ErrorHandler(400, 'Already used this URL...'));
    /* create short URL function */
    const shortUrl = await shortUri(originalUrl);
    const newUrl = await Url({
        originalUrl,
        shortUrl
    });
    await newUrl.save();
    res.status(200).json({
        success: true,
        message: 'url created...',
        url: newUrl
    })
}))

/* get method */
/* urlPath - /api/v1/url/shortUrl/:shortUrl */
urlRouter.get('/shortUrl/:shortUrl', expressAsyncHandler( async (req, res, next) => {
    const {shortUrl} = req.params;
    const url = await Url.findOne({shortUrl});
    url.count++
    await url.save();
    if(url) res.redirect(url.originalUrl);
    else if(!url) return next (new ErrorHandler(401, 'URL not found...'));
}))

/* get method */
/* urlPath - /api/v1/url/count/:shortUrl */
urlRouter.get('/count/:shortUrl', expressAsyncHandler( async (req, res, next) => {
    const {shortUrl} = req.params;
    const url = await Url.findOne({shortUrl});
    if(url) return res.status(200).json({
        success: true,
        count: url.count
    })
    else if(!url) return next (new ErrorHandler(401, 'URL not found...'));
}))

/* delete method */
/* urlPath - /api/v1/url/delete/:shortUrl */
urlRouter.delete('/delete/:shortUrl', expressAsyncHandler( async (req, res, next) => {
    const { shortUrl } = req.params;
    const result = await Url.deleteOne({shortUrl });
     if (result.deletedCount === 1)  return res.status(200).json({ 
          success: true,
          message: 'URL deleted...'
      })     
     else if(!result) return next (new ErrorHandler(401, 'URL not found...'));
}))


module.exports = urlRouter;