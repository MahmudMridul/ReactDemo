import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataForm from './components/DataForm';
import DataEdit from './components/DataEdit';

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <App/>
    },
    {
        path: '/add', 
        element: <DataForm/>
    },
    {
        path: '/edit',
        element: <DataEdit/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={routes}></RouterProvider>
    </React.StrictMode>
);
