import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import HeroRegister from './components/HeroRegister/HeroRegister.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivetRouts from './components/PrivetRouts/PrivetRouts.jsx';
import Profile from './components/Header/Profile/Profile.jsx';
import { element } from 'prop-types';
import DashBoard from './components/Dashboard/DashBoard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/registerHero",
        element: <HeroRegister></HeroRegister>
      },
      {
        path: "/orders",
        element: <PrivetRouts><Orders></Orders></PrivetRouts>
      },
      {
        path: "profile",
        element: <PrivetRouts><Profile></Profile></PrivetRouts>
      },
      {
        path: '/dashboard',
      element:<DashBoard></DashBoard>
      }
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
