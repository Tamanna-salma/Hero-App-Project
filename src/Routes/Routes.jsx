import React from 'react'
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/errorPage/ErrorPage';
import Home from '../Pages/home/Home';
import App from '../Pages/App';
import Installition from '../Pages/Installition';
import Logo from '../Pages/Logo';


export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                path:"/",
                Component:Home
            },
            {
                path:"/app",
                Component:App
            },
            {
                path:"/installition",
                Component:Installition
            },
            {
                path:'/logo',
                Component:Logo
            }
        ]


    }
  
]);