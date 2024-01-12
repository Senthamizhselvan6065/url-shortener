import React, { Suspense } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loader from './components/Loader';
// import Home from './components/url/Home';
// import Register from './components/user/Register';
// import Login from './components/user/Login';
// import ForgotPassword from './components/user/ForgotPassword';
// import ResetPassword from './components/user/ResetPassword';
// import Urlshortener from './components/url/Urlshortener';
// import Shorturl from './components/url/Shorturl';
// import PageNotFound from './components/url/PageNotFound';
// import Contact from './components/user/Contact';

const HomeComponent = React.lazy(() => import('./components/url/Home'));
const UrlShortenerComponent = React.lazy(() => import('./components/url/Urlshortener'));
const ShortUrlComponent = React.lazy(() => import('./components/url/Shorturl'));
const PageNotComponent = React.lazy(() => import('./components/url/PageNotFound'));
const RegisterComponent = React.lazy(() => import('./components/user/Register'));
const LoginComponent = React.lazy(() => import('./components/user/Login'));
const ForgotComponent = React.lazy(() => import('./components/user/ForgotPassword'));
const ResetComponent = React.lazy(() => import('./components/user/ResetPassword'));
const ContactComponent = React.lazy(() => import('./components/user/Contact'))

const App = () => {

  const router = createBrowserRouter([
      {
          path: '/',
          element: <HomeComponent />,
      },
      {
        path: '/register',
        element: <RegisterComponent />,
      },
      {
        path: '/login',
        element: <LoginComponent />,
      },
      {
        path: '/forgot/password',
        element: <ForgotComponent />,
      },
      {
        path: '/reset/password/:token',
        element: <ResetComponent />,
      },
      {
        path: '/url/shortener',
        element: <UrlShortenerComponent />,
      },
      {
        path: '/short/url',
        element: <ShortUrlComponent />,
      },
      {
        path: '/contact',
        element: <ContactComponent />
      },
      {
        path: '*',
        element: <PageNotComponent />,
      }
  ])

  return (
    <div>
        <Suspense fallback = {<Loader />} >
            <RouterProvider router={router} />
        </Suspense>
    </div>
  )
}

export default App