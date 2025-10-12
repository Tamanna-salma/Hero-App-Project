import React from 'react'
import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/errorPage/ErrorPage';
import Home from '../Pages/home/Home';

import Installition from '../Pages/install/Installition';

import App from '../Pages/App/App';
import AppDetails from '../Pages/details/AppDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,

                path: "/",
                Component: Home
            },
            {
                path: "/app",
                Component: App
            },
            {
                path: "/Installition",
                Component: Installition
            },
            {
                path: '/App/:id',
                element: <AppDetails></AppDetails>

            }
        ]


    }

]);