import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataListContainer from './components/DataListContainer';

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <App/>,
        children: [
            {
                path: '/list',
                element: <DataListContainer/>
            }
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={routes}></RouterProvider>
    </React.StrictMode>
);
