const shortid = require('shortid');
const validUrl = require('valid-url');

/* is validate url function */
const isValidUrl = async url => await validUrl.isUri(url);

/* short url create function */
const shortUri = async () => await shortid.generate();

module.exports = {isValidUrl, shortUri}