import axios from 'axios';
export let BASE_URL = `http://localhost:8000/api/v1`



/* register user */
export const register = async values => await axios.post(`${BASE_URL}/user/register`, values);

/* register user */
export const login = async values => await axios.post(`${BASE_URL}/user/login`, values);

/* register user */
export const forogt = async values => await axios.post(`${BASE_URL}/user/forgot/password`, values);

/* register user */
export const reset = async (values, token) => await axios.post(`${BASE_URL}/user/reset/password/${token}`, values);

/* get all urls */
export const getUrls = async () => await axios.get(`${BASE_URL}/url/geturls`)

/* get all urls */
export const lognUrl = async values =>  await axios.post(`${BASE_URL}/url/originalurl`, values);

/* delete url */
export const deleteUrl = async url => await axios.delete(`${BASE_URL}/url/delete/${url}`);