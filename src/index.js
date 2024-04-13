import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from'./pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import AuthorPost from './pages/AuthorPost';
import CategoryPost from './pages/CategoryPost';
import DashBoard from './pages/DashBoard';
import EditPost from './pages/EditPost';
import Logout from './pages/Logout';

const router= createBrowserRouter ([
{
  path: "/",
  element:<Layout/>, 
  errorElement: <ErrorPage/>,
  children: [
    {index: true, element: <Home />},
    {path: "posts/:id", element: <PostDetail/>},
    {path: "register", element: <Register/>},
    {path: "login", element: <Login/>},
    {path: "profile/id", element: <UserProfile/>},
    {path: "authors", element: <Authors/>},
    {path: "create", element: <CreatePost/>},
    {path: "posts/categories/:category", element: <CategoryPost/>},
    {path: "posts/users/:id", element: <AuthorPost/>},
    {path: "mypost/:id", element: <DashBoard/>},
    {path: "posts/id/:edit", element: <EditPost/>},
    {path: "logout", element: <Logout/>},


    



  ]
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


