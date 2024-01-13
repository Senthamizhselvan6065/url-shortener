# Url Shortener...

------------------------------

## MERN Stack

<div align="left">
	<table>
		<tr>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code></td>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code></td>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/></code></td>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/></code></td>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/></code></td>
		</tr>
	</table>

-------------------------------

## Dependencies and using npm packages
  
1. bcrypt
2. body-parse
3. cors
4. express 
5. mongoose
6. dotenv
7. jsonwebtoken
8. nodemailer
9. nodemon
10. shortid
11. validator
12. crypto
13. express-async-handler
14. valid-url

-------------------------------

## BackEnd Router End Points

### BASE_URL : http://password-reset.com

<b>Create a Account</b>
<pre>POST : <a href='http://password-reset.com/api/v1/user/register'>/register</a></pre>

<b>Login a user</b>
<pre>POST : <a href='http://password-reset.com/api/v1/user/login'>/login</a></pre>

<b>Forgot Password</b>
  > your reset password link send register email address 
<pre>POST : <a href='http://password-reset.com/api/v1/user/forgot/password'>/forgot/password</a></pre>

<b>Reset Password</b>
  > get the link and reset your new password
<pre>POST : <a href='http://password-reset.com/api/v1/user/reset/password/:token'>/reset/password</a></pre>

<b>Long Url to Short Url</b>
  > paste long url in request body
<pre>POST : <a href='http://password-reset.com/api/v1/url/originalUrl'>/reset/password</a></pre>

<b>Short Url</b>
  > get the short Url in req.params
<pre>GET : <a href='http://password-reset.com/api/v1/user/reset/password/:token'>/reset/password</a></pre>

<b>Delete Short Url</b>
  > get the req.params and delete now
<pre>DELETE : <a href='http://password-reset.com/api/v1/url/delete/:shortUrl'>/delete/:shortUrl</a></pre>

---------------------------------

## FrontEnd Router End Points

### BASE_URL : http://password-reset.com

<b>Create a user</b>
<pre>POST : <a href='http://password-reset.com/register'>/register</a></pre>

<b>Login a user</b>
<pre>POST : <a href='http://password-reset.com/login'>/login</a></pre>

<b>Forgot Password</b>
<pre>POST : <a href='http://password-reset.com/forgot/password'>/forgot/password</a></pre>

<b>Reset Password</b>
<pre>POST : <a href='http://password-reset.com/reset/password/:token'>/reset/password/:token</a></pre>

<b>Create a Short Url</b>
> create a short url
<pre>POST : <a href='http://password-reset.com/url/shortener'>/url/shortener</a></pre>

<b>Short Url</b>
> navigate short url page
<pre>POST : <a href='http://password-reset.com/short/url'>/short/url</a></pre>