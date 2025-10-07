import React from 'react'
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/errorPage/ErrorPage';
import Home from '../Pages/home/Home';


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
            }
        ]


    }
  
]);