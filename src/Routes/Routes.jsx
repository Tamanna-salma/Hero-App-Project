import React from 'react'
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/errorPage/ErrorPage';
import Home from '../Pages/home/Home';
import App from '../Pages/App';

import Logo from '../Pages/Logo';
import Installition from '../Pages/install/Installition';


export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                loader:()=>fetch('../AppsData.json'),
                path:"/",
                Component:Home
            },
            {
                path:"/app",
                Component:App
            },
            {
               path:"/Installition",
               Component:Installition
            },
            {
                path:'/logo',
                Component:Logo
            }
        ]


    }
  
]);